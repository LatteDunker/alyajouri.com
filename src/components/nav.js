import React from 'react'
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import '../styles/mystyle.css'

export default function Navigation() {
    return (
    <Navbar expand="lg" className="navbar">
      <Link to="/" className="brand">Alyajouri</Link>
      {/*
      <Navbar.Toggle className="nav-toggle-icon" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="flex-links">
          
          <Link to="/blog">Blog</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
         
        </Nav>
        
      </Navbar.Collapse>
     */}
      </Navbar>
    )
  }
