import React, { memo } from "react";
import styled from "styled-components";

const Button = memo(({ 
  text, 
  color = 'var(--green)', 
  onClick, 
  disabled = false, 
  variant = 'default',
  type = 'button',
  'aria-label': ariaLabel,
  children 
}) => {
  const handleClick = (e) => {
    if (onClick && !disabled) {
      onClick(e);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e);
    }
  };

  return (
    <Btn 
      color={color} 
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      variant={variant}
      type={type}
      aria-label={ariaLabel || text}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      {children || <span>{text}</span>}
    </Btn>
  );
});

Button.displayName = 'Button';

const Btn = styled.button`
  margin-top: 1.5rem;
  background: white;
  border: 1px solid lightgray;
  padding: 1rem 3rem;
  color: var(--text-primary);
  background: linear-gradient(to left, ${props => props.color} 50%, var(--bg-secondary) 50%) right;
  background-size: 200%;
  transition: all 0.3s ease-out;
  cursor: pointer;
  border: none;
  outline: none;
  font-family: inherit;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  min-height: 44px; // Accessibility: minimum touch target size
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover:not(:disabled) {
    background-position: left;
    color: var(--text-primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
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
    
    &:hover:not(:disabled) {
      transform: none;
    }
  }

  span {
    font-weight: 400;
    font-size: 1rem;
    pointer-events: none; // Prevents text selection issues
  }
`;

export default Button;
