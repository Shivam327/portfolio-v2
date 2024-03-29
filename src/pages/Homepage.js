/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import { isMobile } from 'react-device-detect';
// import Project from "../components/Project";
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Homepage = () => {
  const [offesetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    if (isMobile) {
      setOffsetY(0);
    } else {
      setOffsetY(window.pageYOffset);
    }
  };

  useEffect(() => {
    if (isMobile) return;
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (isMobile) return;
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // window.scrollTo(0, 0)
    Aos.init({ duration: 2000 });
    document.title = 'Shivam Thaker Portfolio';
  }, []);

  return (
    <Home>
      <Container>
        <LeftHero>
          <h2 data-aos='flip-up' data-aos-duration='1000'>
            HEY, I'M
          </h2>
          <h1 data-aos='flip-up' data-aos-delay='500' data-aos-duration='1000'>
            SHIVAM THAKER
          </h1>
          <h3 data-aos='flip-up' data-aos-delay='1000' data-aos-duration='1000'>
            A Full-Stack developer from
            <span style={{ color: 'orange' }}> India</span>.
          </h3>
          {/* <Button text="Contact" /> */}
          <BG style={{ backgroundColor: '#FEECEA' }} data-aos='zoom-in' data-aos-duration='2000'></BG>
          <img data-aos='zoom-in' data-aos-duration='2000' src='/images/pose/pose_m18.png' alt='' />
        </LeftHero>
      </Container>

      <ContainerA>
        <Design>
          <h1 data-aos='fade-left' data-aos-delay='100' data-aos-duration='1000'>
            Shivam Thaker
          </h1>
          <h2 data-aos='fade-right' data-aos-delay='100' data-aos-duration='1000'>
            &lt;About /&gt;
          </h2>
        </Design>
        <h3 data-aos='fade-up' data-aos-delay='300' data-aos-duration='1000'>
          I am a full-stack creative developer based in Mumbai, India. I am a<span> Computer Science</span> undergraduate from Mumbai University.
          {/* and also did some coursework in UI/UX and SEO. */}
        </h3>
        <h4 data-aos='fade-up' data-aos-delay='450' data-aos-duration='1000'>
          I enjoy using My Skills to empower people to achieve goals. My development stack is focused on building Scalable & incredible fast websites
          and WebApps with delightful interactions.
        </h4>
        <Circle data-aos='zoom-in' data-aos-delay='300' data-aos-duration='1000'>
          <Link to='/about'>
            <h2>Learn More</h2>
          </Link>
        </Circle>
      </ContainerA>

      <ContainerLarge>
        <h1>&lt; Selected</h1>
        <h1>Projects /&gt;</h1>
        {/* <Row>
          <Col
            style={{
              transform: `translateY(${offesetY * 0.08}px)`,
            }}
          >
            <Link to="/project/1">
              <Project
                height="60vh"
                image="/images/1.jpg"
                position="left"
                name="Dev.to Clone"
                type="WebApp"
              />
            </Link>
          </Col>

          <Col
            style={{
              transform: `translateY(-${offesetY * 0.05}px)`,
            }}
          >
            <Link to="/project/5">
              <Project
                height="50vh"
                image="/images/5.jpg"
                position="left"
                name="Netflix Clone"
                type="WebApp"
              />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              transform: `translateY(${offesetY * 0.08}px)`,
            }}
          >
            <Link to="/project/6">
              <Project
                height="60vh"
                image="/images/6.jpg"
                position="left"
                name="Portfolio 2019"
                type="Website"
              />
            </Link>
          </Col>
          <Col
            style={{
              transform: `translateY(-${offesetY * 0.05}px)`,
            }}
          >
            <Link to="/project/2">
              <Project
                height="50vh"
                image="/images/2.jpg"
                position="left"
                name="TrackerX"
                type="WebApp"
              />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              transform: `translateY(${offesetY * 0.08}px)`,
            }}
          >
            <Link to="/project/7">
              <Project
                height="50vh"
                image="/images/7.jpg"
                position="left"
                name="TrackIt"
                type="WebApp"
              />
            </Link>
          </Col>
          <Col
            style={{
              transform: `translateY(-${offesetY * 0.05}px)`,
            }}
          >
            <Link to="/project/4">
              <Project
                height="50vh"
                image="/images/4.jpg"
                position="left"
                name="Portfolio 2021"
                type="WebSite"
              />
            </Link>
          </Col>
        </Row> */}
        <Circle data-aos='zoom-in' data-aos-delay='300' data-aos-duration='1000'>
          <Link to='/work'>
            <h2>View All</h2>
          </Link>
        </Circle>
      </ContainerLarge>

      <Container3>
        <Wrapper>
          <h1 data-aos='fade-in' data-aos-duration='2000'>
            I’m currently working with <br /> <span>Phillip Capital (India)</span>.
          </h1>
          <h1 data-aos='fade-in' data-aos-duration='2000'>
            <span>Let’s work together</span> to create something worth sharing.
          </h1>
          <BG
            data-aos='zoom-in'
            data-aos-duration='2000'
            style={{
              backgroundColor: 'rgb(49,196,140, 0.2)',
              top: '15%',
              left: '60%',
            }}
          ></BG>
          <img data-aos='zoom-in' data-aos-duration='2000' src='/images/pose/pose_m13.png' alt='' />
          <Link to='/contact'>
            <Button text='Connect Now' color='var(--green)' />
          </Link>
        </Wrapper>
      </Container3>

      {/* <Container>
                <h1>&lt; More Works /&gt;</h1>
                <Row>
                    <Col>
                        <BG style={{ backgroundColor: 'rgb(0,0,0, 0.2)', top: '20%', left: '-15%' }}></BG>
                        <img src="/images/pose/pose_m14.png" alt="" />
                    </Col>
                    <Col>
                        <Link to="/project/2">
                            <Moreproject name="TrackIt" />
                        </Link>
                        <hr data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" />
                        <Link to="/project/2">
                            <Moreproject name="Portfolio 2019" />
                        </Link>
                        <hr data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" />
                        <Link to="/project/8">
                            <Moreproject name="Bankist" />
                        </Link>
                        <hr data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" />
                        <Link to="/project/2">
                            <Moreproject name="doubts.com" />
                        </Link>
                        <hr data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" />
                        <Link to="/project/2">
                            <Moreproject name="TrackIt" />
                        </Link>
                    </Col>
                </Row>
            </Container> */}
    </Home>
  );
};

