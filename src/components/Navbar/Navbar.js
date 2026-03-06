import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { SPACING } from "../../constants";
import { desktop, tablet, mobile } from "../../styles/mixins";
import Humburger from "./Humburger";

const Navbar = () => {
  const location = useLocation();
  
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "<Menu />",
    color: "var(--text-primary)",
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    setState({ clicked: false, menuName: "<Menu />", color: "var(--text-primary)" });
  }, [location]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "<Close />",
        color: "var(--bg-primary)",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "<Menu />",
        color: "var(--text-primary)",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "<Close />",
        color: "var(--bg-primary)",
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <>
      <Nav>
        <Logo>
          <Link to="/" aria-label="Go to homepage">
            <h1 style={{ color: `${state.color}` }} id="logo">
              ST
            </h1>
          </Link>
        </Logo>
        <Menu>
          <button
            style={{ color: `${state.color}` }}
            disabled={disabled}
            onClick={handleMenu}
            id="btn"
            aria-label="Toggle navigation menu"
            aria-expanded={state.clicked}
          >
            {state.menuName}
          </button>
        </Menu>
      </Nav>
      <Humburger state={state} setState={setState} />
    </>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 70px;
  min-height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${SPACING.MOBILE_MD};
  color: #191919;
  background-color: #f2efe7;
  border-bottom: 2px solid #191919;
  transition: all 0.4s ease-in-out;
  box-sizing: border-box;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  pointer-events: auto;
  cursor: default;
  
  /* Ensure proper mobile display */
  @media (max-width: 480px) {
    height: 65px;
    min-height: 65px;
    padding: 0 ${SPACING.SM};
  }
  
  ${mobile} {
    height: 70px;
    min-height: 70px;
    padding: 0 ${SPACING.MD};
  }
  
  ${tablet} {
    height: 75px;
    min-height: 75px;
    padding: 0 ${SPACING.LG};
  }
  
  ${desktop} {
    height: 80px;
    min-height: 80px;
    padding: 0 ${SPACING.XL};
  }
`;

const Logo = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  
  & > a > h1 {
    transition: all 1.5s ease-in-out;
    font-family: "Fuggles", cursive;
    font-weight: 600;
    font-size: 2.8rem;
    color: #191919;
    margin: 0;
    line-height: 1;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    
    /* Mobile-first approach */
    @media (max-width: 480px) {
      font-size: 2.5rem;
    }
    
    ${mobile} {
      font-size: 3rem;
    }
    
    ${tablet} {
      font-size: 3.5rem;
    }
    
    ${desktop} {
      font-size: 4.5rem;
    }
  }

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #191919;
    height: 100%;
    padding: 0.5rem 0;
    min-height: 44px; /* Touch target minimum */
    cursor: pointer;
    
    &:hover {
      transform: scale(1.05);
      transition: transform 0.2s ease;
    }
  }

  & > a > img {
    margin: 0 2rem;
    height: 6vh;
  }
`;

const Menu = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  
  & > button {
    transition: all 1.5s ease-in-out;
    font-weight: 600;
    color: #191919;
    background-color: rgba(0, 0, 0, 0.1);
    border: 2px solid #191919;
    font-size: 1.4rem;
    font-family: inherit;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    min-height: 44px; /* Touch target minimum */
    min-width: 44px; /* Touch target minimum */
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      transform: scale(1.05);
    }
    
    &:focus {
      outline: 3px solid #f8e08e;
      outline-offset: 2px;
    }
    
    &:active {
      transform: scale(0.95);
    }
    
    /* Mobile-first approach */
    @media (max-width: 480px) {
      font-size: 1.3rem;
      padding: 6px 10px;
      min-height: 40px;
      min-width: 40px;
    }
    
    ${mobile} {
      font-size: 1.6rem;
      padding: 10px 14px;
    }
    
    ${tablet} {
      font-size: 2rem;
      padding: 10px 16px;
    }
    
    ${desktop} {
      font-size: 2.5rem;
      padding: 12px 20px;
    }
  }
`;

export default Navbar;
