import React from 'react';
import styled from 'styled-components';

const PageHeader = ({ title, backgroundText, subtitle }) => (
  <Header>
    <BackgroundText>{backgroundText}</BackgroundText>
    <MainTitle>{title}</MainTitle>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
  </Header>
);

const Header = styled.div`
  position: relative;
  overflow: hidden;
  height: 45vh;
  
  @media (max-width: 1024px) {
    height: 30vh;
  }
`;

const BackgroundText = styled.h2`
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
`;

const MainTitle = styled.h1`
  font-size: 15rem;
  font-weight: 500;
  position: absolute;
  z-index: 0;
  bottom: 10%;
  left: 0%;
  
  @media (max-width: 768px) {
    line-height: 13rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  position: absolute;
  z-index: 1;
  bottom: 5%;
  left: 0%;
  max-width: 60%;
`;

export default PageHeader;
