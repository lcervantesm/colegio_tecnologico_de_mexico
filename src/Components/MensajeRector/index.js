import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Rector from '../../assets/img/rector.png';
import Image from 'react-bootstrap/Image';
import ContactForm from '../ContactForm';

export default class MensajeRector extends Component {
    render() {
        return (
            <div>
                <Row className="row-mensaje-rector">
                    <Col xs={12} md={10}>
                    <Card className="mensaje-rector">
                        <Image src={Rector} alt="Rector-CTM" />
                        <Card.Header>Mensaje del<br></br>Rector</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                Hoy en día, en medio de un contexto altamente turbulento como producto de la 4ª Revolución Industrial, se ha ampliado la brecha entre la llamada Industria 4.0 y la Educación, no sólo por el impulso de la tecnología en el terreno digital, sino también por los requerimientos que actualmente se imponen a los jóvenes que se insertarán al ambiente laboral, como adquirir y evidenciar el desarrollo de competencias humanas, de liderazgo y de emprendimiento; uso de una segunda lengua y el desarrollo de las habilidades STEM (Ciencia, Tecnología, Ingeniería y Matemáticas).{' '}
                            </p>
                            <footer className="blockquote-footer">
                            M. Wlester Santiago Pineda, <cite title="Source Title">Rector</cite>
                            </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                        <br />
                    </Col>
                </Row>
                <Row>
                    <ContactForm />
                </Row><br></br><br></br>
            </div>
        )
    }
}
