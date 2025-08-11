import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import PageTemplate from '../components/PageTemplate';

const Aboutpage = () => {
  const [time, setTime] = useState(1000);

  useEffect(() => {
    // window.scrollTo(0, 0)
    if (window.location.pathname === "/") {
      setTime(100);
    }
    document.title = "Shivam Thaker -- About";
  }, []);

  return (
    <PageTemplate
      title="Shivam Thaker | About | Full-Stack Developer @ Korn Ferry"
      description="Full-Stack Developer based in Mumbai, specializing in scalable systems, API development, infrastructure monitoring, and ERP solutions. Currently at Korn Ferry and open to freelance projects."
      ogImage="/images/pose/pose_m12.png"
    >
      <About>
        <Container>
          <Design>
            <h1
              data-aos="fade-left"
              data-aos-delay={time}
              data-aos-duration="1000"
            >
              Shivam Thaker
            </h1>
            <h2
              data-aos="fade-right"
              data-aos-delay={time}
              data-aos-duration="1000"
            >
              &lt;About /&gt;
            </h2>
          </Design>
          <img
            data-aos="zoom-in"
            data-aos-duration="2000"
            src="/images/pose/pose_m12.png"
            alt=""
          />
          <h3 data-aos="fade-up" data-aos-delay={time} data-aos-duration="1000">
            I'm a Full-Stack Developer based in Mumbai, currently working at Korn Ferry. I specialize in scalable systems, API development, infrastructure monitoring, and ERP solutions.
            <br/>I also take on freelance projects — from startup MVPs to workflow automation tools.
          </h3>

          <h4 data-aos="fade-up" data-aos-delay={time} data-aos-duration="1000">
            I enjoy using my skill set to help people achieve their goals through
            technology. My development stack emphasizes
            <span> performance</span>, <span> accessibility</span>, and seamless,
            delightful user experiences.
            {/* I build blazing-fast WebApps and Websites using the <span>MERN</span> stack, powered by ReactJS. */}
          </h4>

          <BG
            style={{
              backgroundColor: "rgb(248,224,142, 0.3)",
              top: "10%",
              left: "55%",
            }}
          ></BG>
        </Container>

        <Container>
          <Design2>
            <h1
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              ToolBox
            </h1>
            <h2
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              TECH
            </h2>
            <img src="/images/pose/pose_m14.png" alt="" />
            <BG
              style={{ backgroundColor: "var(--lightBlue)", top: "10%", left: "57%" }}
            ></BG>
          </Design2>
          <ToolBox>
            <Circle
              data-aos="zoom-in"
              data-aos-delay="3500"
              data-aos-duration="1000"
              style={{ backgroundColor: "var(--lightBlue)" }}
            >
              <img src="/images/html5.svg" alt="" />
              <span>HTML</span>
            </Circle>
            <Circle
              data-aos="zoom-in"
              data-aos-delay="3700"
              data-aos-duration="1000"
              style={{ backgroundColor: "var(--lightBlue)" }}
            >
              <img src="/images/css.svg" alt="" />
              <span>CSS</span>
            </Circle>
            <Circle
              data-aos="zoom-in"
              data-aos-delay="3900"
              data-aos-duration="1000"
              style={{ backgroundColor: "var(--lightBlue)" }}
            >
              <img src="/images/sass.svg" alt="" />
              <span>SASS</span>
            </Circle>
            <Circle
              data-aos="zoom-in"
              data-aos-delay="3700"
              data-aos-duration="1000"
              style={{ backgroundColor: "var(--lightBlue)" }}
            >
              <img src="/images/react.svg" alt="" />
              <span>REACT</span>
            </Circle>
            <Circle
              data-aos="zoom-in"
              data-aos-delay="3700"
              data-aos-duration="1000"
              style={{ backgroundColor: "var(--lightBlue)" }}
            >
              <img src="/images/redux.svg" alt="" />
              <span>REDUX</span>
            </Circle>
            <Circle
              data-aos="zoom-in"
              data-aos-delay="4100"
              data-aos-duration="1000"
              style={{ backgroundColor: "var(--lightBlue)" }}
            >
              <img src="/images/nodejs.svg" alt="" />
              <span>NODEJS</span>
            </Circle>
            <Circle
              data-aos="zoom-in"
              data-aos-delay="4100"
              data-aos-duration="1000"
              style={{ backgroundColor: "var(--lightBlue)" }}
            >
              <img src="/images/expressjs.svg" alt="" />
              <span>EXPRESSJS</span>
            </Circle>
            <Circle
              data-aos="zoom-in"
              data-aos-delay="4500"
              data-aos-duration="1000"
              style={{ backgroundColor: "var(--lightBlue)" }}
            >
              <img src="/images/javascript.svg" alt="" />
              <span>JS</span>
            </Circle>
            <Circle
              data-aos="zoom-in"
              data-aos-delay="4700"
              data-aos-duration="1000"
              style={{ backgroundColor: "var(--lightBlue)" }}
            >
              <img src="/images/mongodb.svg" alt="" />
              <span>MONGODB</span>
            </Circle>
            {/* <Circle data-aos='zoom-in' data-aos-delay='4700' data-aos-duration='1000' style={{ backgroundColor: 'var(--lightBlue)' }}>
            <img src='/images/nextjs.svg' alt='' />
            <span>NEXTJS</span>
          </Circle> */}
            <Circle
              data-aos="zoom-in"
              data-aos-delay="4900"
              data-aos-duration="1000"
              style={{ backgroundColor: "var(--lightBlue)" }}
            >
              <img src="/images/getbootstrap.svg" alt="" />
              <span>BOOTSTRAP</span>
            </Circle>
            <Circle
              data-aos="zoom-in"
              data-aos-delay="5200"
              data-aos-duration="1000"
              style={{ backgroundColor: "var(--lightBlue)" }}
            >
              <img src="/images/nestjs.svg" alt="" />
              <span>NestJS</span>
            </Circle>
            <Circle
              data-aos="zoom-in"
              data-aos-delay="5500"
              data-aos-duration="1000"
              style={{ backgroundColor: "var(--lightBlue)" }}
            >
              <img src="/images/laravel.svg" alt="" />
              <span>Laravel</span>
            </Circle>
            <Circle
              data-aos="zoom-in"
              data-aos-delay="5700"
              data-aos-duration="1000"
              style={{ backgroundColor: "var(--lightBlue)" }}
            >
              <img src="/images/firebase.svg" alt="" />
              <span>Firebase</span>
            </Circle>
            <Circle
              data-aos="zoom-in"
              data-aos-delay="5800"
              data-aos-duration="1000"
              style={{ backgroundColor: "var(--lightBlue)" }}
            >
              <img src="/images/docker.svg" alt="" />
              <span>Docker</span>
            </Circle>
            <Circle
              data-aos="zoom-in"
              data-aos-delay="5900"
              data-aos-duration="1000"
              style={{ backgroundColor: "var(--lightBlue)" }}
            >
              <img src="/images/kubernetes.svg" alt="" />
              <span>Kubernetes</span>
            </Circle>
          </ToolBox>
        </Container>

        <Container>
          <Design2>
            <h1
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              Why Me?
            </h1>
            <h2
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              About Me
            </h2>
            <img src="/images/pose/pose_m22.png" alt="My profile pose" />
            <BG
              style={{ backgroundColor: "var(--lightBlue)", top: "10%", left: "57%" }}
            ></BG>
          </Design2>

          <h4 data-aos="fade-left" data-aos-duration="1000">
            There’s nothing more rewarding than developing clean, impactful web
            applications and software for the industry. I believe people should
            pursue what they’re passionate about—and for me, that's
            <span style={{ color: "var(--green)" }}> software development</span>.
          </h4>

          <h4
            data-aos="fade-right"
            data-aos-duration="1000"
            style={{ marginBottom: "2rem" }}
          >
            Over the years, I’ve dedicated myself to honing my craft. While I know
            perfection is a moving target, I strive to come as close as possible
            with every line of code I write.
          </h4>

          <h3 data-aos="fade-left" data-aos-duration="1000">
            If you have a project in mind, let's connect—I’d love to help bring
            your ideas to life!
          </h3>
        </Container>
      </About>
    </PageTemplate>
  );
};

