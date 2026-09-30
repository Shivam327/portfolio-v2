import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import 'aos/dist/aos.css';

const getStartYear = (period) => {
  const match = period.match(/\b(20\d{2})\b/);
  return match ? match[0] : '';
};

const JOBS = [
  {
    company: 'Korn Ferry',
    title: 'Backend Engineer',
    period: 'April 2025 – Present',
    location: 'Mumbai, India',
    type: 'Full-time',
    teamSize: '8-12 developers',
    contributions: [
      'Built a custom MCP server indexing the entire monorepo — 50+ AI tools that turned hours of codebase analysis into seconds',
      'Cut critical API latency from 25s to under 1s via Redis caching redesign and RabbitMQ event-driven processing',
      'Architected the RTI bulk reporting subsystem — 50,000+ records, 100+ country-specific reports, worker threads, S3 delivery',
      'Overhauled HighCharts + Puppeteer PDF pipeline with isolated worker threads and multilingual translation',
      'Designed 15+ complex PostgreSQL stored functions for pay-gap calculations and distribution modeling',
      'Hardened CI/CD with multi-stage GitHub Actions and Terraform for AWS S3 lifecycle with drift detection'
    ],
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'RabbitMQ', 'AWS', 'Docker', 'Terraform', 'OpenTelemetry'],
    achievements: [
      '25s → <1s API latency via Redis caching redesign',
      '50+ AI tools via custom MCP server',
      '50,000+ records processed in bulk pipelines',
      '15+ PostgreSQL stored functions for pay-gap analytics'
    ],
    projects: [
      {
        name: 'Pay Equity Platform',
        description: 'Global enterprise HR analytics for pay-gap compliance',
        impact: 'Serving enterprise clients across 100+ countries'
      },
      {
        name: 'MCP Developer Tooling',
        description: 'AI-powered codebase analysis server with 50+ tools and 30+ workflow skills',
        impact: 'Hours of manual codebase analysis reduced to seconds'
      }
    ],
    icon: '🏢'
  },
  {
    company: 'PhillipCapital India',
    title: 'Software Development Engineer',
    period: 'Jan 2023 – Mar 2025',
    location: 'Mumbai, India',
    type: 'Full-time',
    teamSize: '6-8 developers',
    contributions: [
      'Built backend services for financial workflows — IPOs, Mutual Funds, Sovereign Gold Bonds — improving processing speed by 25%',
      'Designed observability from scratch using Prometheus and Grafana — gave the team production visibility they didn\'t have',
      'Deployed ERPNext systems that reduced operational costs by 25%',
      'Built Python automation pipelines eliminating manual NSE endpoint file retrieval — 20% reduction in manual effort',
      'Led on-premise GitLab implementation and ran training sessions standardizing Git workflows company-wide',
      'Designed Pentaho ETL pipelines for data cleaning and transformation'
    ],
    technologies: ['Node.js', 'Python', 'TypeScript', 'Prometheus', 'Grafana', 'ERPNext', 'Pentaho', 'GitLab'],
    achievements: [
      '25% cost reduction via ERPNext deployment',
      '20% manual effort saved via Python automation',
      'On-premise GitLab rollout for entire engineering team',
      '25% improvement in financial data processing speed'
    ],
    projects: [
      {
        name: 'Financial Workflow Platform',
        description: 'Backend services for IPOs, Mutual Funds, and Sovereign Gold Bonds',
        impact: '25% faster processing across financial product workflows'
      },
      {
        name: 'Observability Stack',
        description: 'Prometheus + Grafana monitoring with structured logging and alerting',
        impact: 'Cut incident detection time — production visibility from zero to real-time'
      }
    ],
    icon: '💼'
  },
  {
    company: 'Bellex',
    title: 'Software Developer',
    period: 'Dec 2021 – Jan 2023',
    location: 'Mumbai, India',
    type: 'Full-time',
    teamSize: '4-6 developers',
    contributions: [
      'Sole backend engineer — designed and shipped two core products from scratch',
      'Led NestJS microservices architecture design — 20% improvement in scalability',
      'Implemented Kafka for reliable inter-service communication under high traffic',
      'Deployed containerized services with Docker and Kubernetes for high availability',
      'Optimized MySQL schemas and indexing for high-concurrency workloads',
      'Worked directly with CTO on architecture decisions and mentored junior engineers'
    ],
    technologies: ['NestJS', 'TypeScript', 'Kafka', 'Docker', 'Kubernetes', 'MySQL', 'React'],
    achievements: [
      'Two core products shipped from scratch as sole backend engineer',
      '20% scalability improvement via microservices architecture',
      'Docker + K8s production deployment with high availability',
      'Admin Dashboard with real-time WebSocket data visualization'
    ],
    projects: [
      {
        name: 'Bellex App',
        description: 'NestJS microservices backend with Kafka messaging and K8s deployment',
        impact: '20% scalability improvement with horizontal scaling'
      },
      {
        name: 'Bellex Admin Dashboard',
        description: 'Real-time operational dashboard with WebSocket data visualization',
        impact: '20% increase in administrative efficiency'
      }
    ],
    icon: '🚀'
  },
  {
    company: 'Margosatree Technologies',
    title: 'Software Development Intern',
    period: 'May 2021 – Nov 2021',
    location: 'Mumbai, India',
    type: 'Internship',
    teamSize: '3-5 developers',
    contributions: [
      'Built responsive UI pages using React and Angular with HTML5, CSS3, and Bootstrap',
      'Developed REST APIs using MVCS architecture for business logic',
      'Implemented event-driven features with AJAX and JSON for real-time interaction',
      'Partnered with UI/UX designers to create intuitive interfaces'
    ],
    technologies: ['React', 'Angular', 'JavaScript', 'REST APIs', 'Bootstrap', 'Git'],
    achievements: [
      '~10% performance improvement through query and rendering optimizations',
      'Built Angular services integrating RESTful web services',
      'Delivered responsive UI components increasing user satisfaction'
    ],
    projects: [
      {
        name: 'Web Application Platform',
        description: 'Full-stack application with React/Angular frontend and REST API backend',
        impact: '~10% performance improvement via query optimizations'
      }
    ],
    icon: '🌱'
  }
];

