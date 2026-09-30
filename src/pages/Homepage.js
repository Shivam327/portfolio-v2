import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Timeline from "../components/Timeline";
import PageTemplate from "../components/PageTemplate";

const Homepage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    document.title = "Shivam Thaker Portfolio";
  }, []);

  return (
    <PageTemplate
      title="Shivam Thaker | Backend Engineer @ Korn Ferry | Freelance Available"
      description="Portfolio of Shivam Thaker — 25s-to-1s API optimization, 50k+ record batch pipelines, AI developer tooling. TypeScript, NestJS, PostgreSQL, AWS."
    >
      <Container>
        <LeftHero>
          <h2 data-aos="flip-up" data-aos-duration="1000">
            HEY, I'M
          </h2>
          <h1 data-aos="flip-up" data-aos-delay="500" data-aos-duration="1000">
            SHIVAM THAKER
          </h1>
          <h3 data-aos="flip-up" data-aos-delay="1000" data-aos-duration="1000">
            Backend Engineer @{" "}
            <span style={{ color: "var(--yellow-text)" }}>Korn Ferry</span> — cut API
            latency from 25s to under 1s, built 50+ AI developer tools, and
            architect batch pipelines processing 50,000+ records from
            <span style={{ color: "var(--yellow-text)" }}> Mumbai, India</span>.
            <br />
            <strong>
              Open to freelance — TypeScript, React, Node.js, and DevOps.
            </strong>
          </h3>
          <Link to="/contact">
            <Button text="Contact Me" color="var(--green)" />
          </Link>
          <BG
            style={{ backgroundColor: "var(--lightRed)" }}
            data-aos="zoom-in"
            data-aos-duration="2000"
          />
          <img
            loading="lazy"
            data-aos="zoom-in"
            data-aos-duration="2000"
            src="/images/pose/pose_m18.png"
            alt="Shivam Thaker professional portrait"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </LeftHero>
      </Container>

      <ContainerA>
        <Design>
          <h1
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            Shivam Thaker
          </h1>
          <h2
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            &lt;About /&gt;
          </h2>
        </Design>
        <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          From sole backend engineer at a startup, through fintech at{" "}
          <span>PhillipCapital</span>, to enterprise HR analytics at{" "}
          <span>Korn Ferry</span> — with a{" "}
          <span>B.E. Computer Engineering</span> from Shree L.R. Tiwari
          College of Engineering.
        </h3>
        <h4 data-aos="fade-up" data-aos-delay="450" data-aos-duration="1000">
          TypeScript and NestJS daily. PostgreSQL stored functions, Redis
          caching, RabbitMQ pipelines, Terraform IaC, and Prometheus
          observability when the system demands it. See the work, then reach
          out if it fits.
        </h4>
        <Circle
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <Link to="/about">
            <h2>Learn More</h2>
          </Link>
        </Circle>
      </ContainerA>

      <Timeline />

      <Container3>
        <Wrapper>
          <h1 data-aos="fade-in" data-aos-duration="2000">
            Currently building at <br />
            <span>Korn Ferry</span>.
          </h1>
          <h1 data-aos="fade-in" data-aos-duration="2000">
            Have a project in mind?{" "}
            <span>Let's talk</span> — APIs, performance bottlenecks, or infra.
          </h1>
          <BG
            data-aos="zoom-in"
            data-aos-duration="2000"
            style={{
              backgroundColor: "var(--green)",
              opacity: "0.2",
              top: "15%",
              left: "60%",
            }}
          />
          <img
            loading="lazy"
            data-aos="zoom-in"
            data-aos-duration="2000"
            src="/images/pose/pose_m13.png"
            alt="Shivam Thaker working at desk"
          />
          <ButtonContainer>
            <Link to="/contact">
              <Button text="Connect Now" color="var(--green)" />
            </Link>
            <Link to="/services">
              <Button text="View Services" color="var(--yellow)" />
            </Link>
          </ButtonContainer>
        </Wrapper>
      </Container3>
    </PageTemplate>
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
  background-color: var(--text-primary);

  & > a > h2 {
    color: var(--cream);
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: rotate(-30deg);
      color: var(--yellow-text);
    }
  }
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
    color: var(--text-primary);
    font-size: 7rem;
    font-weight: 300;
  }

  & > h3 {
    font-weight: 300;
    color: var(--text-primary);
    font-size: 7rem;
    margin-left: 5rem;
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
    overflow-wrap: break-word;

    & > span {
      color: var(--yellow-text);
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
    overflow-wrap: break-word;

    & > span {
      color: var(--green-text);
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
    font-size: min(12rem, 14vw);
    position: absolute;
    z-index: -3;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--yellow);
    bottom: 15%;
    left: 0%;
    white-space: nowrap;

    @media (max-width: 768px) {
      font-size: min(8rem, 12vw);
      bottom: 20%;
    }
  }

  & > h1 {
    font-size: min(8rem, 10vw);
    font-weight: 500;
    position: absolute;
    z-index: 0;
    bottom: 5%;
    left: 0%;

    @media (max-width: 768px) {
      font-size: min(5rem, 8vw);
      line-height: 1.2;
    }
  }
`;
const Container3 = styled(Container)`
  width: 90%;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 95%;
    height: 80vh;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

const Wrapper = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  & > img {
    position: absolute;
    top: 15%;
    left: 75%;
    height: auto;
    width: 45%;

    @media (max-width: 768px) {
      width: 55%;
      top: 25%;
      left: 70%;
    }
  }

  & > h1 {
    max-width: 75%;
    color: var(--text-primary);
    font-size: 4rem;
    font-weight: 300;
    line-height: 1.2;

    & > span {
      font-weight: 400;
      color: var(--green-text);
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
      max-width: 85%;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
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
    font-size: max(3.5rem, 22px);
    background-color: var(--text-primary);
    color: var(--bg-secondary);
    font-family: "Dela Gothic One", cursive;
    padding: 0.2rem 1.2rem;
    margin: 1rem 0;

    @media (max-width: 768px) {
      font-size: max(2.5rem, 20px);
    }
  }

  & > h2 {
    font-size: max(2rem, 16px);
    font-family: "Dela Gothic One", cursive;
    margin: 1rem 0;

    @media (max-width: 768px) {
      font-size: max(1.5rem, 14px);
    }
  }

  & > h3 {
    font-family: "Dela Gothic One", cursive;
    text-transform: uppercase;
    font-size: max(2rem, 14px);
    max-width: 70%;

    & > span {
      color: var(--red);
    }

    @media (max-width: 768px) {
      font-size: max(1.5rem, 13px);
      max-width: 100%;
    }
  }

  & > img {
    position: absolute;
    width: 45%;
    height: auto;
    left: 65%;
    z-index: -2;

    @media (max-width: 769px) {
      width: 60%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  & > h6 {
    font-size: 1.25rem;
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
