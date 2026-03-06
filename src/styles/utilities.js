import { css } from 'styled-components';
import { tablet } from './mixins';

export const hideOnMobile = css`
  display: none;
  
  ${tablet} {
    display: block;
  }
`;

export const showOnMobile = css`
  display: block;
  
  ${tablet} {
    display: none;
  }
`;

export const textCenter = css`
  text-align: center;
  
  ${tablet} {
    text-align: left;
  }
`;
