import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MisionImage from '../../assets/img/mision-vision-1536x1025.png';
import VisionImage from '../../assets/img/close-up-hand-taking-pen.png';

export default class Filosofia extends Component {
    render() {
        return (
            <div>
                <Container>
                <h2 className="titulo">Filosofía</h2>
                <br></br><br></br>
                    <Row>
                        <Col xs={12} md={6}>
                            <Card border="info" style={{ width: '25rem' }}>
                                <Card.Img variant="top" src={MisionImage} />
                                <Card.Header>Misión</Card.Header>
                                <Card.Body>
                                <Card.Title>Formación humana y tecnológica</Card.Title>
                                <Card.Text>
                                Formar personas emprendedoras cuyo talento y liderazgo les permita ser capaces de asumir retos y llevar a cabo procesos de transformación en cualquier ámbito: personal, profesional, organizacional y social.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <br />
                        </Col>
                        <Col xs={12} md={6}>
                            <Card border="info" style={{ width: '25rem' }}>
                                <Card.Img variant="top" src={VisionImage} />
                                <Card.Header>Visión</Card.Header>
                                <Card.Body>
                                <Card.Title>Continuo aprendizaje</Card.Title>
                                <Card.Text>
                                Ser una institución reconocida por la calidad de sus egresados en los diversos niveles de estudios; en búsqueda permanente de mejorar sus procesos educativos con la inclusión de las herramientas educativas y con tecnología de punta.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <br />
                        </Col>
                        <Col xs={12} md={6}>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
