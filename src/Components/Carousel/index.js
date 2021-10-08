import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../assets/img/_DSC1602.jpeg';
import slider2 from '../../assets/img/_DSC1631.jpeg';
import slider3 from '../../assets/img/_DSC1576.jpeg';

function CarouselMain (props) {
    return (
        <Carousel className="carousel"variant="dark">
            <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                    width="1200px"
                    max-width="1200px"
                    />
                <Carousel.Caption className="text-slider1">
                    <h5 className="titulo-slider">Accede a mejores oportunidades con nuestros programas avalados por el IPN.</h5>
                    <p> <br></br>Tenemos los mismos planes de estudio que el IPN para Bachillerato y Licenciaturas.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                    />
                <Carousel.Caption className="text-slider1">
                    <h5>Profesorado experto</h5>
                    <p>Nuestro claustro de profesores está listo para recibirte.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                    />
                <Carousel.Caption className="text-slider1">
                    <h5>Equipamiento de primer nivel</h5>
                    <p>Tenemos dos planteles totalmente equipados para ti.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselMain;
