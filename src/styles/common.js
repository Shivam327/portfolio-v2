import styled from 'styled-components';
import { SIZES, SPACING } from '../constants';

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.size || SIZES.CIRCLE_LARGE};
  width: ${props => props.size || SIZES.CIRCLE_LARGE};
  border-radius: 50%;
  background-color: var(--text-primary);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: rotate(-30deg);
    color: var(--yellow-text);
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${SPACING.LG};
`;

export const Section = styled.section`
  padding: ${SPACING.XL} 0;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  line-height: 5rem;
  margin: 0;
`;

export const SubHeading = styled.h2`
  color: var(--text-secondary);
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
`;

export const DecorativeBG = styled.div`
  position: absolute;
  left: 53%;
  width: 70rem;
  height: 70rem;
  border-radius: 50%;
  z-index: -5;
`;
