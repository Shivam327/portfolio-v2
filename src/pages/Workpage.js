/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Moreproject from '../components/Moreproject';
import { PROJECTS as PROJECTS_DATA } from '../data/projects';
import PageTemplate from '../components/PageTemplate';

const Workpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <PageTemplate
      title="Shivam Thaker | Work | Backend Engineer Portfolio"
      description="Projects across fintech, HR analytics, microservices, and infrastructure. Built with TypeScript, NestJS, PostgreSQL, Docker, Kubernetes, and modern technologies."
      ogImage="/images/pose/pose_m18.png"
    >
      <Work>
        <Container>
          <Design>
            <h1 data-aos='fade-left' data-aos-delay='1000' data-aos-duration='1000'>
              Projects
            </h1>
            <h2 data-aos='fade-right' data-aos-delay='1000' data-aos-duration='1000'>
              &lt;Work /&gt;
            </h2>
          </Design>
          <img data-aos='zoom-in' data-aos-duration='2000' src='/images/pose/pose_m19.png' alt='Shivam Thaker work portrait' />
          <h3 data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
            From fintech trading platforms to enterprise HR analytics to microservices
            architecture. Some have public repos; others are private client work
            marked Coming Soon.
          </h3>
        </Container>

        <Container>
          <Row>
            <Col>
              {PROJECTS_DATA.slice(0, Math.ceil(PROJECTS_DATA.length / 2)).map((project) => (
                <React.Fragment key={project.id}>
                  <Link to={`/project/${project.id}`}>
                    <Moreproject name={project.name} id={project.id} />
                  </Link>
                  <hr
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  />
                </React.Fragment>
              ))}
            </Col>
            <Col>
              {PROJECTS_DATA.slice(Math.ceil(PROJECTS_DATA.length / 2)).map((project) => (
                <React.Fragment key={project.id}>
                  <Link to={`/project/${project.id}`}>
                    <Moreproject name={project.name} id={project.id} />
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
        
        <BG
          style={{
            backgroundColor: 'rgb(49,196,140, 0.2)',
            top: '10%',
            left: '55%',
          }}
        ></BG>
      </Work>
    </PageTemplate>
  );
};

const Work = styled.div`
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

  @media (max-width: 1024px) {
    min-height: 80vh;
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
    overflow-wrap: break-word;

    @media (max-width: 768px) {
      margin: 2rem 0;
      width: 90%;
    }
  }
`;

const Row = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;

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

  & > h1 {
    font-size: 5rem;
    font-weight: 400;
    margin: 2rem;
    margin-bottom: 0;
  }

  & > img {
    width: 100%;
    height: auto;

    @media (max-width: 768px) {
      width: 50%;
    }
  }

  & > h2 {
    color: gray;
    font-size: 2rem;
    font-weight: 400;
    margin: 0 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
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

export default Workpage;