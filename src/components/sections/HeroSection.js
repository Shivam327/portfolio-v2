import React, { memo, useCallback } from 'react';
import styled from 'styled-components';
import { responsiveText, responsiveSpacing, container, tablet, desktop, large } from '../../styles/mixins';
import { TYPOGRAPHY, SPACING } from '../../constants';

const HeroSection = memo(({ 
  title, 
  subtitle, 
  backgroundText, 
  children,
  variant = 'default' 
}) => {
  const handleAnimationComplete = useCallback(() => {
    // Performance tracking for animations
    if (window.performance && window.performance.mark) {
      window.performance.mark('hero-animation-complete');
    }
  }, []);

  return (
    <Hero variant={variant}>
      {backgroundText && (
        <BackgroundText 
          onAnimationEnd={handleAnimationComplete}
          aria-hidden="true"
        >
          {backgroundText}
        </BackgroundText>
      )}
      <Content>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Content>
    </Hero>
  );
});

HeroSection.displayName = 'HeroSection';

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: ${SPACING.MOBILE_MD} 0;
  background-color: var(--bg-primary);
  overflow: hidden;
  will-change: transform; // Optimize for animations
  
  ${props => props.variant === 'centered' && `
    text-align: center;
    justify-content: center;
  `}
  
  ${tablet} {
    padding: ${SPACING.LG} 0;
  }
  
  ${desktop} {
    padding: ${SPACING.XXL} 0;
  }

  // High contrast mode support
  @media (prefers-contrast: high) {
    border: 2px solid currentColor;
  }

  // Reduced motion support
  @media (prefers-reduced-motion: reduce) {
    will-change: auto;
  }
`;

const BackgroundText = styled.h2`
  color: transparent;
  font-size: 8rem;
  position: absolute;
  z-index: -3;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--yellow);
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  will-change: transform; // Optimize for animations
  
  ${tablet} {
    font-size: 12rem;
    left: 0%;
    transform: none;
  }
  
  ${desktop} {
    font-size: 16rem;
  }
  
  ${large} {
    font-size: 20rem;
  }

  // Reduced motion support
  @media (prefers-reduced-motion: reduce) {
    will-change: auto;
    animation: none;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 100%;
  padding: 0 ${SPACING.MOBILE_MD};
  
  ${tablet} {
    max-width: 80%;
    padding: 0 ${SPACING.LG};
  }
  
  ${desktop} {
    max-width: 60%;
    padding: 0 ${SPACING.XL};
  }
`;

const Title = styled.h1`
  ${responsiveText(TYPOGRAPHY.H1.MOBILE, TYPOGRAPHY.H1.TABLET, TYPOGRAPHY.H1.DESKTOP)};
  font-weight: 500;
  margin-bottom: ${SPACING.MOBILE_MD};
  color: var(--text-primary);
  line-height: 1.1;
  
  ${tablet} {
    margin-bottom: ${SPACING.LG};
  }

  // High contrast mode support
  @media (prefers-contrast: high) {
    text-shadow: 1px 1px 0 currentColor;
  }
`;

const Subtitle = styled.h3`
  ${responsiveText(TYPOGRAPHY.BODY.MOBILE, TYPOGRAPHY.BODY.TABLET, TYPOGRAPHY.BODY.DESKTOP)};
  font-weight: 400;
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: ${SPACING.MOBILE_MD};
  
  ${tablet} {
    margin-bottom: ${SPACING.LG};
  }
`;

export default HeroSection;
