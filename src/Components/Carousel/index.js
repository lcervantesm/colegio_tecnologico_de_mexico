import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../assets/img/banner comipems.png';
/*import slider2 from '../../assets/img/_DSC1631.png';
import slider3 from '../../assets/img/_DSC1576.png';*/

function CarouselMain (props) {
    return (
        <Carousel className="carousel" variant="dark">
            <Carousel.Item>
                    <img className="d-block w-100" src={slider1} alt="banner comipems"
                    />
            </Carousel.Item>
            {/*<Carousel.Item>
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
            </Carousel.Item>*/}
        </Carousel>
    );
}

export default CarouselMain;
