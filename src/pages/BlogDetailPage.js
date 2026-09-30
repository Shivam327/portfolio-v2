import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import PageTemplate from '../components/PageTemplate';
import NotFoundPage from './NotFoundPage';
import { getBlogById } from '../data/blogs';

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = getBlogById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 2000 });
  }, [id]);

  if (!blog) {
    return <NotFoundPage />;
  }

  const paragraphs = blog.content
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <PageTemplate
      title={`${blog.title} | Shivam Thaker`}
      description={blog.excerpt}
      ogImage="/images/pose/pose_m14.png"
    >
      <Detail>
        <Container>
          <BackLink to="/blog">← Back to Blog</BackLink>

          <Design>
            <h1 data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
              {blog.title}
            </h1>
            <h2 data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
              &lt;{blog.category} /&gt;
            </h2>
          </Design>

          <MetaRow data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
            <CategoryBadge>{blog.category}</CategoryBadge>
            <MetaItem>{formatDate(blog.date)}</MetaItem>
            <MetaDot aria-hidden="true">·</MetaDot>
            <MetaItem>{blog.readTime} read</MetaItem>
            <Emoji aria-hidden="true">{blog.coverEmoji}</Emoji>
          </MetaRow>

          <Article data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Article>

          <FooterNav>
            <BackLink to="/blog">← All posts</BackLink>
          </FooterNav>
        </Container>

        <BG
          style={{
            backgroundColor: 'rgb(248,224,142, 0.25)',
            top: '15%',
            left: '50%',
          }}
        />
      </Detail>
    </PageTemplate>
  );
};

const Detail = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
`;

const Container = styled.div`
  overflow-x: hidden;
  width: 100%;
  max-width: 1580px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  padding: 5rem;
  z-index: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 4rem;
  }
`;

const BackLink = styled(Link)`
  font-size: max(1.6rem, 14px);
  color: var(--green-text);
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 2rem;
  display: inline-block;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }
`;

const Design = styled.div`
  position: relative;
  overflow: hidden;
  height: 40vh;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    height: 28vh;
  }

  & > h2 {
    color: transparent;
    font-size: min(12rem, 16vw);
    position: absolute;
    z-index: -3;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--yellow);
    bottom: 15%;
    left: 0%;
    white-space: nowrap;

    @media (max-width: 768px) {
      font-size: min(8rem, 12vw);
      bottom: 20%;
    }
  }

  & > h1 {
    font-size: min(8rem, 10vw);
    font-weight: 500;
    position: absolute;
    z-index: 0;
    bottom: 5%;
    left: 0%;
    color: var(--text-primary);
    max-width: 90%;
    line-height: 1.15;
    overflow-wrap: break-word;

    @media (max-width: 768px) {
      font-size: min(4.5rem, 9vw);
      line-height: 1.2;
      max-width: 100%;
    }
  }
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const CategoryBadge = styled.span`
  background: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 0.4rem 1.2rem;
  border-radius: 1rem;
  font-size: max(1.2rem, 12px);
  font-weight: 500;
  border: 1px solid var(--border-color);
`;

const MetaItem = styled.span`
  font-size: max(1.4rem, 13px);
  color: var(--text-secondary);
`;

const MetaDot = styled.span`
  color: var(--text-secondary);
  opacity: 0.6;
`;

const Emoji = styled.span`
  font-size: max(2.4rem, 20px);
  margin-left: auto;
`;

const Article = styled.article`
  max-width: 72rem;
  margin-bottom: 4rem;

  & > p {
    font-size: max(1.8rem, 16px);
    line-height: 1.8;
    color: var(--text-primary);
    margin-bottom: 2rem;
    overflow-wrap: break-word;
  }
`;

const FooterNav = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
`;

const BG = styled.div`
  position: absolute;
  left: 53%;
  width: 70rem;
  height: 70rem;
  border-radius: 50%;
  z-index: -5;
`;

export default BlogDetailPage;
