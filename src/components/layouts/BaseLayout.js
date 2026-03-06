import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import AnimatedCursor from 'react-animated-cursor';
import { container, tablet, desktop } from '../../styles/mixins';
import { SPACING } from '../../constants';

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
  padding-top: 60px;
  min-height: calc(100vh - 200px);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
  
  ${tablet} {
    padding-top: 70px;
  }
  
  ${desktop} {
    padding-top: 80px;
  }
`;

export const Container = styled.div`
  ${container}
`;

export const Grid = styled.div`
  display: grid;
  gap: ${SPACING.MOBILE_MD};
  grid-template-columns: 1fr;
  
  ${tablet} {
    gap: ${SPACING.LG};
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  ${desktop} {
    gap: ${SPACING.XL};
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACING.MOBILE_MD};
  
  ${tablet} {
    flex-direction: ${props => props.direction || 'row'};
    gap: ${SPACING.LG};
  }
  
  ${desktop} {
    gap: ${SPACING.XL};
  }
`;

export default BaseLayout;
