import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import PageTemplate from '../components/PageTemplate';
import Button from '../components/Button';
import { getServices } from '../data/services';

const ServicesPage = () => {
  const services = getServices();

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <PageTemplate
      title="Services | Shivam Thaker | Backend Engineer — Freelance"
      description="TypeScript APIs, React dashboards, Prometheus + Grafana observability, ERPNext automation, and CI/CD with Docker + Kubernetes. Freelance and contract work."
      ogImage="/images/pose/pose_m22.png"
    >
      <Services>
        <Container>
          <Design>
            <h1 data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">
              Services
            </h1>
            <h2 data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">
              &lt;Freelance /&gt;
            </h2>
          </Design>
          <img
            data-aos="zoom-in"
            data-aos-duration="2000"
            src="/images/pose/pose_m22.png"
            alt="Shivam Thaker services portrait"
          />
          <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            What I build for clients and teams. Pick a lane, reach out with a brief —
            we&apos;ll scope from there.
          </h3>
        </Container>

        <Container>
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="800"
              >
                <ServiceIcon aria-hidden="true">{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature) => (
                    <FeatureItem key={feature}>
                      <FeatureIcon>✓</FeatureIcon>
                      <FeatureText>{feature}</FeatureText>
                    </FeatureItem>
                  ))}
                </ServiceFeatures>
              </ServiceCard>
            ))}
          </ServicesGrid>

          <CtaRow data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <p>Ready to start? Send a short note about the problem and timeline.</p>
            <Link to="/contact">
              <Button text="Get in Touch" color="var(--green)" />
            </Link>
          </CtaRow>
        </Container>

        <BG
          style={{
            backgroundColor: 'rgb(49,196,140, 0.2)',
            top: '10%',
            left: '55%',
          }}
        />
      </Services>
    </PageTemplate>
  );
};

const Services = styled.div`
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
    -webkit-text-stroke-color: var(--green);
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 3rem;
  margin: 2rem 0 4rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceIcon = styled.div`
  font-size: max(3rem, 28px);
  margin-bottom: 1rem;
  line-height: 1;
  display: inline-block;
  transition: transform 0.25s ease;
`;

const ServiceTitle = styled.h3`
  font-size: max(1.8rem, 18px);
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
  transition: color 0.25s ease;
`;

const FeatureIcon = styled.span`
  font-size: max(1rem, 14px);
  margin-right: 0.5rem;
  color: var(--green-text);
  display: inline-block;
  transition: transform 0.25s ease;
`;

const ServiceCard = styled.div`
  background: var(--bg-secondary);
  border-radius: 1.5rem;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-color);
  border-left: 4px solid transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-left-color 0.25s ease;
  position: relative;
  overflow: hidden;
  min-width: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--green), var(--yellow));
    transition: height 0.25s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    border-left-color: var(--green);
  }

  &:hover::before {
    height: 6px;
  }

  &:hover ${ServiceIcon} {
    transform: scale(1.12);
  }

  &:hover ${ServiceTitle} {
    color: var(--green-text);
  }

  &:hover ${FeatureIcon} {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: max(1.4rem, 14px);
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: max(1.2rem, 14px);
`;

const FeatureText = styled.span`
  color: var(--text-primary);
`;

const CtaRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
  text-align: center;

  & > p {
    font-size: max(1.6rem, 14px);
    color: var(--text-secondary);
  }
`;

const BG = styled.div`
  position: absolute;
  left: 53%;
  width: 70rem;
  height: 70rem;
  border-radius: 50%;
  z-index: -5;
`;

export default ServicesPage;
