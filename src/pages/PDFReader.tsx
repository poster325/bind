import React, { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Container = styled.div`
  min-height: 100vh;
  background: var(--bg-primary);
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.header`
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow-sm);
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  background: var(--bg-primary);
  transition: all 0.3s ease;

  &:hover {
    background: var(--bg-accent);
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
`;

const BookTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  flex: 1;
  text-align: center;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PageInput = styled.input`
  width: 60px;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 0.25rem;
  text-align: center;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const PageInfo = styled.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const ReaderContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: #f5f5f5;
  overflow: hidden;
`;

const BookSpread = styled.div<{ $isAnimating: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  transition: ${props => props.$isAnimating ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'};
  transform-style: preserve-3d;
  
  @media (max-width: 1200px) {
    gap: 1rem;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PageContainer = styled.div<{ $isLeft?: boolean; $isAnimating?: boolean }>`
  position: relative;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  transform-origin: ${props => props.$isLeft ? 'right center' : 'left center'};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    box-shadow: 
      0 8px 12px rgba(0, 0, 0, 0.15),
      0 20px 40px rgba(0, 0, 0, 0.15);
  }

  .react-pdf__Page {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .react-pdf__Page__canvas {
    max-width: 100% !important;
    height: auto !important;
    display: block !important;
    border-radius: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 350px !important;
  }
`;

const PDFFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background: white;
`;

const NavigationButton = styled.button<{ $direction: 'prev' | 'next' }>`
  position: absolute;
  top: 50%;
  ${props => props.$direction === 'prev' ? 'left: 2rem;' : 'right: 2rem;'}
  transform: translateY(-50%);
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.8;
  z-index: 10;

  &:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
    box-shadow: var(--shadow-lg);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    transform: none;
    margin: 0.5rem;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: var(--text-secondary);
  font-size: 1.1rem;
`;

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: var(--text-secondary);
  text-align: center;
  
  h3 {
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }
`;

const PlaceholderPage = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
  text-align: center;
  padding: 2rem;
  
  h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
`;

const PDFReader: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pdfFile, setPdfFile] = useState<string | null>(null);
  const [bookTitle, setBookTitle] = useState<string>("Loading...");

  // Calculate page width based on screen size
  const [pageWidth, setPageWidth] = useState(400);

  useEffect(() => {
    const updatePageWidth = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setPageWidth(Math.min(350, screenWidth - 40));
      } else if (screenWidth < 1200) {
        setPageWidth(350);
      } else {
        setPageWidth(400);
      }
    };

    updatePageWidth();
    window.addEventListener('resize', updatePageWidth);
    return () => window.removeEventListener('resize', updatePageWidth);
  }, []);

  useEffect(() => {
    // Load PDF file based on article ID
    const loadPDF = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Use the PDF path based on article ID
        const pdfPath = `/${id}.pdf`;
        console.log("Loading PDF from path:", pdfPath);
        setPdfFile(pdfPath);
        setBookTitle(id?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Book");
      } catch (err) {
        setError("Failed to load PDF");
        console.error("Error loading PDF:", err);
      }
    };

    if (id) {
      loadPDF();
    }
  }, [id]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error("PDF load error:", error);
    console.error("PDF file path:", pdfFile);
    setError(`Failed to load PDF: ${error.message || 'Unknown error'}`);
    setIsLoading(false);
  };

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= numPages && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage(pageNumber);
      
      // Reset animation state after animation completes
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const nextPage = () => {
    if (currentPage < numPages - 1) {
      goToPage(currentPage + 2);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(Math.max(1, currentPage - 2));
    }
  };

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = parseInt(e.target.value);
    if (!isNaN(page)) {
      goToPage(page);
    }
  };

  // Determine which pages to show (two-page spread)
  const leftPage = currentPage;
  const rightPage = currentPage + 1;
  const showRightPage = rightPage <= numPages;

  return (
    <Container>
      <TopBar>
        <BackButton to="/portfolio">
          ← Back to Portfolio
        </BackButton>
        
        <BookTitle>{bookTitle}</BookTitle>
        
        <Controls>
          <PageInput
            type="number"
            min="1"
            max={numPages}
            value={currentPage}
            onChange={handlePageInputChange}
          />
          <PageInfo>of {numPages}</PageInfo>
        </Controls>
      </TopBar>

      <ReaderContainer>
        {isLoading && (
          <LoadingSpinner>
            Loading PDF...
          </LoadingSpinner>
        )}

        {error && (
          <ErrorMessage>
            <h3>Error Loading PDF</h3>
            <p>{error}</p>
            <p>Please check if the PDF file exists and try again.</p>
          </ErrorMessage>
        )}

        {pdfFile && !error && (
          <>
            <NavigationButton 
              $direction="prev" 
              onClick={prevPage}
              disabled={currentPage <= 1 || isAnimating}
            >
              ‹
            </NavigationButton>

            <Document
              file={pdfFile}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading=""
            >
              <BookSpread $isAnimating={isAnimating}>
                <PageContainer $isLeft={true} $isAnimating={isAnimating}>
                  <Page
                    pageNumber={leftPage}
                    width={pageWidth}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                  />
                </PageContainer>
                
                {showRightPage && (
                  <PageContainer $isAnimating={isAnimating}>
                    <Page
                      pageNumber={rightPage}
                      width={pageWidth}
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                    />
                  </PageContainer>
                )}
              </BookSpread>
            </Document>

            <NavigationButton 
              $direction="next" 
              onClick={nextPage}
              disabled={currentPage >= numPages - 1 || isAnimating}
            >
              ›
            </NavigationButton>
          </>
        )}
      </ReaderContainer>
    </Container>
  );
};

export default PDFReader; 