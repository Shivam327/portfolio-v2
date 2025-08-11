import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Contactbar from '../Contactbar';
import Footer from '../Footer';
import AnimatedCursor from 'react-animated-cursor';

const BaseLayout = ({ children, showCursor = true }) => (
  <>
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
    <Contactbar />
    <MainContent>{children}</MainContent>
    <Footer />
  </>
);

const MainContent = styled.main`
  min-height: calc(100vh - 200px);
  background-color: var(--white); /* Your original light background #f2efe7 */
  color: var(--dark); /* Your original dark text #191919 */
`;

export default BaseLayout;
