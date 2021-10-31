import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/img/logoCTM.png';
import {Link} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarBootstrap(props) {
    return(
        <div>
        <Navbar className="color-nav" collapseOnSelect expand="lg" variant="dark">
            <Container>
            <img className="logo-ctm" alt="logo-colegio-tecnologico-de-mexico" src={logo}></img>
            <Navbar.Brand as={Link} to="/" className="nombre-colegio">Colegio <br></br>Tecnológico de México</Navbar.Brand>
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
        <Navbar className="menu-ctm" sticky="top" collapseOnSelect expand="lg" variant="dark">
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="quienes-somos">¿Quiénes somos?</Nav.Link>
                        <Nav.Link href="planteles">Planteles</Nav.Link>
                        {/*<NavDropdown title="Planteles" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="coapa">Coapa</NavDropdown.Item>
                            <NavDropdown.Item href="zaragoza">Zaragoza</NavDropdown.Item>
    </NavDropdown>*/}
                    <NavDropdown title="Oferta Educativa" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="oferta-educativa">Toda la oferta</NavDropdown.Item>
                        {/*<NavDropdown.Item href="bachillerato-ipn">Bachillerato IPN</NavDropdown.Item>
                        <NavDropdown.Item href="preparatoria-sep">Preparatoria SEP</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="licenciaturas-ipn">Licenciaturas IPN</NavDropdown.Item>
                        <NavDropdown.Item href="ciencias-informaticas-ipn">Ciencias Informáticas</NavDropdown.Item>
                        <NavDropdown.Item href="contaduria-ipn">Contaduría Pública</NavDropdown.Item>
                        <NavDropdown.Item href="administracion-industrial">Administración Industrial</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="licenciaturas-sep">Licenciaturas SEP</NavDropdown.Item>
                        <NavDropdown.Item href="informatica-sep">Informática</NavDropdown.Item>
                        <NavDropdown.Item href="pedagogia-sep">Pedagogía</NavDropdown.Item>
                        <NavDropdown.Item href="mercadotecnia-sep">Mercadotecnia</NavDropdown.Item>
                        <NavDropdown.Item href="derecho-sep">Derecho</NavDropdown.Item>
                        <NavDropdown.Item href="contaduria-sep">Contaduría Pública</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="maestrias-sep">Maestrías SEP</NavDropdown.Item>
                        <NavDropdown.Item href="administracion-hospitales-sep">Administración de Hospitales</NavDropdown.Item>
    <NavDropdown.Item href="ciencias-educacion-sep">Ciencias de la Educación</NavDropdown.Item>*/}
                    </NavDropdown>
                    <NavDropdown title="Educación Continua" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="diplomado-1">Diplomado 1</NavDropdown.Item>
                        <NavDropdown.Item href="diplomado-2">Diplomado 2</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Comunidad" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="reglamentos">Reglamentos</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Alianzas" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="colegio-ciencias-matematicas">Colegio de Ciencias Matemáticas</NavDropdown.Item>
                        <NavDropdown.Item href="SSNTS">SSNTS</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="contacto">Contacto</Nav.Link>
                    <Nav.Link href="admisiones">Admisiones</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default NavbarBootstrap;
