import React from 'react'
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
        <Navbar.Brand href="#home">RR</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#contact_me" data-testid="contact_me">
              Contact me
            </Nav.Link>
            <Nav.Link href="#technologies" data-testid="technologies">
              Technologies
            </Nav.Link>
            <Nav.Link href="#projects" data-testid="projects">
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
