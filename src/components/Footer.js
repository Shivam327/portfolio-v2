import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SPACING } from "../constants";
import { tablet, desktop } from "../styles/mixins";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Foot>
      <LeftFoot>
        <h6 data-aos="flip-up" data-aos-delay="100" data-aos-duration="1000">
          Ready to go? <br />
          Let's chat!
        </h6>
        <Circle
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <Link to="/contact">
            <h2>Let's Discuss</h2>
          </Link>
        </Circle>
      </LeftFoot>
      <hr data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" />
      <LeftFoot>
        <h1 data-aos="flip-up" data-aos-duration="1000">
          Portfolio <br />
          Designed and developed by me with ❤
        </h1>
      </LeftFoot>
    </Foot>
  );
};

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  background-color: var(--bg-primary);
  transition: background-color 0.3s ease;
  
  ${tablet} {
    height: 12rem;
    width: 12rem;
  }
  
  ${desktop} {
    height: 15rem;
    width: 15rem;
  }

  & > a {
    text-decoration: none;
  }

  & > a > h2 {
    color: var(--text-primary);
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-align: center;
    
    ${tablet} {
      font-size: 1.75rem;
    }
    
    ${desktop} {
      font-size: 2rem;
    }

    &:hover {
      transform: rotate(-30deg);
      color: var(--yellow);
    }
  }
`;

const Foot = styled.footer`
  height: max-content;
  padding: ${SPACING.MOBILE_MD};
  margin-top: ${SPACING.MOBILE_MD};
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: background-color 0.3s ease, color 0.3s ease;
  
  ${tablet} {
    padding: ${SPACING.LG};
    margin-top: ${SPACING.LG};
  }
  
  ${desktop} {
    padding: ${SPACING.XXL};
    margin-top: ${SPACING.XXL};
  }

  & > hr {
    width: 90%;
  }

  & > img {
    height: 20vh;
    position: absolute;
    bottom: 10%;
    right: 10%;
    
    ${tablet} {
      height: 25vh;
    }
    
    ${desktop} {
      height: 30vh;
    }
  }
`;

const LeftFoot = styled.div`
  padding: ${SPACING.MOBILE_MD};
  height: 100%;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: ${SPACING.MOBILE_MD};
  
  ${tablet} {
    padding: ${SPACING.LG};
    max-width: 90%;
    flex-direction: row;
    gap: ${SPACING.LG};
  }
  
  ${desktop} {
    padding: ${SPACING.XXL};
    max-width: 1280px;
    gap: ${SPACING.XL};
  }

  & > h6 {
    color: var(--text-primary);
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 1.2;
    
    ${tablet} {
      font-size: 3.5rem;
    }
    
    ${desktop} {
      font-size: 5rem;
    }
  }
  
  & > h1 {
    color: var(--text-primary);
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.3;
    
    ${tablet} {
      font-size: 1.75rem;
    }
    
    ${desktop} {
      font-size: 2rem;
    }
  }
`;

export default Footer;