const Timeline = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollYRef = useRef(0);
  const closeButtonRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  // Lock page scroll while modal open. Lenis.stop() alone still preventDefaults
  // wheel events — modal body needs data-lenis-prevent for native overflow scroll.
  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    scrollYRef.current = window.scrollY;
    previouslyFocusedRef.current = document.activeElement;

    const { body, documentElement } = document;
    body.style.position = 'fixed';
    body.style.top = `-${scrollYRef.current}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.style.overflow = 'hidden';
    documentElement.style.overflow = 'hidden';

    window.dispatchEvent(new CustomEvent('lenis:stop'));

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    return () => {
      window.clearTimeout(focusTimer);
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      body.style.overflow = '';
      documentElement.style.overflow = '';

      window.dispatchEvent(new CustomEvent('lenis:start'));
      window.scrollTo(0, scrollYRef.current);

      if (previouslyFocusedRef.current instanceof HTMLElement) {
        previouslyFocusedRef.current.focus();
      }
    };
  }, [isModalOpen]);

  const openModal = useCallback((job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedJob(null);
  }, []);

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen, closeModal]);

  const handleItemKeyDown = useCallback((e, job) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(job);
    }
  }, [openModal]);

  const modal = isModalOpen && selectedJob
    ? createPortal(
        <ModalOverlay
          onClick={closeModal}
          role="presentation"
        >
          <ModalContent
            role="dialog"
            aria-modal="true"
            aria-labelledby="timeline-modal-title"
            data-lenis-prevent
            data-lenis-prevent-wheel
            data-lenis-prevent-touch
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader>
              <ModalTitle>
                <CompanyIcon aria-hidden="true">{selectedJob.icon}</CompanyIcon>
                <div>
                  <CompanyNameModal id="timeline-modal-title">
                    {selectedJob.company}
                  </CompanyNameModal>
                  <JobTitleModal>{selectedJob.title}</JobTitleModal>
                </div>
              </ModalTitle>
              <CloseButton
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                aria-label="Close experience details"
              >
                &times;
              </CloseButton>
            </ModalHeader>

            <ModalBody data-lenis-prevent>
              <JobDetails>
                <DetailRow>
                  <DetailLabel>Period:</DetailLabel>
                  <DetailValue>{selectedJob.period}</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>Location:</DetailLabel>
                  <DetailValue>{selectedJob.location}</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>Type:</DetailLabel>
                  <DetailValue>{selectedJob.type}</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>Team Size:</DetailLabel>
                  <DetailValue>{selectedJob.teamSize}</DetailValue>
                </DetailRow>
              </JobDetails>

              <Section>
                <SectionTitle>Key Contributions</SectionTitle>
                <ContributionsList>
                  {selectedJob.contributions.map((contribution) => (
                    <ContributionItemModal key={contribution}>
                      <BulletPointModal aria-hidden="true">•</BulletPointModal>
                      <ContributionTextModal>{contribution}</ContributionTextModal>
                    </ContributionItemModal>
                  ))}
                </ContributionsList>
              </Section>

              <Section>
                <SectionTitle>Technologies Used</SectionTitle>
                <TechStack>
                  {selectedJob.technologies.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
              </Section>

              <Section>
                <SectionTitle>Key Achievements</SectionTitle>
                <AchievementsList>
                  {selectedJob.achievements.map((achievement) => (
                    <AchievementItem key={achievement}>
                      <AchievementIcon aria-hidden="true">🏆</AchievementIcon>
                      <AchievementText>{achievement}</AchievementText>
                    </AchievementItem>
                  ))}
                </AchievementsList>
              </Section>

              <Section>
                <SectionTitle>Notable Projects</SectionTitle>
                <ProjectsGrid>
                  {selectedJob.projects.map((project) => (
                    <ProjectCard key={project.name}>
                      <ProjectName>{project.name}</ProjectName>
                      <ProjectDescription>{project.description}</ProjectDescription>
                      <ProjectImpact>
                        <ImpactLabel>Impact:</ImpactLabel>
                        <ImpactValue>{project.impact}</ImpactValue>
                      </ProjectImpact>
                    </ProjectCard>
                  ))}
                </ProjectsGrid>
              </Section>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>,
        document.body
      )
    : null;

  return (
    <TimelineContainer>
      <TimelineHeader>
        <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          Shivam Thaker
        </h1>
        <h2 data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
          &lt;Experience /&gt;
        </h2>
      </TimelineHeader>

      <TimelineWrapper>
        {JOBS.map((job, index) => {
          const accent = index % 2 === 0 ? 'green' : 'dark';
          return (
            <TimelineItem
              key={job.company}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-duration="1000"
              onClick={() => openModal(job)}
              onKeyDown={(e) => handleItemKeyDown(e, job)}
              $clickable
              $accent={accent}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${job.title} at ${job.company}`}
            >
              <YearNode $accent={accent} $delay={`${index * 150}ms`} aria-hidden="true">
                {getStartYear(job.period)}
              </YearNode>

              <TimelineContent>
                <JobHeader>
                  <CompanyName>{job.company}</CompanyName>
                  <JobTitle>{job.title}</JobTitle>
                  <Period>{job.period}</Period>
                </JobHeader>

                <Contributions>
                  {job.contributions.slice(0, 2).map((contribution) => (
                    <ContributionItem key={contribution}>
                      <BulletPoint aria-hidden="true">•</BulletPoint>
                      <ContributionText>{contribution}</ContributionText>
                    </ContributionItem>
                  ))}
                </Contributions>
                <TechPreview>
                  {job.technologies.slice(0, 4).map((tech) => (
                    <TechPill key={tech}>{tech}</TechPill>
                  ))}
                  {job.technologies.length > 4 && (
                    <TechPill $muted>+{job.technologies.length - 4}</TechPill>
                  )}
                </TechPreview>
                <ViewMoreText>Click to view more details →</ViewMoreText>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </TimelineWrapper>

      {modal}
    </TimelineContainer>
  );
};

