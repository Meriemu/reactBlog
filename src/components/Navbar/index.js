import React, { useState, useEffect, useContext} from "react";

import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';

import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from "react-scroll";

import {  useNavigate } from "react-router-dom";

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

import { UserContext } from '../../context/userContext';

const Navbar = ({ toggle }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const [scrollNav, setScrollNav] = useState();

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);
  
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  // Se déco
  const logOut = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch {
      alert("please check your nonnexion ! ")
    }
  }


  return (
    <>
      <IconContext.Provider value={{ color: '' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>Merach</NavLogo>
            
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <NavMenu>
              <NavItem>
                <NavLinks to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  // activeClass="active"
                > About </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-79}
                > Discover </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-79}
                > Services </NavLinks>
              </NavItem>
            </NavMenu>

            <NavBtn>
            {
              currentUser ? 
                (<NavBtnLink to="/signup" onClick={ logOut }>
                Log out
              </NavBtnLink>) : 
               (
                <div>
                  <NavBtnLink to="/signin">
                    Sign In
                  </NavBtnLink>
                </div>
              )
            }


            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
