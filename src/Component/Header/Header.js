import React from 'react';
import Container from 'react-bootstrap/Container';
import { Outlet, Link, NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../Asset/img/Dog_Pull.jpg';

export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home">
            <img
              alt="Logo"
              src={Logo}
              width="60"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Product">Product</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Login</Nav.Link>
                        <Nav.Link href="#link">Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
