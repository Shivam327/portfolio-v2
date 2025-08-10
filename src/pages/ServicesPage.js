import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 2000 });
    document.title = 'Shivam Thaker -- Services';
  }, []);

  const services = [
    {
      title: 'Web App Development',
      description: 'Full-stack web applications using React, Node.js, and modern frameworks. From MVPs to enterprise solutions.',
      icon: '🌐',
      features: ['React/Next.js Frontends', 'Node.js/NestJS Backends', 'Responsive Design', 'Performance Optimization']
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs built with NestJS, Express, and best practices for scalability and security.',
      icon: '🔌',
      features: ['REST APIs', 'GraphQL', 'Authentication', 'Rate Limiting']
    },
    {
      title: 'Infrastructure Monitoring',
      description: 'Real-time monitoring solutions using Grafana, Prometheus, Docker, and Kubernetes for production systems.',
      icon: '📊',
      features: ['Grafana Dashboards', 'Prometheus Metrics', 'Docker Containers', 'K8s Orchestration']
    },
    {
      title: 'ERP/CRM Customization',
      description: 'Custom business process automation and workflow tools to streamline operations and improve efficiency.',
      icon: '🏢',
      features: ['Process Automation', 'Custom Dashboards', 'Integration APIs', 'Workflow Management']
    },
    {
      title: 'CI/CD & DevOps',
      description: 'Automated deployment pipelines, containerization, and infrastructure as code for reliable software delivery.',
      icon: '🚀',
      features: ['Docker Containers', 'Kubernetes', 'GitHub Actions', 'AWS/Azure']
    }
  ];

  return (
    <Services>
      <Container>
        <Design>
          <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
            Services
          </h1>
          <h2 data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
            &lt;What I Do /&gt;
          </h2>
        </Design>
        
        <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          I deliver production-ready solutions that drive business value. From startups to enterprises, 
          I help organizations build scalable, maintainable systems that grow with their needs.
        </h3>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 200} 
              data-aos-duration="1000"
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <FeaturesList>
                {service.features.map((feature, idx) => (
                  <FeatureItem key={idx}>
                    <CheckIcon>✓</CheckIcon>
                    {feature}
                  </FeatureItem>
                ))}
              </FeaturesList>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <CTASection data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
          <h4>Ready to start your project?</h4>
          <p>Let's discuss how I can help bring your vision to life.</p>
          <Link to="/contact">
            <Button text="Get Started" color="var(--green)" />
          </Link>
        </CTASection>
      </Container>
    </Services>
  );
};

const Services = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
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

const Design = styled.div`
  position: relative;
  overflow: hidden;
  height: 45vh;

  @media (max-width: 1024px) {
    height: 30vh;
  }

  & > h2 {
    color: transparent;
    font-size: 20rem;
    position: absolute;
    z-index: -3;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--yellow);
    bottom: 10%;
    left: 0%;

    @media (max-width: 768px) {
      font-size: 13rem;
    }
  }

  & > h1 {
    font-size: 15rem;
    font-weight: 500;
    position: absolute;
    z-index: 0;
    bottom: 10%;
    left: 0%;

    @media (max-width: 768px) {
      line-height: 13rem;
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
  font-size: 4rem;
  margin-bottom: 2rem;
  display: block;
`;

const ServiceTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 1.5rem;
  font-family: 'Dela Gothic One', cursive;
`;

const ServiceDescription = styled.p`
  font-size: 1.6rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  color: var(--dark);
`;

const CheckIcon = styled.span`
  color: var(--green);
  font-weight: bold;
  margin-right: 1rem;
  font-size: 1.6rem;
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
