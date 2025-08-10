import React from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Timeline = () => {
  const jobs = [
    {
      company: 'Korn Ferry',
      title: 'Full Stack Developer',
      period: 'March 2025 – Present',
      contributions: [
        'Developing scalable web applications using React, Node.js, and cloud technologies',
        'Collaborating with cross-functional teams to deliver high-quality software solutions',
        'Implementing best practices for code quality, testing, and deployment'
      ],
      icon: '🏢'
    },
    {
      company: 'Phillip Capital',
      title: 'Software Development Engineer',
      period: 'Jan 2023 – Mar 2025',
      contributions: [
        'Built and maintained financial trading platforms using modern web technologies',
        'Optimized application performance and implemented responsive design principles',
        'Worked with REST APIs and database systems to ensure data integrity'
      ],
      icon: '💼'
    },
    {
      company: 'Bellex',
      title: 'Software Development Engineer',
      period: 'Dec 2021 – Jan 2023',
      contributions: [
        'Developed full-stack applications using React, Node.js, and MongoDB',
        'Participated in agile development processes and code review sessions',
        'Contributed to the development of scalable microservices architecture'
      ],
      icon: '🚀'
    }
  ];

  return (
    <TimelineContainer>
      <TimelineHeader>
        <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">Shivam Thaker</h1>
        <h2 data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">&lt;Experience /&gt;</h2>
      </TimelineHeader>
      
      <TimelineWrapper>
        {jobs.map((job, index) => (
          <TimelineItem key={index} data-aos="fade-up" data-aos-delay={index * 200} data-aos-duration="1000">
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
                {job.contributions.map((contribution, idx) => (
                  <ContributionItem key={idx}>
                    <BulletPoint>•</BulletPoint>
                    <ContributionText>{contribution}</ContributionText>
                  </ContributionItem>
                ))}
              </Contributions>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineWrapper>
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

export default Timeline; 