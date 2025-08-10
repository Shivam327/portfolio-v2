import { css } from 'styled-components';
import { BREAKPOINTS } from '../constants';

export const mobile = css`
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    ${props => props}
  }
`;

export const tablet = css`
  @media (max-width: ${BREAKPOINTS.TABLET}) {
    ${props => props}
  }
`;

export const desktop = css`
  @media (min-width: ${BREAKPOINTS.TABLET}) {
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
