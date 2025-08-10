import React from "react";
import styled from "styled-components";
import { COLORS, SPACING } from '../constants';

const Button = ({ text, color = COLORS.PRIMARY, onClick, disabled = false, variant = 'default' }) => {
  return (
    <Btn 
      color={color} 
      onClick={onClick} 
      disabled={disabled}
      variant={variant}
    >
      <span>{text}</span>
    </Btn>
  );
};

const Btn = styled.button`
  margin-top: ${SPACING.MD};
  background: white;
  border: 1px solid lightgray;
  padding: ${SPACING.SM} ${SPACING.XL};
  color: #fff;
  background: linear-gradient(to left, ${props => props.color} 50%, #fff 50%) right;
  background-size: 200%;
  transition: 0.5s ease-out;
  cursor: pointer;
  border: none;
  outline: none;
  font-family: inherit;

  span {
    font-weight: 400;
    font-size: 1rem;
  }

  &:hover:not(:disabled) {
    background-position: left;
    color: #191919;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid ${COLORS.SECONDARY};
    outline-offset: 2px;
  }
`;

export default Button;
