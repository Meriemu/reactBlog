import React from "react";
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";

const index = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks too="about"> ABout </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks too="discover"> Discover </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks too="services"> Services </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks too="Signup"> Sign Up </NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="/signin">
               Sign In
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default index;
