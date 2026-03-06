import React, { memo } from "react";
import styled from "styled-components";
import { responsiveText, responsiveSpacing, tablet, desktop } from '../styles/mixins';
import { TYPOGRAPHY, SPACING } from '../constants';
import ResponsiveImage from './ResponsiveImage';

const Project = memo(({ height, image, position, name, type, onClick, ...props }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <ProjectWrapper 
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : -1}
      role={onClick ? 'button' : undefined}
      aria-label={onClick ? `View project: ${name}` : undefined}
      {...props}
    >
      <ProjectImage
        src={image}
        alt={`${name} - ${type}`}
        height={height}
        position={position}
        cover
      />
      <Wrapper>
        <Info>
          <h1>{name}</h1>
          <h2>{type}</h2>
        </Info>
        <Circle>
          <h2>Let's Visit</h2>
        </Circle>
      </Wrapper>
    </ProjectWrapper>
  );
});

Project.displayName = 'Project';

const ProjectWrapper = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  background: var(--bg-secondary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  &:focus-visible {
    outline: 3px solid var(--green);
    outline-offset: 2px;
    box-shadow: 0 0 0 3px rgba(49, 196, 140, 0.3);
  }

  // High contrast mode support
  @media (prefers-contrast: high) {
    border: 2px solid currentColor;
  }

  // Reduced motion support
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;
    
    &:hover {
      transform: none;
    }
  }
`;

const ProjectImage = styled(ResponsiveImage)`
  width: 100%;
  height: ${props => props.height || '200px'};
  border-radius: 0.5rem 0.5rem 0 0;
`;

const Wrapper = styled.div`
  padding: ${SPACING.MOBILE_MD};
  width: 100%;
  display: flex;
  background: var(--bg-secondary);
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${SPACING.MOBILE_SM};
  
  ${tablet} {
    padding: ${SPACING.LG};
    gap: ${SPACING.MD};
  }
`;

const Info = styled.div`
  flex: 1;
  min-width: 0; // Prevents flex item overflow
  
  & > h1 {
    ${responsiveText('1.5rem', '2rem', '3rem')};
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: ${SPACING.MOBILE_XS};
    color: var(--text-primary);
  }

  & > h2 {
    color: var(--text-secondary);
    ${responsiveText('1rem', '1.25rem', '1.5rem')};
    font-weight: 400;
  }
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  background-color: var(--text-primary);
  flex-shrink: 0;
  
  ${tablet} {
    height: 7rem;
    width: 7rem;
  }
  
  ${desktop} {
    height: 8rem;
    width: 8rem;
  }

  & > h2 {
    color: var(--bg-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-align: center;
    
    ${tablet} {
      font-size: 1rem;
    }

    &:hover {
      transform: rotate(-30deg);
      color: var(--yellow);
    }

    // Reduced motion support
    @media (prefers-reduced-motion: reduce) {
      transition: none;
      transform: none;
      
      &:hover {
        transform: none;
      }
    }
  }
`;

export default Project;
