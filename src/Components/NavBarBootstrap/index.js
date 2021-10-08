import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/img/logoCTM.png';

function NavbarBootstrap(props) {
    return(
    <Navbar className="color-nav" sticky="top" collapseOnSelect expand="lg" variant="dark">
        <Container>
        <img className="logo-ctm" alt="logo-colegio-tecnologico-de-mexico" src={logo}></img>
        <Navbar.Brand className="nombre-colegio"href="#home">Colegio <br></br>Tecnológico de México</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
                <Nav.Link className="links-llamada" href="tel:5557564938">¡Llámanos!</Nav.Link>
                <Nav.Link className="links-llamada" href="tel:5557564938">+52 55 5756 4938</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavbarBootstrap;
