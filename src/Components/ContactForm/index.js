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
                <br></br><br></br>
            <h2 className="titulo-form">¡Imagína las posibilidades!</h2><br></br><br></br>
                <p className="left-align light">Déjanos tus datos y forma parte del Colegio Tecnológico de México. Asiste a clases, ya sea en el Plantel Sur Coapa o en el Plantel Oriente Zaragoza. Encontrarás personas que representan totalmente los valores propios del colegio, además de actividades culturales, deportivas y extracurriculares.
                Tenemos un lugar para ti, recuerda verificar la oferta educativa de cada plantel. Tenemos más de 20 años de experiencia. Agenda un recorrido para conocer nuestras instalaciones.</p><br></br><br></br>
            <Container className="form">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Introduce tu nombre" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" placeholder="Apellidos" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="ejemplo@ejemplo.com" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="phone-number" placeholder="Teléfono" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridProgram">
                    <Form.Label>Programa de interés</Form.Label>
                    <Form.Control as="select" defaultValue="Escoge uno...">
                        <option>Escoge uno...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
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
