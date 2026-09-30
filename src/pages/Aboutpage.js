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
      title="Shivam Thaker | About | Backend Engineer @ Korn Ferry"
      description="Backend Engineer at Korn Ferry. 25s-to-1s API optimization, 50k+ batch pipelines, 50+ AI tools. Previously fintech at PhillipCapital, microservices at Bellex. Open to freelance."
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
            alt="Shivam Thaker about portrait"
          />
          <h3 data-aos="fade-up" data-aos-delay={time} data-aos-duration="1000">
            Backend Engineer at Korn Ferry, building the Pay Equity product —
            50k+ record batch pipelines, 15+ PostgreSQL stored functions, and a
            custom MCP server with 50+ AI tools. Previously: fintech workflows
            at PhillipCapital and microservices architecture at Bellex.
            <br />
            Freelance side: MVPs, workflow automation, and ERP customization.
          </h3>

          <h4 data-aos="fade-up" data-aos-delay={time} data-aos-duration="1000">
            Stack: TypeScript, NestJS, PostgreSQL, Redis, RabbitMQ, Docker,
            Kubernetes, AWS, Terraform. Also: Python, Grafana, Prometheus,
            OpenTelemetry, Kafka, Angular, and React Native —{" "}
            <span>picking whatever ships the feature cleanly</span>.
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
            I care about understanding{" "}
            <span style={{ color: "var(--green-text)" }}>why something works</span> —
            not just making it work. At Korn Ferry, an API took 25 seconds.
            Instead of scaling the server, I mapped the data flow, redesigned
            the caching, and got it under 1 second. The problem wasn't
            compute — it was architecture.
          </h4>

          <h4
            data-aos="fade-right"
            data-aos-duration="1000"
            style={{ marginBottom: "2rem" }}
          >
            Four years across fintech, HR analytics, and early-stage startups.
            I write for the next developer who touches the code — including
            future me. I mentor developers not just on how to build, but on
            how to think about building.
          </h4>

          <h4 data-aos="fade-left" data-aos-duration="1000">
            Education: B.E. Computer Engineering, Shree L.R. Tiwari College of
            Engineering (2018–2022). Certifications: Full-Stack React, Google
            IT Automation with Python, Project Management, and Digital Product
            Management (Coursera).
          </h4>

          <h3 data-aos="fade-left" data-aos-duration="1000">
            Project brief ready? Reach out — happy to scope APIs, performance
            bottlenecks, or backend systems.
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
  height: max(13rem, 96px);
  width: max(13rem, 96px);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.06);
  }

  & > img {
    height: auto;
    width: 30%;
    min-width: 24px;
    min-height: 24px;
  }

  & > span {
    font-size: max(1.5rem, 12px);
    font-weight: 400;
    color: var(--text-primary);
  }

  & > i {
    font-size: max(3rem, 24px);
  }
`;

const Design = styled.div`
  position: relative;
  overflow: hidden;
  height: 45vh;

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
      font-size: min(10rem, 14vw);
      bottom: 20%;
    }
  }

  & > img {
    width: 50%;
    position: absolute;
    right: -20%;
    height: auto;
  }

  & > h1 {
    font-size: min(15rem, 17vw);
    font-weight: 500;
    position: absolute;
    z-index: 2;
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
    overflow-wrap: break-word;

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
    overflow-wrap: break-word;

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
    font-size: min(20rem, 22vw);
    position: absolute;
    z-index: -3;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--yellow);
    left: 0%;
    white-space: nowrap;

    @media (max-width: 768px) {
      left: 5%;
      font-size: min(13rem, 16vw);
    }
  }

  & > h1 {
    font-size: min(15rem, 17vw);
    font-weight: 500;
    position: absolute;
    z-index: 2;
    left: 0%;

    @media (max-width: 768px) {
      left: 5%;
      font-size: min(10rem, 12vw);
      line-height: 1.2;
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
