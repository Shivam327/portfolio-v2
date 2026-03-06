import { css } from 'styled-components';
import { BREAKPOINTS, SPACING } from '../constants';

// Mobile-first media queries
export const mobile = css`
  @media (min-width: ${BREAKPOINTS.MOBILE}) {
    ${props => props}
  }
`;

export const tablet = css`
  @media (min-width: ${BREAKPOINTS.TABLET}) {
    ${props => props}
  }
`;

export const desktop = css`
  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    ${props => props}
  }
`;

export const large = css`
  @media (min-width: ${BREAKPOINTS.LARGE}) {
    ${props => props}
  }
`;

export const landscape = css`
  @media (orientation: landscape) {
    ${props => props}
  }
`;

export const portrait = css`
  @media (orientation: portrait) {
    ${props => props}
  }
`;

// Responsive typography mixin
export const responsiveText = (mobileSize, tabletSize, desktopSize) => css`
  font-size: ${mobileSize};
  
  ${tablet} {
    font-size: ${tabletSize};
  }
  
  ${desktop} {
    font-size: ${desktopSize};
  }
`;

// Responsive spacing mixin
export const responsiveSpacing = (property, mobileValue, tabletValue, desktopValue) => css`
  ${property}: ${mobileValue};
  
  ${tablet} {
    ${property}: ${tabletValue};
  }
  
  ${desktop} {
    ${property}: ${desktopValue};
  }
`;

// Container mixin
export const container = css`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 ${SPACING.MOBILE_MD};
  
  ${tablet} {
    padding: 0 ${SPACING.LG};
    max-width: 90%;
  }
  
  ${desktop} {
    padding: 0 ${SPACING.XL};
    max-width: 1200px;
  }
  
  ${large} {
    max-width: 1280px;
  }
`;
