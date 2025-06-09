import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { sampleArticles, sampleBinders } from "../utils/markdownParser";

const PageHeader = styled.section`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 8rem 0 4rem;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const PageSubtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 6rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  text-align: center;
  margin: 0 auto 4rem;
`;

const FeaturedSection = styled.div`
  background: var(--bg-secondary);
  padding: 4rem 0;
`;

const FeaturedItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  &:nth-child(even) {
    direction: rtl;
  }

  &:nth-child(even) > * {
    direction: ltr;
  }
`;

const FeaturedContent = styled.div`
  h3 {
    font-size: 1.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }
  p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

const FeaturedImage = styled.div`
  height: 300px;
  background: var(--bg-accent);
  border: 2px dashed var(--border-color);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 1.125rem;
  font-weight: 500;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const PortfolioItem = styled.div`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-color);
  }
`;

const PortfolioImage = styled.div`
  height: 250px;
  background: var(--bg-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 1.125rem;
  font-weight: 500;
  border-bottom: 1px solid var(--border-color);
`;

const PortfolioContent = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: var(--bg-accent);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Link = styled.a`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary-color);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 2rem;
  background: var(--bg-primary);
  border-radius: 1rem;
  border: 1px solid var(--border-color);
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: var(--text-secondary);
  font-weight: 500;
`;

const SearchSection = styled.div`
  margin-bottom: 3rem;
`;

const SearchBar = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid var(--border-color);
  border-radius: 2rem;
  font-size: 1rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  &::placeholder {
    color: var(--text-light);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-light);
  font-size: 1.125rem;
`;

const BinderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const BinderCard = styled(Link)`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-color);
  }
`;

const BinderAvatar = styled.div`
  height: 200px;
  background: var(--bg-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 1.125rem;
  font-weight: 500;
  border-bottom: 1px solid var(--border-color);
  position: relative;
`;

const BinderInfo = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  .title {
    color: var(--text-secondary);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  .location {
    color: var(--text-light);
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

  .stats {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }
`;

const AuthorInfo = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  
  .author-name {
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 0.25rem;
  }
  
  .author-bio {
    font-size: 0.875rem;
    color: var(--text-secondary);
  }
`;

const Portfolio: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBinders = sampleBinders.filter(binder => 
    binder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    binder.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    binder.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
    binder.specialties.some(specialty => specialty.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle>Portfolio</PageTitle>
          <PageSubtitle>
            Our binders, their autobiography, and contributed work
          </PageSubtitle>
        </Container>
      </PageHeader>

      <FeaturedSection>
        <Container>
          <SectionTitle>Featured Publications</SectionTitle>
          <SectionSubtitle>
            Discover compelling stories created through our platform, showcasing the diverse voices and expertise of our talented binders.
          </SectionSubtitle>

          {sampleArticles.map((article, i) => (
            <FeaturedItem key={article.id}>
              <FeaturedContent>
                <h3>"{article.title}"</h3>
                <p>{article.excerpt}</p>
                <AuthorInfo>
                  <div className="author-name">{article.author}</div>
                  <div className="author-bio">{article.authorBio}</div>
                </AuthorInfo>
                <Tags>
                  {article.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </Tags>
                <Link href={`#article-${article.id}`}>Read Full Article →</Link>
              </FeaturedContent>
              <FeaturedImage>Article Preview</FeaturedImage>
            </FeaturedItem>
          ))}
        </Container>
      </FeaturedSection>

      <Section>
        <Container>
          <SectionTitle>Meet our Binders</SectionTitle>
          <SectionSubtitle>
            Get to know the talented writers and creators who bring their unique perspectives and expertise to our platform.
          </SectionSubtitle>

          <SearchSection>
            <SearchBar>
              <SearchIcon>🔍</SearchIcon>
              <SearchInput
                type="text"
                placeholder="Search binders by name, title, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchBar>
          </SearchSection>

          <BinderGrid>
            {filteredBinders.map((binder) => (
              <BinderCard key={binder.id} to={`/binder/${binder.id}`}>
                <BinderAvatar>
                  {binder.avatar ? (
                    <img 
                      src={binder.avatar} 
                      alt={binder.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  ) : (
                    'Photo'
                  )}
                </BinderAvatar>
                <BinderInfo>
                  <h3>{binder.name}</h3>
                  <div className="title">{binder.title}</div>
                  <div className="location">📍 {binder.location}</div>
                  <div className="stats">
                    <span>{binder.stats.booksPublished} books</span>
                    <span>⭐ {binder.stats.rating}</span>
                    <span>{binder.stats.totalReads} reads</span>
                  </div>
                  <Tags>
                    {binder.tags.slice(0, 3).map((tag, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                    {binder.tags.length > 3 && (
                      <Tag>+{binder.tags.length - 3} more</Tag>
                    )}
                  </Tags>
                </BinderInfo>
              </BinderCard>
            ))}
          </BinderGrid>

          {filteredBinders.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
              No binders found matching your search criteria.
            </div>
          )}

          <StatsGrid>
            <StatItem>
              <StatNumber>500+</StatNumber>
              <StatLabel>Books Published</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>95%</StatNumber>
              <StatLabel>User Satisfaction</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>5+</StatNumber>
              <StatLabel>Awards Won</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>{sampleBinders.length}</StatNumber>
              <StatLabel>Featured Binders</StatLabel>
            </StatItem>
          </StatsGrid>
        </Container>
      </Section>
    </>
  );
};

export default Portfolio;
