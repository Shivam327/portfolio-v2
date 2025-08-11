import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import AnimatedCursor from 'react-animated-cursor';

const BaseLayout = ({ children, showCursor = true }) => (
  <>
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
    <Navbar />
    {showCursor && (
      <AnimatedCursor 
        innerSize={16} 
        outerSize={54} 
        color='244, 196, 48' 
        outerAlpha={0.2} 
        innerScale={0.7} 
        outerScale={4} 
      />
    )}
    <MainContent id="main-content">{children}</MainContent>
    <Footer />
  </>
);

const MainContent = styled.main`
  min-height: calc(100vh - 200px);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
`;

export default BaseLayout;