const About = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const Circle = styled.div`
  padding: 2rem 0;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 13rem;
  width: 13rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  & > img {
    height: auto;
    width: 30%;
  }

  & > span {
    font-size: 1.5rem;
    font-weight: 400;
  }

  & > i {
    font-size: 3rem;
  }
`;

const Design = styled.div`
  position: relative;
  overflow: hidden;
  height: 45vh;

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
      font-size: 10rem;
    }
  }

  & > img {
    width: 50%;
    position: absolute;
    right: -20%;
    height: auto;
  }

  & > h1 {
    font-size: 15rem;
    font-weight: 500;
    position: absolute;
    z-index: 2;
    bottom: 10%;
    left: 0%;

    @media (max-width: 768px) {
      line-height: 13rem;
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

  & > img {
    position: absolute;
    width: 40%;
    height: auto;
    left: 70%;
    z-index: -2;

    @media (max-width: 768px) {
      width: 80%;
    }
  }

  @media (max-width: 1024px) {
    min-height: 80vh;
  }

  & > h3 {
    margin: 2rem 0;
    /* margin-left: auto; */
    width: 50%;
    text-align: left;
    font-weight: 400;
    font-size: 3rem;

    @media (max-width: 768px) {
      margin: 2rem 0;
      width: 70%;
    }
  }

  & > h4 {
    /* margin-left: auto; */
    width: 50%;
    text-align: left;
    font-weight: 400;
    font-size: 2rem;
    margin: 2rem 0;

    @media (max-width: 768px) {
      margin: 2rem 0;
      width: 70%;
    }
  }
`;

const Design2 = styled(Design)`
  height: 30vh;
  padding: 0 5rem;

  @media (max-width: 768px) {
    height: 20vh;
  }

  & > h2 {
    color: transparent;
    font-size: 20rem;
    position: absolute;
    z-index: -3;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--yellow);
    left: 0%;

    @media (max-width: 768px) {
      left: 10%;
      font-size: 13rem;
    }
  }

  & > h1 {
    font-size: 15rem;
    font-weight: 500;
    position: absolute;
    z-index: 2;
    left: 0%;

    @media (max-width: 768px) {
      left: 5%;
      line-height: 13rem;
    }
  }
`;

const ToolBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  width: 60%;
  margin: 5rem 0;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
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

export default Aboutpage;