const Circle = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  background-color: #191919;

  & > a > h2 {
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: rotate(-30deg);
      color: var(--yellow);
    }
  }
`;
const Home = styled.div`
  width: 100%;
  min-height: 90vh;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  /* overflow: hidden; */
  width: 100%;
  max-width: 1280px;
  min-height: 90vh;
  margin: 0 auto;
  position: relative;
  padding: 2rem;
  z-index: 0;

  & > h1 {
    color: #191919;
    font-size: 7rem;
    font-weight: 300;
  }

  & > h3 {
    font-weight: 300;
    color: #fff;
    font-size: 7rem;
    margin-left: 5rem;
  }
`;
const ContainerLarge = styled(Container)`
  max-width: 1580px;
  width: 100%;
  padding: 10rem 2rem;
`;
const Row = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

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
const ContainerA = styled.div`
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
    min-height: 30vh;
  }

  & > h3 {
    margin-left: auto;
    margin-top: 5rem;
    width: 60%;
    text-align: left;
    font-weight: 400;
    font-size: 3rem;

    & > span {
      color: var(--darkYellow);
      font-weight: 600;
    }

    @media (max-width: 768px) {
      margin: 2rem 0;
      width: 90%;
    }
  }

  & > h4 {
    margin: 4rem 0;
    margin-left: auto;
    width: 60%;
    text-align: left;
    font-weight: 400;
    font-size: 2rem;

    & > span {
      color: var(--green);
    }

    @media (max-width: 768px) {
      margin: 2rem 0;
      width: 90%;
    }
  }

  & > i {
    font-size: 3rem;
  }
`;
const Design = styled.div`
  position: relative;
  overflow: hidden;
  height: 50vh;

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
const Container3 = styled(Container)`
  width: 80%;
  height: 110vh;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 3rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  & > img {
    position: absolute;
    top: 15%;
    left: 80%;
    height: auto;
    width: 50%;

    @media (max-width: 768px) {
      width: 60%;
      top: 20%;
    }
  }

  & > h1 {
    max-width: 70%;
    color: #191919;
    font-size: 5rem;
    font-weight: 300;

    & > span {
      font-weight: 400;
      color: var(--green);
    }
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

  & > h1 {
    font-size: 3rem;
    background-color: var(--dark);
    color: #fff;
    font-family: 'Otomanopee One', sans-serif;
    padding: 0.1rem 1rem;
    margin: 1rem 0;
    font-family: 'Dela Gothic One', cursive;
  }

  & > h2 {
    font-size: 2rem;
    font-family: 'Otomanopee One', sans-serif;
    font-family: 'Dela Gothic One', cursive;
    margin: 1rem 0;
  }

  & > h3 {
    font-family: 'Dela Gothic One', cursive;
    text-transform: uppercase;
    font-size: 7rem;
    max-width: 70%;

    & > span {
      color: var(--red);
    }
    /* -webkit-text-stroke-width: 1px; */
    /* color: transparent; */
    /* -webkit-text-stroke-color: #000; */
    /* font-family: 'Otomanopee One', sans-serif; */
  }

  & > img {
    position: absolute;
    width: 50%;
    height: auto;
    left: 70%;
    z-index: -2;

    @media (max-width: 769px) {
      width: 50%;
    }
  }

  & > h6 {
    font-size: 1.5rem;
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

export default Homepage;
