import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        className=""
        style={{ backgroundColor: "black", marginBottom: "0px" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <h1 style={{ color: "white" }}>Header</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="me-5">
                <Link
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                  to={"/home"}
                >
                  <h3>Home</h3>
                </Link>
              </Nav.Link>
              <Nav.Link href="#about" className="me-5">
                <Link
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                  to={"/about"}
                >
                  <h3>About</h3>
                </Link>
              </Nav.Link>
              <Nav.Link href="#register" className="me-5">
                <Link
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                  to={"/register"}
                >
                  <h3>Register</h3>
                </Link>
              </Nav.Link>
              <Nav.Link href="#login" className="me-5">
                <Link
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                  to={"/login"}
                >
                  <h3>Login</h3>
                </Link>
              </Nav.Link>

              <Nav.Link href="#service" className="me-5">
                <Link
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                  to={"/service"}
                >
                  <h3>Service</h3>
                </Link>
              </Nav.Link>
              <Nav.Link href="#contact" className="me-5">
                <Link
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                  to={"/contact"}
                >
                  <h3>Contact</h3>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
