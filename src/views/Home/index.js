import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FotoBienvenida from '../../assets/img/_DSC1604.png';
import BannerAdmisiones from '../../Components/BannerAdmisiones';
import CarouselMain from '../../Components/Carousel';

class Home extends React.Component {
    render() {
        return(
            <div>
                <CarouselMain/>
                    <Container>
                        <br></br>
                        <br></br>
                        <Row>
                            <Col xs={12} md={6}>
                            <div className="mensaje-bienvenida"><h3>¡Bienvenidos al CTM!</h3><br></br><h5 className="texto-pagina">Forma parte del <b>Colegio Tecnológico de México</b> y cambia tu futuro. Prepárate con nosotros. 
                                Tenemos exelentes <i>planes de estudios</i> avalados por <b>SEP e IPN.</b> Pregunta por nuestro programa de <b>becas </b> aquí.
                            </h5>
                            </div>
                            </Col>
                            <Col xs={12} md={6}>
                            <img alt="Bienvenido al Colegio Tecnologico de México" class="foto-bienvenida" src={FotoBienvenida} width="100%" />
                            </Col>
                        </Row>
                        <br></br>
                        <br></br>
                    </Container>
                    <BannerAdmisiones />

            </div>
        );
    }
}

export default Home;