import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/home">MySite</Navbar.Brand>
        <Navbar.Brand href="/">SignUp</Navbar.Brand>
        <Navbar.Brand href="/login">Login</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
