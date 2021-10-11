import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default class Fortalezas extends Component {
    render() {
        return (
            <div>
                <br/><br/><br/><br/>
                <Container>
                    <Row>
                        <Col>
                        <h4 class="subtitulo left-align">Fortalezas</h4>
                        <p class="parrafos">En el Colegio Tecnológico de México te ayudaremos a <b class="orange-text">encontrar y desarrollar habilidades y aptitudes que te servirán para toda la vida.</b> Conceptos  que verás reflejados día a día en todos quienes participan en tu aprendizaje y edificación personal y profesional.
                        </p>
                        </Col>
                        <Col>
                            <h5 class="subtitulo1">Liderazgo</h5>
                            <ProgressBar variant='warning' now={90} /><br/>
                            <h5 class="subtitulo1">Pasión</h5>
                            <ProgressBar variant='warning' now={88} /><br/>
                            <h5 class="subtitulo1">Éxito</h5>
                            <ProgressBar variant='warning' now={95} /><br/>
                            <h5 class="subtitulo1">Innovación</h5>
                            <ProgressBar variant='warning' now={98} /><br/>
                            <br></br><br></br>
                        </Col>
                    </Row>
                <div>
                </div>
                </Container>
            </div>
        );
    }
}
