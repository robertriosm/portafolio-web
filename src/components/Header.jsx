import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
  return (
    <Navbar collapseOnSelect className="my-blur sticky-top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">RR</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#link">About me</Nav.Link>
            <Nav.Link href="#link">Contact me</Nav.Link>
            <Nav.Link href="#link">Technologies</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

// Header.propTypes = {
//   Tvalue: propTypes.string.isRequired,
//   // handleClick: propTypes.func.isRequired,
// }

export default Header