const TimelineContainer = styled.div`
  overflow-x: hidden;
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  padding: 5rem;
  z-index: 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 1024px) {
    min-height: 80vh;
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const TimelineHeader = styled.div`
  position: relative;
  overflow: hidden;
  height: 50vh;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    height: 30vh;
  }

  & > h2 {
    color: transparent;
    font-size: min(20rem, 22vw);
    position: absolute;
    z-index: 0;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--yellow);
    bottom: 15%;
    left: 0%;
    white-space: nowrap;
    pointer-events: none;

    @media (max-width: 768px) {
      font-size: min(13rem, 16vw);
      bottom: 20%;
    }
  }

  & > h1 {
    font-size: min(15rem, 17vw);
    font-weight: 500;
    position: absolute;
    z-index: 1;
    bottom: 5%;
    left: 0%;

    @media (max-width: 768px) {
      font-size: min(10rem, 12vw);
      line-height: 1.2;
    }
  }
`;

const TimelineWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 8rem;
    top: 0;
    bottom: 0;
    width: 8px;
    margin-left: -3px;
    background-image:
      linear-gradient(var(--text-primary), var(--text-primary)),
      repeating-linear-gradient(
        to bottom,
        transparent 0,
        transparent 1.2rem,
        var(--border-color) 1.2rem,
        var(--border-color) 1.4rem
      );
    background-size: 2px 100%, 8px 100%;
    background-position: center, left center;
    background-repeat: no-repeat, repeat-y;
    
    @media (max-width: 768px) {
      left: 5rem;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 4rem;
  padding-left: 14rem;
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};
  
  @media (max-width: 768px) {
    padding-left: 9rem;
    margin-bottom: 3rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 2.1rem;
    left: 8.5rem;
    width: 5rem;
    height: 2px;
    background: ${props => props.$accent === 'green' ? 'var(--green)' : 'var(--dark)'};
    opacity: 0.55;
    transition: opacity 0.25s ease;

    @media (max-width: 768px) {
      left: 5.5rem;
      width: 3rem;
      top: 1.6rem;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 1.85rem;
    left: 7.65rem;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background: ${props => props.$accent === 'green' ? 'var(--green)' : 'var(--dark)'};
    z-index: 1;

    @media (max-width: 768px) {
      left: 4.65rem;
      top: 1.35rem;
    }
  }

  &:hover::after {
    opacity: 1;
  }
`;

