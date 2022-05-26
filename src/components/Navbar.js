/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import '../css/Navbar.css';

export default function Navbar() {
  const [showNavText, setShowNavText] = useState(false);

  return (
    <MDBNavbar expand='lg' className="navArea" sticky>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' className="brandTitle">Foresight</MDBNavbarBrand>
        <MDBNavbarToggler
        className="toggleBtn"
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
            <Scroll
            to="section1"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={400}
            >
              <MDBNavbarLink className="navLink" active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </Scroll>
            </MDBNavbarItem>
            <Scroll
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={400}
            >
            <MDBNavbarItem>
              <MDBNavbarLink href='#' className="navLink">About</MDBNavbarLink>
            </MDBNavbarItem>
            </Scroll>

            <Scroll
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={400}
            >
            <MDBNavbarItem>
              <MDBNavbarLink href='#' className="navLink">Process</MDBNavbarLink>
            </MDBNavbarItem>
            </Scroll>

            <Scroll
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={400}
            >
            <MDBNavbarItem>
              <MDBNavbarLink href='#' className="navLink">Projects</MDBNavbarLink>
            </MDBNavbarItem>
            </Scroll>
          </MDBNavbarNav>
          

          <MDBNavbarNav className="right">
          <Link to="/login">
            <MDBNavbarLink href='#' className="navLink" id="loginBtn">Login</MDBNavbarLink>
          </Link>
          <Link to="/register">
            <MDBNavbarLink href='#' className="navLink" id="registerBtn">Register</MDBNavbarLink>
          </Link>
          </MDBNavbarNav>
        
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    
  );
}