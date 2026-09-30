import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import PageTemplate from '../components/PageTemplate';
import { CATEGORIES, getBlogs, getCategoryCounts } from '../data/blogs';

const BlogPage = () => {
  const blogs = getBlogs();
  const counts = getCategoryCounts();
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredBlogs =
    activeCategory === 'All'
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [activeCategory]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <PageTemplate
      title="Shivam Thaker | Blog | Thoughts on Tech, Life & Growth"
      description="Essays across spiritual practice, tech craft, work, philosophy, and personal growth — from a backend engineer who ships and reflects."
      ogImage="/images/pose/pose_m14.png"
    >
      <Blog>
        <Container>
          <Design>
            <h1 data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">
              Blogs
            </h1>
            <h2 data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">
              &lt;Thoughts /&gt;
            </h2>
          </Design>
          <img
            data-aos="zoom-in"
            data-aos-duration="2000"
            src="/images/pose/pose_m14.png"
            alt="Shivam Thaker blog portrait"
          />
          <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            Not only shipping code — writing about spiritual practice, tech craft,
            work, philosophy, and the quiet habits that keep growth compounding.
          </h3>
        </Container>

        <Container>
          <FilterRow role="tablist" aria-label="Filter blogs by category">
            <FilterPill
              type="button"
              role="tab"
              aria-selected={activeCategory === 'All'}
              $active={activeCategory === 'All'}
              onClick={() => setActiveCategory('All')}
            >
              All <Count>({counts.All})</Count>
            </FilterPill>
            {CATEGORIES.map((category) => (
              <FilterPill
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                $active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category} <Count>({counts[category] || 0})</Count>
              </FilterPill>
            ))}
          </FilterRow>

          <ResultCount>
            {activeCategory === 'All'
              ? `All ${blogs.length} posts`
              : `Showing ${filteredBlogs.length} of ${blogs.length} posts`}
          </ResultCount>

          {filteredBlogs.length === 0 ? (
            <EmptyState>No posts in this category yet.</EmptyState>
          ) : (
            <BlogGrid>
              {filteredBlogs.map((blog, index) => (
                <CardLink key={blog.id} to={`/blog/${blog.id}`}>
                  <BlogCard
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    data-aos-duration="800"
                  >
                    <CardTop>
                      <CardEmoji aria-hidden="true">{blog.coverEmoji}</CardEmoji>
                      <CategoryBadge>{blog.category}</CategoryBadge>
                    </CardTop>
                    <CardTitle>{blog.title}</CardTitle>
                    <CardExcerpt>{blog.excerpt}</CardExcerpt>
                    <CardMeta>
                      <span>{formatDate(blog.date)}</span>
                      <MetaDot aria-hidden="true">·</MetaDot>
                      <span>{blog.readTime}</span>
                    </CardMeta>
                  </BlogCard>
                </CardLink>
              ))}
            </BlogGrid>
          )}
        </Container>

        <BG
          style={{
            backgroundColor: 'rgb(49,196,140, 0.2)',
            top: '10%',
            left: '55%',
          }}
        />
      </Blog>
    </PageTemplate>
  );
};

const Blog = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
`;

const Design = styled.div`
  position: relative;
  overflow: hidden;
  height: 35vh;

  & > h2 {
    color: transparent;
    font-size: min(20rem, 22vw);
    position: absolute;
    z-index: -3;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--yellow);
    bottom: 15%;
    left: 0%;
    white-space: nowrap;

    @media (max-width: 768px) {
      font-size: min(13rem, 16vw);
      bottom: 20%;
    }
  }

  & > h1 {
    font-size: min(15rem, 17vw);
    font-weight: 500;
    position: absolute;
    z-index: 0;
    bottom: 5%;
    left: 0%;
    color: var(--text-primary);

    @media (max-width: 768px) {
      font-size: min(10rem, 12vw);
      line-height: 1.2;
    }
  }
`;

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 1580px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  padding: 5rem;
  z-index: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    min-height: 80vh;
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 4rem;
  }

  & > img {
    position: absolute;
    width: 50%;
    height: auto;
    left: 70%;
    z-index: -2;

    @media (max-width: 768px) {
      width: 80%;
    }
  }

  & > h3 {
    margin-left: auto;
    width: 50%;
    text-align: left;
    font-weight: 400;
    font-size: 3rem;
    color: var(--text-primary);
    overflow-wrap: break-word;

    @media (max-width: 768px) {
      margin: 2rem 0;
      width: 90%;
      font-size: max(2rem, 16px);
    }
  }
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 3rem 0 1rem;
  align-items: center;
`;

const FilterPill = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 3rem;
  font-size: max(1.4rem, 13px);
  font-weight: 500;
  font-family: inherit;
  border: 2px solid ${(props) => (props.$active ? 'var(--green)' : 'var(--border-color)')};
  background: ${(props) => (props.$active ? 'var(--green)' : 'var(--bg-secondary)')};
  color: ${(props) => (props.$active ? 'var(--text-on-accent)' : 'var(--text-secondary)')};
  cursor: pointer;
  transition: all 0.25s ease;
  transform: ${(props) => (props.$active ? 'scale(1.05)' : 'scale(1)')};

  &:hover {
    border-color: var(--green);
    color: ${(props) => (props.$active ? 'var(--text-on-accent)' : 'var(--green-text)')};
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.4rem;
    font-size: max(1.2rem, 12px);
  }
`;

const Count = styled.span`
  opacity: 0.7;
  font-size: max(1.2rem, 11px);
`;

const ResultCount = styled.p`
  font-size: max(1.4rem, 13px);
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const EmptyState = styled.p`
  font-size: max(1.8rem, 16px);
  color: var(--text-secondary);
  padding: 4rem;
  text-align: center;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 3rem;
  margin: 0 0 4rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  min-width: 0;
`;

const BlogCard = styled.article`
  background: var(--bg-secondary);
  border-radius: 1.5rem;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 100%;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--green), var(--yellow));
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

const CardEmoji = styled.span`
  font-size: max(3rem, 28px);
  line-height: 1;
`;

const CategoryBadge = styled.span`
  background: var(--bg-primary);
  color: var(--text-secondary);
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-size: max(1.1rem, 11px);
  font-weight: 500;
  white-space: nowrap;
`;

const CardTitle = styled.h3`
  font-size: max(2rem, 18px);
  font-weight: 600;
  color: var(--text-primary);
  margin: 1rem 0 0.5rem;
  overflow-wrap: break-word;
`;

const CardExcerpt = styled.p`
  font-size: max(1.4rem, 14px);
  color: var(--text-secondary);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardMeta = styled.div`
  font-size: max(1.2rem, 12px);
  color: var(--text-secondary);
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const MetaDot = styled.span`
  opacity: 0.6;
`;

const BG = styled.div`
  position: absolute;
  left: 53%;
  width: 70rem;
  height: 70rem;
  border-radius: 50%;
  z-index: -5;
`;

export default BlogPage;
