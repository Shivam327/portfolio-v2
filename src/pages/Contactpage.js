import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import PageTemplate from '../components/PageTemplate';

const Contactpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 2000 });
    document.title = 'Shivam Thaker -- Contact';
  }, []);

  return (
    <PageTemplate
      title="Shivam Thaker | Contact | Backend Engineer Available for Freelance"
      description="Open to freelance — TypeScript APIs, React dashboards, observability, and containerized deployments. Let's talk about your next build."
      ogImage="/images/pose/pose_m12.png"
    >
      <Contact>
        <Container>
          <Design>
            <h1 data-aos='fade-left' data-aos-delay='1000' data-aos-duration='1000'>
              Let's Discuss
            </h1>
            <h2 data-aos='fade-right' data-aos-delay='1000' data-aos-duration='1000'>
              &lt;Contact /&gt;
            </h2>
          </Design>
          <img data-aos='zoom-in' data-aos-duration='2000' src='/images/pose/pose_m12.png' alt='Shivam Thaker contact portrait' />
          
          <h3 data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
            Open to freelance and contract work — TypeScript APIs, React dashboards,
            observability setups, and containerized deployments. Typical scope: a
            focused MVP, a performance bottleneck, or a defined backend slice.
          </h3>
          
          <span>
            <a href='https://github.com/shivam327' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-github'></i> GitHub
            </a>
          </span>
          <span>
            <a href='https://www.linkedin.com/in/thakershivam/' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-linkedin'></i> LinkedIn
            </a>
          </span>
          <span>
            <a href='mailto:shivamthaker1999@gmail.com'>
              <i className='fas fa-envelope'></i> Mail
            </a>
          </span>
        </Container>
      </Contact>
    </PageTemplate>
  );
};

const Contact = styled.div`
  width: 100%;
  min-height: 50vh;
  overflow: hidden;
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
    -webkit-text-stroke-color: var(--yellow);
    bottom: 15%;
    left: 0%;
    white-space: nowrap;

    @media (max-width: 768px) {
      font-size: min(11rem, 14vw);
      bottom: 20%;
    }
  }

  & > h1 {
    font-size: min(15rem, 17vw);
    font-weight: 500;
    position: absolute;
    z-index: 3;
    bottom: 5%;
    left: 0%;

    @media (max-width: 768px) {
      font-size: min(10rem, 12vw);
      line-height: 1.2;
      width: 70%;
    }
  }
`;

const Container = styled.div`
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
  overflow: hidden;

  & > span > a {
    font-size: max(5rem, 24px);
    text-decoration: none;
    color: var(--text-primary);

    &:hover {
      text-decoration: underline;
      color: var(--yellow-text);
    }
  }

  & > h3 {
    margin-left: auto;
    width: 50%;
    text-align: left;
    font-weight: 400;
    font-size: 3rem;
    overflow-wrap: break-word;
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
`;

export default Contactpage;