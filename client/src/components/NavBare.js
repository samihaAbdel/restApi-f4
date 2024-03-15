import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
const NavBare = () => {
  return (
    <div>
      {" "}
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">MERN</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact"> Contacts</Nav.Link>
            <Nav.Link href="/add">Add Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBare;
