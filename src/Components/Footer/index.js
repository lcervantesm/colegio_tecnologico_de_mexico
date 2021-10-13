import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/logoCTM.png';
import Col from 'react-bootstrap/Col';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <br></br><br></br>
                    <Container>
                        <Row className="footer-text">
                            <Col xs={12} md={2}>
                            <Link to='/' className="">
                                <img alt="logo-footer" src={Logo} className="logo-footer mx-2" width="100" />
                            </Link>
                            </Col>
                            <Col xs={12} md={3}>
                            <h5 className="subtitle-footer">Plantel Zaragoza</h5>
                                <p class="grey-text text-lighten-4 second-list-footer">informes@tecdemexico.edu.mx <br></br> +52 55 5756 4938 <br></br> +52 55 5763 5628 <br></br> Calzada I Zaragoza No. 1329 Col. Tepalcates, CDMX. </p>
                            </Col>
                            <Col xs={12} md={3}>
                            <h5 className="subtitle-footer">Plantel Coapa</h5>
                                <p class="grey-text text-lighten-4 second-list-footer">informes@tecdemexico.edu.mx <br></br> +52 55 5677 9934 <br></br> +52 55 5677 9209 <br></br> Parma No. 3 Col. Ex-Hacienda de Coapa, CDMX. </p>
                            </Col>
                            <Col xs={12} md={3}>
                            <h5 className="subtitle-footer">Enlaces rápidos</h5>
                            <Link to='/oferta-educativa' className="footer-link">
                                Oferta Educativa
                            </Link><br></br>
                            <Link to='/quienes-somos' className="footer-link">
                                ¿Quiénes somos?
                            </Link><br></br>
                            <Link to='/admisiones' className="footer-link">
                                Admisiones
                            </Link><br></br>
                            <Link to='/comunidad' className="footer-link">
                                Comunidad
                            </Link><br></br>
                            <Link to='/faqs' className="footer-link">
                                FAQS
                            </Link><br></br>
                            <Link to='/aviso_privacidad' className="footer-link">
                                Aviso de Privacidad
                            </Link>
                            </Col>
                        </Row><br></br>
                        
                    </Container>
                    <Row className="copyright">
                            <Col xs={12} md={12}>
                            <br></br>
                            <Container className="footer-copyright">
                            Copyright © Colegio Tecnológico de México. Todos los derechos reservados. 2021
                            </Container><br></br>
                            </Col>
                        </Row>
                </footer>
            </div>
        );
    }
}
