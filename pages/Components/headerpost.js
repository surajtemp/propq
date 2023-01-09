import Head from "next/head";
import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { logout } from "../../server";
import { useRouter } from "next/router";

export default function HeaderPost() {
  const router = useRouter();
  const callLogout = () => {
    const refreshToken = localStorage.getItem("refreshToken");
    logout(refreshToken).then((res) => {
      localStorage.setItem("isLoggedIn", false);
      console.log(res);
      router.push("/");
    });
  };
  return (
    <div>
      <main className="container-fluid padding-0">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="white"
          variant="light"
          className="fixed-top"
        >
          <Container>
            <Navbar.Brand href="./">
              <img
                src="../logo-01.svg"
                width="auto"
                height="42"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav className="header-menu">
                <Nav.Link className="l-h-2" href="./faq">
                  Faqs
                </Nav.Link>
                <Nav.Link className="l-h-2" href="./contactus">
                  Contact Us
                </Nav.Link>
                <Navbar.Collapse id="navbar-dark-example">
                  <Nav className="profile-dropdown">
                    <div className="profile-avatar">
                      <img src="https://www.w3schools.com/w3images/avatar6.png" />
                    </div>
                    <NavDropdown
                      id="nav-dropdown-dark-example profile-name"
                      title="Martin"
                      menuVariant="dark"
                    >
                      <NavDropdown.Item href="#action/3.1" onClick={callLogout}>
                        Log out
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </main>
    </div>
  );
}
