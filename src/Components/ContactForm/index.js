import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default class ContactForm extends React.Component {
    render() {
        return (
            <div className="container-form">
            <Container>
            <h2 className="titulo-form">¡Imagína las posibilidades!</h2><br></br><br></br>
                <p className="left-align light">Déjanos tus datos y forma parte del Colegio Tecnológico de México. Tenemos además de actividades culturales, deportivas y extracurriculares.
                Recuerda verificar la oferta educativa de cada plantel. Tenemos más de 20 años de experiencia.</p><br></br><br></br>
            <Container className="form">
            <Form>
                <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Introduce tu nombre" />
                    </Form.Group>
                </Row>
                <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" placeholder="Apellidos" />
                    </Form.Group>
                </Row>

                <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="ejemplo@ejemplo.com" />
                    </Form.Group>
                </Row>
                <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="phone-number" placeholder="Teléfono" />
                    </Form.Group>
                </Row>

                <Row className="mb-4">

                    <Form.Group as={Col} controlId="formGridProgram">
                    <Form.Label>Programa de interés</Form.Label>
                    <Form.Control as="select" defaultValue="Escoge uno...">
                        <option>Escoge uno...</option>
                        <option>Bachillerato IPN</option>
                        <option>Preparatoria SEP</option>
                        <option>Lic. Ciencias de la Informática IPN</option>
                        <option>Lic. Contaduría Pública IPN</option>
                        <option>Lic. Administración Industrial IPN</option>
                        <option>Lic. Informática SEP</option>
                        <option>Lic. Contaduría Pública SEP</option>
                        <option>Lic. Pedagogía SEP</option>
                        <option>Lic. Mercadotecnia SEP</option>
                        <option>Lic. Derecho SEP</option>
                        <option>Maestría en Administración de Hospitales</option>
                        <option>Maestría en Ciencias de la Educación</option>
                        <option>Curso de Admisión IPN</option>
                        <option>Curso de Admisión UNAM</option>
                        <option>Curso de Admisión COMIPEMS</option>
                    </Form.Control>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-4" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Acepto Términos y Condiciones" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Quiero atención personalizada
                </Button>
            </Form>
            </Container>
            </Container>
            </div>
        );
    }
}
