import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from '../../Components/ContactForm';

export default class Admisiones extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <h2 className="titulo">Contacto de Admisiones</h2>
                            <h4 className="texto-admisiones">Lic. Rosy González, Coordinadora de promoción y difusión. <b>Plantel Zaragoza</b><br></br>
                                <br></br>Lic. Juan Carlos Fuentes, Coordinador de promoción y difusión. <b>Plantel Coapa</b><br></br>
                                <br></br>Colegio Tecnológico de México</h4>
                        </Col>
                        <Col xs={12} md={6}>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container><br></br><br></br>
            </div>
        )
    }
}
