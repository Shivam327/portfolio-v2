import styled from 'styled-components';
import { COLORS, SIZES, SPACING } from '../constants';

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
  height: ${props => props.size || SIZES.BUTTON_HEIGHT};
  width: ${props => props.size || SIZES.BUTTON_WIDTH};
  border-radius: 50%;
  background-color: ${COLORS.DARK};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: rotate(-30deg);
    color: ${COLORS.SECONDARY};
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
  color: ${COLORS.GRAY};
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
`;
