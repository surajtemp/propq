import Head from 'next/head';
import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'




export default function Header() {
    // const isLoggedIn=localStorage.getItem("isLoggedIn");
    return (
        <div>
            <main className="container-fluid padding-0 header-comp-css">
                <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className='fixed-top'>
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
                        {/* <Navbar.Toggle className='my-1 mx-2 close' aria-controls="responsive-navbar-nav">X</Navbar.Toggle> */}

                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>

                            <Nav className='header-menu'>
                                <Nav.Link className='l-h-2' href="./faq">Faqs</Nav.Link>
                                <Nav.Link className='l-h-2' href="./contactus">
                                    Contact Us
                                </Nav.Link>
                               <Nav.Link href="./signInOtp">
                                    <button className="Signin-btn">Sign In</button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </main>



        </div>
    )
}
