import React from 'react';
import styled from 'styled-components';

const HeroSection = ({ 
  title, 
  subtitle, 
  backgroundText, 
  children,
  variant = 'default' 
}) => (
  <Hero variant={variant}>
    {backgroundText && <BackgroundText>{backgroundText}</BackgroundText>}
    <Content>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children}
    </Content>
  </Hero>
);

const Hero = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 5rem 0;
  background-color: var(--bg-primary);
  
  ${props => props.variant === 'centered' && `
    text-align: center;
    justify-content: center;
  `}
`;

const BackgroundText = styled.h2`
  color: transparent;
  font-size: 20rem;
  position: absolute;
  z-index: -3;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--yellow); /* Your original yellow */
  bottom: 10%;
  left: 0%;
  
  @media (max-width: 768px) {
    font-size: 13rem;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 60%;
`;

const Title = styled.h1`
  font-size: 15rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    font-size: 8rem;
    line-height: 8rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  color: var(--text-primary);
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default HeroSection;
