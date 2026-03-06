import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { tablet } from '../styles/mixins';

const FloatingActionBar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Listen for hamburger menu state changes
    const handleHamburgerChange = (e) => {
      if (e.detail && typeof e.detail.isOpen === 'boolean') {
        setIsHamburgerOpen(e.detail.isOpen);
      }
    };

    window.addEventListener('hamburgerStateChange', handleHamburgerChange);
    return () => window.removeEventListener('hamburgerStateChange', handleHamburgerChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  // Hide when hamburger menu is open since it already has social icons
  if (isHamburgerOpen) return null;

  return (
    <ActionBar>
      {/* Theme Section */}
      <Section>
        <SectionLabel>Theme</SectionLabel>
        <ActionButton
          onClick={toggleTheme}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          data-tooltip={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          className="theme-toggle"
        >
          {isDark ? '☀️' : '🌙'}
        </ActionButton>
      </Section>

      {/* Divider */}
      <Divider />

      {/* Resume Section */}
      <Section>
        <SectionLabel>Resume</SectionLabel>
        <ActionButton
          as="a"
          href="https://github.com/Shivam327/portfolio-v2/blob/master/Shivam_Thaker_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Download Resume"
          data-tooltip="Download Resume"
          className="resume-btn"
        >
          📄
        </ActionButton>
      </Section>

      {/* Divider */}
      <Divider />

      {/* Social Section */}
      <Section>
        <SectionLabel>Connect</SectionLabel>
        <ActionButton
          as="a"
          href="https://www.linkedin.com/in/thakershivam/"
          target="_blank"
          rel="noopener noreferrer"
          title="Connect on LinkedIn"
          data-tooltip="Connect on LinkedIn"
          className="linkedin-btn"
        >
          <img src="/images/linkedin.svg" alt="LinkedIn" />
        </ActionButton>
        <ActionButton
          as="a"
          href="https://github.com/shivam327"
          target="_blank"
          rel="noopener noreferrer"
          title="View GitHub Profile"
          data-tooltip="View GitHub Profile"
          className="github-btn"
        >
          <img src="/images/github.png" alt="GitHub" />
        </ActionButton>
        <ActionButton
          as="a"
          href="mailto:shivamthaker1999@gmail.com"
          title="Send Email"
          data-tooltip="Send Email"
          className="email-btn"
        >
          <img src="/images/mail.svg" alt="Email" />
        </ActionButton>
      </Section>

    </ActionBar>
  );
};

const ActionBar = styled.div`
  position: fixed;
  right: 1rem;
  top: 20%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: rgba(var(--bg-secondary-rgb, 255, 255, 255), 0.1);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  border: 0.1rem solid rgba(var(--text-primary-rgb, 0, 0, 0), 0.1);
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
  animation: slideInRight 0.8s ease-out;

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(2rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  ${tablet} {
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    gap: 1.5rem;
    padding: 1.5rem;
  }

  &:hover {
    transform: translateX(-0.5rem);
    box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.15);
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  animation: fadeInUp 0.8s ease-out;
  animation-fill-mode: both;

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(3) { animation-delay: 0.2s; }
  &:nth-child(5) { animation-delay: 0.3s; }

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
`;

const SectionLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  opacity: 0.9;
  text-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
  
  ${tablet} {
    font-size: 1rem;
  }
`;

const Divider = styled.div`
  width: 3rem;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--text-secondary),
    transparent
  );
  opacity: 0.3;
`;

const ActionButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  transition: all 0.3s ease;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: inherit;
  backdrop-filter: blur(5px);

  /* Default styling */
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 0.2rem solid var(--text-primary);

  /* Theme toggle specific */
  &.theme-toggle {
    background-color: var(--bg-secondary);
    color: var(--text-primary);
    border: 0.2rem solid var(--text-primary);
  }

  /* Resume button specific */
  &.resume-btn {
    background-color: var(--lightRed);
    color: var(--red);
    border: 0.2rem solid var(--red);
  }

  /* LinkedIn button specific */
  &.linkedin-btn {
    background-color: var(--lightBlue);
    border: 0.2rem solid var(--blue);
  }

  /* GitHub button specific */
  &.github-btn {
    background-color: rgba(var(--text-primary-rgb, 0, 0, 0), 0.2);
    border: 0.2rem solid var(--text-primary);
  }

  /* Email button specific */
  &.email-btn {
    background-color: var(--lightRed);
    border: 0.2rem solid var(--red);
  }

  /* Image styling */
  & > img {
    width: 1.8rem;
    height: 1.8rem;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0.4rem 1.5rem rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: 0.2rem solid var(--yellow);
    outline-offset: 0.2rem;
  }

  ${tablet} {
    width: 4rem;
    height: 4rem;
    font-size: 1.8rem;

    & > img {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default FloatingActionBar;
