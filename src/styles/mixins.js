import { css } from 'styled-components';
import { BREAKPOINTS, SPACING } from '../constants';

// Mobile-first media queries (used as `${tablet} { ... }` in styled-components)
export const mobile = `@media (min-width: ${BREAKPOINTS.MOBILE})`;
export const tablet = `@media (min-width: ${BREAKPOINTS.TABLET})`;
export const desktop = `@media (min-width: ${BREAKPOINTS.DESKTOP})`;
export const large = `@media (min-width: ${BREAKPOINTS.LARGE})`;
export const landscape = `@media (orientation: landscape)`;
export const portrait = `@media (orientation: portrait)`;

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
