import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import Coapa from '../../assets/img/foto portal ctm.png';

export default class Planteles extends Component {
    render() {
        return (
            <div>
                <Row xs={1} md={2} className="g-4">
                        <Col xs={12} md={3} />
                        <Col>
                        <Card>
                            <Card.Img variant="top" src={Coapa} />
                            <Card.Body>
                                <Card.Title>Plantel Zaragoza</Card.Title>
                                <Card.Text>
                                Ubicado en la Calzada Ignacio Zaragoza No. 1329 Colonia Tepalcates; Ciudad de México.
                                Tenemos la siguiente ofreta educativa:
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Bachillerato IPN</ListGroupItem>
                                <ListGroupItem>Licenciatura en Ciencias Informáticas IPN</ListGroupItem>
                                <ListGroupItem>Licenciatura en Contaduría Pública IPN</ListGroupItem>
                                <ListGroupItem>Licenciatura en Administración Industrial IPN</ListGroupItem>
                                <ListGroupItem>Licenciatura en Informática SEP</ListGroupItem>
                                <ListGroupItem>Licenciatura en Contaduría Pública SEP</ListGroupItem>
                                <ListGroupItem>Licenciatura en Pedagogía SEP</ListGroupItem>
                                <ListGroupItem>Licenciatura en Mercadotecnia SEP</ListGroupItem>
                                <ListGroupItem>Licenciatura en Derecho SEP</ListGroupItem>
                                <ListGroupItem>Maestría en Administración de Hospitales</ListGroupItem>
                                <ListGroupItem>Maestría en Ciencias de la Educación</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="/admisiones">Informes aquí</Card.Link>
                            </Card.Body>
                        </Card><br></br>
                        <Card>
                            <Card.Img variant="top" src={Coapa} />
                            <Card.Body>
                                <Card.Title>Plantel Coapa</Card.Title>
                                <Card.Text>
                                Ubicado al sur de la CDMX Parma No. 3 Colonia Ex-Hacienda Coapa, Ciudad de México.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Bachillerato SEP</ListGroupItem>
                                <ListGroupItem>Curso ingreso UNAM</ListGroupItem>
                                <ListGroupItem>Curso ingreso IPN</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="/admisiones">Informes aquí</Card.Link>
                            </Card.Body>
                        </Card><br/>
                        </Col>
                </Row>
            </div>
        )
    }
}