const YearNode = styled.div`
  position: absolute;
  left: 5.9rem;
  top: 0.2rem;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  font-family: 'Dela Gothic One', cursive;
  font-size: max(1.3rem, 11px);
  font-weight: 600;
  color: #ffffff;
  background: ${props => props.$accent === 'green' ? 'var(--green)' : 'var(--dark)'};
  box-shadow:
    0 0 0 3px var(--bg-primary),
    0 0 0 5px ${props => props.$accent === 'green' ? 'var(--green)' : 'var(--dark)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: yearNodePop 0.45s ease both;
  animation-delay: ${props => props.$delay || '0ms'};

  @keyframes yearNodePop {
    from {
      opacity: 0;
      transform: scale(0.85);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @media (max-width: 768px) {
    left: 3.4rem;
    width: 3.2rem;
    height: 3.2rem;
    font-size: max(1rem, 10px);
    top: 0.3rem;
  }

  ${TimelineItem}:hover & {
    transform: scale(1.08);
    box-shadow:
      0 0 0 3px var(--bg-primary),
      0 0 0 7px ${props => props.$accent === 'green' ? 'rgba(49, 196, 140, 0.35)' : 'rgba(25, 25, 25, 0.25)'},
      0 0 16px ${props => props.$accent === 'green' ? 'rgba(49, 196, 140, 0.35)' : 'rgba(0, 0, 0, 0.18)'};
  }
`;

const TimelineContent = styled.div`
  background: var(--bg-secondary);
  border-radius: 1.2rem;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-left: 4px solid transparent;
  transition: all 0.25s ease;
  
  &:hover {
    border-left-color: var(--green);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const JobHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const CompanyName = styled.h3`
  font-size: max(2.4rem, 16px);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-family: 'Dela Gothic One', cursive;
  
  @media (max-width: 768px) {
    font-size: max(2rem, 16px);
  }
