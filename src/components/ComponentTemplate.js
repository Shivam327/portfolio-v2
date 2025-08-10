import React, { useEffect } from 'react';
import styled from 'styled-components';
import { initializeAOS, scrollToTop } from '../utils/animations';
import { COLORS, SPACING } from '../constants';

/**
 * ComponentTemplate - A template for creating consistent components
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {React.ReactNode} props.children - Component content
 * @param {string} props.className - Additional CSS classes
 */
const ComponentTemplate = ({ title, children, className }) => {
  useEffect(() => {
    scrollToTop();
    initializeAOS();
    if (title) {
      document.title = `Shivam Thaker -- ${title}`;
    }
  }, [title]);

  return (
    <Container className={className}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  padding: ${SPACING.XL} 0;
  background-color: ${COLORS.DARK};
  color: ${COLORS.WHITE};
`;

export default ComponentTemplate;
