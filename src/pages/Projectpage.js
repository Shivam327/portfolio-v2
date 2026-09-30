import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS, getProjectById } from '../data/projects';
import styled from 'styled-components';
import Moreproject from '../components/Moreproject';
import PageTemplate from '../components/PageTemplate';

const isMobileViewport = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

const Projectpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [offsetY, setOffsetY] = useState(0);
  const rafRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      setOffsetY(isMobileViewport() ? 0 : window.pageYOffset);
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    const foundProject = getProjectById(id);
    if (!foundProject) {
      navigate('/', { replace: true });
      return;
    }
    setProject(foundProject);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [id, navigate, handleScroll]);

  if (!project) {
    return null;
  }

  const otherProjects = PROJECTS.filter((p) => p.id !== project.id);

  return (
    <PageTemplate
      title={`${project.name} | Project | Shivam Thaker Portfolio`}
      description={project.desc}
      ogImage={project.image}
    >
      <Home>
        <Container>
          <BackLink to="/work">← Back to Work</BackLink>
          <LeftHero>
            <h3
              data-aos="fade-in"
              data-aos-duration="1000"
              style={{ transform: `translateX(${offsetY * 0.5}px)` }}
            >
              {project.name}
            </h3>
            <img
              data-aos="fade-in"
              data-aos-duration="1000"
              src={project.image}
              alt={`${project.name} preview`}
              style={{ transform: `translateX(-${offsetY * 0.8}px)` }}
            />
            <h2
              data-aos="fade-in"
              data-aos-duration="1000"
              style={{ transform: `translateX(${offsetY * 0.5}px)` }}
            >
              {project.name}
            </h2>
          </LeftHero>
        </Container>

        <Container>
          <h1 data-aos="fade-in" data-aos-duration="1000">
            {project.name}
          </h1>
          <h2 data-aos="fade-in" data-aos-duration="1000">
            {project.desc}
          </h2>
          <ProjectContact>
            <div>
              <h1>{project.hasLink ? 'Project Link' : 'Status'}</h1>
              {project.hasLink ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h2>{project.link}</h2>
                </a>
              ) : (
                <h2>Coming Soon — private / no public repo yet</h2>
              )}
            </div>
            <div>
              <h1>Project Date</h1>
              <h2>{project.date}</h2>
            </div>
          </ProjectContact>
          <h1>Tech Used</h1>
          <Tech>
            {project.tech.map((techName) => (
              <Circle key={techName} data-aos="zoom-in" data-aos-duration="1000">
                <span>{techName}</span>
              </Circle>
            ))}
          </Tech>
        </Container>
        <Container>
          <h2>
            Built with a focus on clean architecture, performance, and maintainability.
            Explore related work below.
          </h2>
          <h1>&lt; More Works /&gt;</h1>
          <Row>
            <Col>
              <BG
                style={{
                  backgroundColor: 'rgba(0,0,0, 0.2)',
                  top: '10%',
                  left: '-15%',
                }}
              />
              <img src="/images/pose/pose_m14.png" alt="More projects pose" />
            </Col>
            <Col>
              {otherProjects.map((p) => (
                <React.Fragment key={p.id}>
                  <Link to={`/project/${p.id}`}>
                    <Moreproject name={p.name} id={p.id} />
                  </Link>
                  <hr
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  />
                </React.Fragment>
              ))}
            </Col>
          </Row>
        </Container>
      </Home>
    </PageTemplate>
  );
};

const Home = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const BackLink = styled(Link)`
  display: inline-block;
  font-size: max(1.6rem, 14px);
  color: var(--green-text);
  font-weight: 600;
  margin: 2rem 0;

  &:hover {
    color: var(--yellow-text);
    text-decoration: underline;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1480px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  padding: 2rem;
  z-index: 0;

  & > h1 {
    margin-top: 10rem;
    font-size: max(5rem, 28px);
    font-weight: 900;
  }

  & > h2 {
    margin-left: 5rem;
    margin-top: 2rem;
    font-size: max(3rem, 16px);
    font-weight: 400;

    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
`;

const ProjectContact = styled.div`
  margin: 5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin: 2rem 0;
  }

  & > div > h1 {
    font-weight: 400;
    color: var(--text-secondary);
    font-size: max(1.6rem, 14px);
  }

  & > div > h2 {
    font-size: max(2rem, 14px);
  }

  & > div > a > h2 {
    font-size: max(2rem, 14px);
    word-break: break-all;
  }
`;

const Tech = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5rem;

  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`;

const LeftHero = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;

  & > h3 {
    position: absolute;
    font-family: 'Dela Gothic One', cursive;
    text-transform: uppercase;
    font-size: max(15rem, 48px);
    z-index: -2;

    @media (max-width: 767px) {
      font-size: max(8rem, 32px);
    }
  }

  & > h2 {
    position: absolute;
    font-family: 'Dela Gothic One', cursive;
    text-transform: uppercase;
    font-size: max(15rem, 48px);
    -webkit-text-stroke-width: 1px;
    color: transparent;
    -webkit-text-stroke-color: var(--text-primary);
    z-index: 2;

    @media (max-width: 767px) {
      font-size: max(8rem, 32px);
    }
  }

  & > img {
    position: absolute;
    width: 100%;
    height: auto;
    left: 40%;
    z-index: 0;
    border-radius: 0.5rem;

    @media (max-width: 768px) {
      width: 200%;
    }
  }
`;

const Circle = styled.div`
  padding: 2rem 0;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: max(15vh, 80px);
  width: max(15vh, 80px);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: var(--lightBlue);

  & > span {
    font-size: max(1.5rem, 12px);
    color: var(--text-primary);
    text-align: center;
    padding: 0.5rem;
  }
`;

const Row = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  flex: 1;
  width: 50%;
  min-height: max-content;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;

  & > img {
    width: 100%;
    height: auto;

    @media (max-width: 768px) {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BG = styled.div`
  position: absolute;
  width: 70rem;
  height: 70rem;
  border-radius: 50%;
  z-index: -5;
`;

export default Projectpage;
