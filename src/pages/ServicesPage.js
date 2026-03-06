import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../components/PageTemplate';
import { SERVICES } from '../data/services';

const ServicesPage = () => {
  return (
    <PageTemplate
      title="Services - Shivam Thaker"
      description="Professional web development and software engineering services offered by Shivam Thaker"
    >
      <ServicesContainer>
        <ServicesHeader>
          <h1>&lt;Services /&gt;</h1>
          <p>Comprehensive solutions for your digital needs</p>
        </ServicesHeader>
        
        <ServicesGrid>
          {SERVICES.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, idx) => (
                  <FeatureItem key={idx}>
                    <FeatureIcon>✓</FeatureIcon>
                    <FeatureText>{feature}</FeatureText>
                  </FeatureItem>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </PageTemplate>
  );
};

const ServicesContainer = styled.div`
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
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;

  & > h1 {
    font-size: 4rem;
    font-weight: 700;
    color: var(--dark);
    margin-bottom: 1rem;
  }

  & > p {
    font-size: 1.8rem;
    color: var(--text-secondary);
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
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

const FeatureIcon = styled.span`
  font-size: 1rem;
  margin-right: 0.5rem;
  color: var(--green);
`;

const FeatureText = styled.span`
  color: var(--dark);
`;

export default ServicesPage;