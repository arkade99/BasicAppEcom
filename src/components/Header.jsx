import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handelClick = () => {
    localStorage.removeItem("Current_User");
    navigate("/login");
  };
  const validateToken = (e) => {
    const token = JSON.parse(localStorage.getItem("Current_User"));
    if (token == null) {
      e.preventDefault();
      alert("Please Log in"), navigate("/login");
    }
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand onClick={validateToken} href="/home">
          Home
        </Navbar.Brand>
        <Navbar.Brand href="/">SignUp</Navbar.Brand>
        <Navbar.Brand href="/login">Login</Navbar.Brand>
        <Button className="text-4xl" onClick={handelClick}>
          Log Out
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;
