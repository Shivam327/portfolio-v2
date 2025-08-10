import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../components/PageTemplate';
import PageHeader from '../components/layouts/PageHeader';
import { SERVICES } from '../data/services';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <PageTemplate
      title="Shivam Thaker | Services | Full-Stack Development & Infrastructure"
      description="Professional services including Web App Development, API Development, Infrastructure Monitoring, ERP/CRM Customization, and CI/CD & DevOps solutions."
    >
      <Container>
        <PageHeader 
          title="Services" 
          backgroundText="SERVICES"
          subtitle="What I can build for you"
        />
        
        <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          I offer comprehensive development services to help businesses scale efficiently. 
          From initial concept to production deployment, I handle the entire development lifecycle.
        </h3>
        
        <ServicesGrid>
          {SERVICES.map(service => (
            <ServiceCard key={service.id} data-aos="fade-up" data-aos-delay={service.id * 100}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, index) => (
                  <Feature key={index}>• {feature}</Feature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>
        
        <CTASection data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
          <h4>Ready to start your project?</h4>
          <p>Let's discuss how I can help bring your vision to life.</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact">
              <Button text="Let's Discuss" color="var(--green)" />
            </Link>
            <Link to="/work">
              <Button text="View My Work" color="var(--yellow)" />
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin: 5rem 0;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceCard = styled.div`
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

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--dark);
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
`;

const Feature = styled.li`
  color: var(--dark);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
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
    color: #666;
    margin-bottom: 3rem;
  }
`;

export default ServicesPage;
