import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Humburger from "./Humburger";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "<Menu />",
    color: "#191919",
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    setState({ clicked: false, menuName: "<Menu />", color: "#191919" });
  }, [location]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "<Close />",
        color: "#f2efe7",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "<Menu />",
        color: "#191919",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "<Close />",
        color: "#f2efe7",
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
          <Link to="/">
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
  z-index: 1000;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 8rem;
  color: #fff;
  transition: all 0.4s ease-in-out;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 4rem;
    justify-content: space-between;
  }
  
  @media (max-width: 480px) {
    padding: 0 2rem;
  }
`;

const Logo = styled.div`
  & > a > h1 {
    transition: all 1.5s ease-in-out;
    font-family: "Fuggles", cursive;
    font-weight: 600;
    font-size: 5rem;
    /* color: var(--dark); */
  }

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fff;
  }

  & > a > img {
    margin: 0 2rem;
    height: 6vh;
  }
`;
const Menu = styled.div`
  & > button {
    transition: all 1.5s ease-in-out;
    font-weight: 600;
    /* color: #191919; */
    background: none;
    border: none;
    font-size: 3rem;
    font-family: inherit;
  }
`;

export default Navbar;
