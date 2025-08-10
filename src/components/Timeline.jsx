import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'aos/dist/aos.css';

const Timeline = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup function
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const jobs = [
    {
      company: 'Korn Ferry',
      title: 'Full Stack Developer',
      period: 'March 2025 – Present',
      location: 'Mumbai, India',
      type: 'Full-time',
      teamSize: '8-12 developers',
      contributions: [
        'Developing scalable web applications using React, Node.js, and cloud technologies',
        'Collaborating with cross-functional teams to deliver high-quality software solutions',
        'Implementing best practices for code quality, testing, and deployment'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'],
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored 3 junior developers in best practices'
      ],
      projects: [
        {
          name: 'HR Management System',
          description: 'Built comprehensive HR platform for employee management',
          impact: 'Used by 500+ employees across 5 countries'
        }
      ],
      icon: '🏢'
    },
    {
      company: 'Phillip Capital',
      title: 'Software Development Engineer',
      period: 'Jan 2023 – Mar 2025',
      location: 'Mumbai, India',
      type: 'Full-time',
      teamSize: '6-8 developers',
      contributions: [
        'Built and maintained financial trading platforms using modern web technologies',
        'Optimized application performance and implemented responsive design principles',
        'Worked with REST APIs and database systems to ensure data integrity'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'WebSocket', 'Docker'],
      achievements: [
        'Improved trading platform performance by 35%',
        'Reduced system downtime by 90% through monitoring implementation',
        'Successfully delivered 15+ critical trading features'
      ],
      projects: [
        {
          name: 'Real-time Trading Dashboard',
          description: 'High-frequency trading interface with real-time data',
          impact: 'Processes 10,000+ transactions per second'
        },
        {
          name: 'Risk Management System',
          description: 'Automated risk assessment and alerting system',
          impact: 'Prevented $2M+ in potential losses'
        }
      ],
      icon: '💼'
    },
    {
      company: 'Bellex',
      title: 'Software Development Engineer',
      period: 'Dec 2021 – Jan 2023',
      location: 'Mumbai, India',
      type: 'Full-time',
      teamSize: '4-6 developers',
      contributions: [
        'Developed full-stack applications using React, Node.js, and MongoDB',
        'Participated in agile development processes and code review sessions',
        'Contributed to the development of scalable microservices architecture'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Git'],
      achievements: [
        'Delivered 8 client projects on time and within budget',
        'Improved code quality score from 65% to 92%',
        'Reduced bug reports by 45% through testing improvements'
      ],
      projects: [
        {
          name: 'E-commerce Platform',
          description: 'Full-stack e-commerce solution with payment integration',
          impact: 'Generated $500K+ in revenue for clients'
        },
        {
          name: 'Admin Dashboard',
          description: 'Custom admin panel for business operations',
          impact: 'Reduced manual work by 70%'
        }
      ],
      icon: '🚀'
    },
    {
      company: 'Self-Employed',
      title: 'Freelance Developer',
      period: 'May 2021 – April 2025',
      location: 'Remote',
      type: 'Contract/Freelance',
      teamSize: 'Solo/1-3 developers',
      contributions: [
        'Delivered client-facing dashboards & websites',
        'Built custom ERP tools and admin panels'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Firebase', 'AWS', 'Docker'],
      achievements: [
        'Completed 25+ client projects successfully',
        'Maintained 100% client satisfaction rate',
        'Generated $150K+ in freelance revenue'
      ],
      projects: [
        {
          name: 'Client Portfolio Websites',
          description: 'Custom websites for various business clients',
          impact: 'Increased client online presence by 300%'
        },
        {
          name: 'Business Management Tools',
          description: 'Custom ERP and CRM solutions for SMEs',
          impact: 'Automated 80% of manual business processes'
        }
      ],
      icon: '💻'
    }
  ];

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  return (
    <TimelineContainer>
      <TimelineHeader>
        <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">Shivam Thaker</h1>
        <h2 data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">&lt;Experience /&gt;</h2>
      </TimelineHeader>
      
      <TimelineWrapper>
        {jobs.map((job, index) => (
          <TimelineItem 
            key={index} 
            data-aos="fade-up" 
            data-aos-delay={index * 200} 
            data-aos-duration="1000"
            onClick={() => openModal(job)}
            clickable
          >
            <TimelineDot>
              <TimelineIcon>{job.icon}</TimelineIcon>
            </TimelineDot>
            
            <TimelineContent>
              <JobHeader>
                <CompanyName>{job.company}</CompanyName>
                <JobTitle>{job.title}</JobTitle>
                <Period>{job.period}</Period>
              </JobHeader>
              
              <Contributions>
                {job.contributions.slice(0, 2).map((contribution, idx) => (
                  <ContributionItem key={idx}>
                    <BulletPoint>•</BulletPoint>
                    <ContributionText>{contribution}</ContributionText>
                  </ContributionItem>
                ))}
                <ViewMoreText>Click to view more details →</ViewMoreText>
              </Contributions>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineWrapper>

      {/* Modal */}
      {isModalOpen && selectedJob && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>
                <CompanyIcon>{selectedJob.icon}</CompanyIcon>
                <div>
                  <CompanyNameModal>{selectedJob.company}</CompanyNameModal>
                  <JobTitleModal>{selectedJob.title}</JobTitleModal>
                </div>
              </ModalTitle>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
            </ModalHeader>

            <ModalBody>
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
                  {selectedJob.contributions.map((contribution, idx) => (
                    <ContributionItemModal key={idx}>
                      <BulletPointModal>•</BulletPointModal>
                      <ContributionTextModal>{contribution}</ContributionTextModal>
                    </ContributionItemModal>
                  ))}
                </ContributionsList>
              </Section>

              <Section>
                <SectionTitle>Technologies Used</SectionTitle>
                <TechStack>
                  {selectedJob.technologies.map((tech, idx) => (
                    <TechTag key={idx}>{tech}</TechTag>
                  ))}
                </TechStack>
              </Section>

              <Section>
                <SectionTitle>Key Achievements</SectionTitle>
                <AchievementsList>
                  {selectedJob.achievements.map((achievement, idx) => (
                    <AchievementItem key={idx}>
                      <AchievementIcon>🏆</AchievementIcon>
                      <AchievementText>{achievement}</AchievementText>
                    </AchievementItem>
                  ))}
                </AchievementsList>
              </Section>

              <Section>
                <SectionTitle>Notable Projects</SectionTitle>
                <ProjectsGrid>
                  {selectedJob.projects.map((project, idx) => (
                    <ProjectCard key={idx}>
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
        </ModalOverlay>
      )}
    </TimelineContainer>
  );
};

const TimelineContainer = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 1280px;
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

const TimelineWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 2.5rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--green), var(--yellow));
    
    @media (max-width: 768px) {
      left: 2rem;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 4rem;
  padding-left: 8rem;
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
  
  @media (max-width: 768px) {
    padding-left: 6rem;
    margin-bottom: 3rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 1.5rem;
  top: 0.5rem;
  width: 2rem;
  height: 2rem;
  background: var(--white);
  border: 3px solid var(--green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  
  @media (max-width: 768px) {
    left: 1rem;
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const TimelineIcon = styled.span`
  font-size: 1.2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TimelineContent = styled.div`
  background: var(--white);
  border-radius: 1.2rem;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-left: 4px solid var(--green);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const JobHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const CompanyName = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 0.5rem;
  font-family: 'Dela Gothic One', cursive;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const JobTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--green);
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Period = styled.p`
  font-size: 1.4rem;
  color: #666;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
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
  color: var(--green);
  font-size: 1.8rem;
  font-weight: bold;
  margin-right: 1rem;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ContributionText = styled.p`
  font-size: 1.6rem;
  color: var(--dark);
  line-height: 1.6;
  font-weight: 400;
  flex: 1;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ViewMoreText = styled.p`
  font-size: 1.2rem;
  color: var(--green);
  font-style: italic;
  margin-top: 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 2rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ModalContent = styled.div`
  background: var(--white);
  border-radius: 1.5rem;
  max-width: 800px;
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: modalSlideIn 0.3s ease-out;
  
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
    height: 90vh;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2.5rem 2.5rem 2rem;
  border-bottom: 2px solid #f0f0f0;
  background: #fafafa;
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
  color: var(--dark);
  margin: 0 0 0.5rem 0;
  font-family: 'Dela Gothic One', cursive;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const JobTitleModal = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  color: var(--green);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 3rem;
  color: #666;
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
    background: #f0f0f0;
    color: var(--dark);
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
  overflow-y: auto;
  overflow-x: hidden;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 10px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
    margin: 5px 0;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--green);
    border-radius: 5px;
    border: 2px solid #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: var(--yellow);
  }
  
  /* Firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: var(--green) #f1f1f1;
  
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
  background: #f8f9fa;
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
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DetailValue = styled.span`
  font-size: 1.4rem;
  color: var(--dark);
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
  color: var(--dark);
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
  color: var(--green);
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
  color: var(--dark);
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
  color: white;
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
  background: #f8f9fa;
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
  color: var(--dark);
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
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 1rem;
  border-left: 4px solid var(--blue);
`;

const ProjectName = styled.h5`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--dark);
  margin: 0 0 1rem 0;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.3rem;
  color: #666;
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
  color: var(--green);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImpactValue = styled.span`
  font-size: 1.2rem;
  color: var(--dark);
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default Timeline; 