import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/Listgroup';
import ListGroupItem from 'react-bootstrap/ListgroupItem';
import Nav from 'react-bootstrap/Nav';
import ContactForm from '../../Components/ContactForm';
import FotoCoapa from '../../assets/img/biblioteca_despues.png';
import FotoZaragoza from '../../assets/img/biblioteca_despues.png';
class Home extends React.Component {
    render() {
        return(
            <div>
                    <Container>
                        <br></br>
                        <br></br>
                        <Row>
                            <Col xs={12} md={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={FotoZaragoza} />
                                <Card.Body>
                                    <Card.Title>Plantel Zaragoza</Card.Title>
                                    <Card.Text>
                                    Calzada I Zaragoza No. 1329 Col. Tepalcates, CDMX.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem><Nav.Link href="tel:5557564938">5557564938</Nav.Link>¡Llama ahora!</ListGroupItem>
                                    <ListGroupItem><Nav.Link href="tel:5557635628">5557635628</Nav.Link>Atención personalizada</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col xs={12} md={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={FotoCoapa} />
                                <Card.Body>
                                    <Card.Title>Plantel Coapa</Card.Title>
                                    <Card.Text>
                                        Parma No. 3 Col. Ex-Hacienda de Coapa, CDMX.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem><Nav.Link href="tel:5556779934">5556779934</Nav.Link>¡Llama ahora!</ListGroupItem>
                                    <ListGroupItem><Nav.Link href="tel:5556779209">5556779209</Nav.Link>Atención personalizada</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col xs={12} md={4}>
                                <ContactForm />
                            </Col>
                        </Row>
                        <br></br>
                        <br></br>
                    </Container>
            </div>
        );
    }
}

export default Home;
