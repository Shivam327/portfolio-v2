import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../components/PageTemplate';
import PageHeader from '../components/layouts/PageHeader';
import { TESTIMONIALS } from '../data/testimonials';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const TestimonialsPage = () => {
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  // Add debugging
  console.log('TESTIMONIALS data:', TESTIMONIALS);
  console.log('TESTIMONIALS length:', TESTIMONIALS?.length);

  return (
    <PageTemplate
      title="Shivam Thaker | Testimonials | Client Success Stories"
      description="Real feedback from clients and teams. Testimonials reflecting business impact and technical quality delivered on every project."
    >
      <Container>
        <PageHeader 
          title="Testimonials" 
          backgroundText="REVIEWS"
          subtitle="What clients say about working together"
        />
        
        <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          Real feedback from clients and teams I've worked with. These testimonials reflect 
          the business impact and technical quality I deliver on every project.
        </h3>

        {/* Add debugging display */}
        <div style={{ color: 'white', margin: '2rem 0' }}>
          Debug: {TESTIMONIALS ? `${TESTIMONIALS.length} testimonials loaded` : 'No testimonials data'}
        </div>

        <TestimonialsGrid>
          {TESTIMONIALS && TESTIMONIALS.length > 0 ? (
            TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                data-aos="fade-up" 
                data-aos-delay={index * 200} 
                data-aos-duration="1000"
              >
                <Rating>{renderStars(testimonial.rating)}</Rating>
                <Content>"{testimonial.content}"</Content>
                <ProjectInfo>
                  <span>Project: {testimonial.project}</span>
                </ProjectInfo>
                <AuthorInfo>
                  <AuthorName>{testimonial.name}</AuthorName>
                  <AuthorRole>{testimonial.role}</AuthorRole>
                  <Company>{testimonial.company}</Company>
                </AuthorInfo>
              </TestimonialCard>
            ))
          ) : (
            <div style={{ color: 'white', textAlign: 'center', padding: '2rem' }}>
              No testimonials data available
            </div>
          )}
        </TestimonialsGrid>

        <StatsSection data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
          <StatItem>
            <StatNumber>100%</StatNumber>
            <StatLabel>Client Satisfaction</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>50+</StatNumber>
            <StatLabel>Projects Delivered</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>99.9%</StatNumber>
            <StatLabel>System Uptime</StatLabel>
          </StatItem>
        </StatsSection>

        <CTASection data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1000">
          <h4>Ready to join these success stories?</h4>
          <p>Let's discuss how I can help deliver similar results for your project.</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact">
              <Button text="Start Project" color="var(--green)" />
            </Link>
            <Link to="/services">
              <Button text="View Services" color="var(--yellow)" />
            </Link>
          </div>
        </CTASection>
      </Container>
    </PageTemplate>
  );
};


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

  @media (max-width: 1024px) {
    min-height: 80vh;
  }

  & > h3 {
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

const Rating = styled.div`
  font-size: 2.4rem;
  color: var(--yellow);
  margin-bottom: 2rem;
  letter-spacing: 0.2rem;
`;

const Content = styled.p`
  font-size: 1.8rem;
  color: var(--dark);
  line-height: 1.6;
  margin-bottom: 2rem;
  font-style: italic;
`;

const ProjectInfo = styled.div`
  margin-bottom: 2rem;
  
  & > span {
    background: var(--green);
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const AuthorInfo = styled.div`
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

const Company = styled.p`
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
