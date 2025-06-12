# PDF Reader Setup

## How to Add PDF Files

To use the PDF reader functionality for your featured publications:

1. **Place your PDF files in this directory** (`public/pdfs/`)
2. **Name your PDF files** to match the article IDs from your portfolio
   - For example: if an article has ID `sample-article`, name the PDF `sample-article.pdf`
   - The PDF reader will automatically load `/pdfs/{article-id}.pdf` when accessed

## File Naming Convention

- Use kebab-case (lowercase with hyphens)
- Match the article ID exactly
- Use `.pdf` extension

### Example:

- Article ID: `memory-book-2024`
- PDF file name: `memory-book-2024.pdf`
- Full path: `public/pdfs/memory-book-2024.pdf`

## PDF Reader Features

✅ **Two-page book spread** - Shows left and right pages simultaneously  
✅ **Smooth page turning animations** - Beautiful transitions between pages  
✅ **Responsive design** - Works on desktop, tablet, and mobile  
✅ **Minimal interface** - Clean design matching your site's aesthetic  
✅ **Navigation controls** - Previous/next buttons and page input  
✅ **High-quality rendering** - Crisp text and images

## Technical Notes

- PDFs are rendered using PDF.js for cross-browser compatibility
- Text selection and annotations are supported
- Files are served from the public directory for optimal performance
- The reader automatically detects page count and adjusts navigation

## Troubleshooting

If a PDF doesn't load:

1. Check the file exists in `public/pdfs/`
2. Verify the filename matches the article ID exactly
3. Ensure the PDF is not corrupted
4. Check browser console for specific error messages

The PDF reader will show appropriate error messages if files are missing or corrupted.
