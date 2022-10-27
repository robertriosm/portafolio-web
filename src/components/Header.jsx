import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
  return (
    <Navbar
      variant="dark"
      collapseOnSelect
      className="my-blur fixed-top"
      expand="lg"
    >
      <Container>
        <Link to="/">
          <Navbar.Brand>RR</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/get_in_contact">
              <Nav data-testid="contact_me">Contact me</Nav>
            </Link>
            <Link to="/services">
              <Nav data-testid="technologies">Services</Nav>
            </Link>
            <Link to="/my_work">
              <Nav.Link data-testid="projects">My Work</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
