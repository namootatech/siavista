import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">
                {/* siavista Electrical */}
                <Image src="newlogo202.png" fluid/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link className="navigation-link" href="#">Home</Nav.Link>
                <Nav.Link className="navigation-link"  href="/services">About Us</Nav.Link>
                <Nav.Link className="navigation-link"  href="/services">Our Services</Nav.Link>
                <Nav.Link className="navigation-link"  href="/gallery">Gallery</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link className="navigation-link" eventKey={2} href="#">
                Contact
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}
export default NavigationBar;