`;

const JobTitle = styled.h4`
  font-size: max(1.8rem, 14px);
  font-weight: 500;
  color: var(--green-text);
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: max(1.6rem, 14px);
  }
`;

const Period = styled.p`
  font-size: max(1.4rem, 12px);
  color: var(--text-secondary);
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: max(1.2rem, 12px);
  }
`;

const Contributions = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContributionItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const BulletPoint = styled.span`
  color: var(--green-text);
  font-size: 1.8rem;
  font-weight: bold;
  margin-right: 1rem;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ContributionText = styled.p`
  font-size: max(1.6rem, 13px);
  color: var(--text-primary);
  line-height: 1.6;
  font-weight: 400;
  flex: 1;
  
  @media (max-width: 768px) {
    font-size: max(1.4rem, 13px);
  }
`;

const ViewMoreText = styled.p`
  font-size: max(1.2rem, 12px);
  color: var(--green-text);
  font-style: italic;
  margin-top: 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: max(1rem, 12px);
  }
`;

const TechPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const TechPill = styled.span`
  background: var(--bg-primary);
  color: var(--text-secondary);
  font-size: max(1.1rem, 11px);
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-weight: 500;
  opacity: ${props => props.$muted ? 0.6 : 1};
`;

// Modal Styles — portaled to document.body; z-index above Navbar (1000) / hamburger (999)
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 2rem;
  overscroll-behavior: none;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ModalContent = styled.div`
  background: var(--bg-secondary);
  border-radius: 1.5rem;
  max-width: 800px;
  width: 100%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: modalSlideIn 0.3s ease-out;
  overscroll-behavior: contain;
  overflow: hidden;

  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: translateY(-20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 768px) {
    max-height: 90vh;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2.5rem 2.5rem 2rem;
  border-bottom: 2px solid var(--border-color);
  background: var(--bg-primary);
  border-radius: 1.5rem 1.5rem 0 0;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    padding: 2rem 2rem 1.5rem;
  }
`;

const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const CompanyIcon = styled.span`
  font-size: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CompanyNameModal = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
  font-family: 'Dela Gothic One', cursive;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const JobTitleModal = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  color: var(--green-text);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 3rem;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--border-color);
    color: var(--text-primary);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const ModalBody = styled.div`
  padding: 2.5rem;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: var(--border-color);
    border-radius: 5px;
    margin: 5px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--green);
    border-radius: 5px;
    border: 2px solid var(--border-color);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--yellow);
  }

  /* Firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: var(--green) var(--border-color);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const JobDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: var(--bg-primary);
  border-radius: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.5rem;
  }
`;

const DetailRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DetailLabel = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DetailValue = styled.span`
  font-size: 1.4rem;
  color: var(--text-primary);
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Section = styled.div`
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h4`
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 1.5rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--green);
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`;

const ContributionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContributionItemModal = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const BulletPointModal = styled.span`
  color: var(--green-text);
  font-size: 1.6rem;
  font-weight: bold;
  margin-right: 1rem;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ContributionTextModal = styled.p`
  font-size: 1.4rem;
  color: var(--text-primary);
  line-height: 1.6;
  font-weight: 400;
  flex: 1;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TechTag = styled.span`
  background: var(--green);
  color: var(--bg-primary);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }
`;

const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AchievementItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--bg-primary);
  border-radius: 0.8rem;
  border-left: 4px solid var(--yellow);
`;

const AchievementIcon = styled.span`
  font-size: 1.8rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const AchievementText = styled.p`
  font-size: 1.4rem;
  color: var(--text-primary);
  margin: 0;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ProjectCard = styled.div`
  background: var(--bg-primary);
  padding: 1.5rem;
  border-radius: 1rem;
  border-left: 4px solid var(--blue);
`;

const ProjectName = styled.h5`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 1rem 0;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.3rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0 0 1rem 0;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ProjectImpact = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ImpactLabel = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--green-text);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImpactValue = styled.span`
  font-size: 1.2rem;
  color: var(--text-primary);
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default Timeline; 