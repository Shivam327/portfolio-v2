import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../components/PageTemplate';
import { TESTIMONIALS } from '../data/testimonials';

const TestimonialsPage = () => {
  return (
    <PageTemplate
      title="Testimonials - Shivam Thaker"
      description="Client testimonials and feedback about Shivam Thaker's work"
    >
      <TestimonialsContainer>
        <TestimonialsHeader>
          <h1>&lt;Testimonials /&gt;</h1>
          <p>What clients say about my work</p>
        </TestimonialsHeader>
        
        <TestimonialsGrid>
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <TestimonialContent>
                <QuoteIcon>"</QuoteIcon>
                <TestimonialText>{testimonial.content}</TestimonialText>
              </TestimonialContent>
              <TestimonialAuthor>
                <AuthorName>{testimonial.name}</AuthorName>
                <AuthorRole>{testimonial.role}</AuthorRole>
                <AuthorCompany>{testimonial.company}</AuthorCompany>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsContainer>
    </PageTemplate>
  );
};


const TestimonialsContainer = styled.div`
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

  @media (max-width: 1024px) {
    min-height: 80vh;
  }

  & > h1 {
    margin: 2rem 0;
    width: 60%;
    text-align: left;
    font-weight: 400;
    font-size: 2.5rem;
    color: var(--dark);

    @media (max-width: 768px) {
      margin: 2rem 0;
      width: 90%;
      font-size: 2rem;
    }
  }
`;

const TestimonialsHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;

  & > p {
    font-size: 1.8rem;
    color: var(--text-secondary);
    margin-top: 1rem;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  margin: 5rem 0;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TestimonialCard = styled.div`
  background: var(--white);
  border-radius: 1.5rem;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
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
`;

const TestimonialContent = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const QuoteIcon = styled.span`
  font-size: 4rem;
  color: var(--yellow);
  position: absolute;
  top: -1rem;
  left: -1rem;
  opacity: 0.3;
`;

const TestimonialText = styled.p`
  font-size: 1.8rem;
  color: var(--dark);
  line-height: 1.6;
  font-style: italic;
  padding-left: 2rem;
`;

const TestimonialAuthor = styled.div`
  border-top: 1px solid var(--border-color);
  padding-top: 2rem;
`;

const AuthorName = styled.h4`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 0.5rem;
`;

const AuthorRole = styled.p`
  font-size: 1.4rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
`;

const AuthorCompany = styled.p`
  font-size: 1.4rem;
  color: var(--green);
  font-weight: 500;
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin: 5rem 0;
  padding: 4rem;
  background: linear-gradient(135deg, rgba(49, 196, 140, 0.1), rgba(244, 196, 48, 0.1));
  border-radius: 2rem;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: var(--green);
  margin-bottom: 1rem;
`;

const StatLabel = styled.div`
  font-size: 1.6rem;
  color: var(--dark);
  font-weight: 500;
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 5rem;
  padding: 4rem;
  background: linear-gradient(135deg, rgba(49, 196, 140, 0.1), rgba(244, 196, 48, 0.1));
  border-radius: 2rem;

  & > h4 {
    font-size: 3rem;
    font-weight: 600;
    color: var(--dark);
    margin-bottom: 1rem;
  }

  & > p {
    font-size: 1.8rem;
    color: var(--text-secondary);
    margin-bottom: 3rem;
  }
`;

export default TestimonialsPage;
