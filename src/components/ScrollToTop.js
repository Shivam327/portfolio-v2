import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../constants';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <ScrollContainer>
          <ScrollLabel>Navigation</ScrollLabel>
          <ScrollButton
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Scroll to top"
            data-tooltip="Scroll to top"
            className="scroll-top-btn"
          >
            ↑
          </ScrollButton>
        </ScrollContainer>
      )}
    </>
  );
};

const ScrollContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  z-index: 1000;
  background: rgba(var(--bg-primary-rgb, 255, 255, 255), 0.1);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 2rem;
  border: 1px solid rgba(var(--text-primary-rgb, 0, 0, 0), 0.2);
  transition: all 0.3s ease;
  animation: slideInUp 0.5s ease-out;

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(2rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    bottom: 1.5rem;
    right: 1.5rem;
    padding: 1rem;
    gap: 0.6rem;
  }

  &:hover {
    transform: translateX(-0.5rem);
    box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.15);
  }
`;

const ScrollLabel = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  opacity: 0.9;
  text-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.8s ease-out;
  animation-fill-mode: both;
  animation-delay: 0.1s;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 0.8rem;
  }
`;

const ScrollButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: inherit;
  backdrop-filter: blur(5px);
  animation: fadeInUp 0.8s ease-out;
  animation-fill-mode: both;
  animation-delay: 0.2s;

  /* Default styling - matching FloatingActionBar */
  background-color: var(--white);
  color: var(--dark);
  border: 0.2rem solid var(--dark);

  /* Scroll button specific - matching theme toggle */
  &.scroll-top-btn {
    background-color: var(--white);
    color: var(--dark);
    border: 0.2rem solid var(--dark);
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0.4rem 1.5rem rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: 0.2rem solid var(--yellow);
    outline-offset: 0.2rem;
  }

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.6rem;
  }
`;

export default ScrollToTop;
