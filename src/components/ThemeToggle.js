import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
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

  return (
            <ToggleButton
          onClick={toggleTheme}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          data-tooltip={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        >
      {isDark ? '☀️' : '🌙'}
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--white);
  color: var(--dark);
  border: 0.2rem solid var(--dark);
  cursor: pointer;
  font-size: 1.8rem;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: var(--dark);
    color: var(--white);
    transform: scale(1.1);
  }

  &:focus {
    outline: 0.2rem solid var(--yellow);
    outline-offset: 0.2rem;
  }

  @media (max-width: 768px) {
    top: 1.5rem;
    right: 1.5rem;
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.6rem;
  }
`;

export default ThemeToggle;
