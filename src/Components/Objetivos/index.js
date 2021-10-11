import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pedagogia from '../../assets/img/pedagogia-1-1536x866.png';
import FotoObjetivos from '../../assets/img/objetivos-1536x1023.png';

export default class Objetivos extends Component {
    render() {
        return (
            <div><br></br>
                <h2 className="titulo">Nuestros Objetivos</h2>
                <br></br>
                <p className="subtitulo-objetivo">Implementar el modelo educativo, académico, pedagógico y tecnológico,
                <br />para el cumplimiento de las exigencias profesionales y laborales del siglo XXI:</p>
                <Row>
                    <Col xs={12} md={6}>
                        <br></br>
                        <h4 className="subtitulo">Excelencia en el servicio</h4>
                        <br></br>
                        <Image alt="excelente servicio ctm" className="circle legado-img" width="90%" src={Pedagogia} rounded/>
                        <p className="parrafos"><b className="orange-text">Fomentamos</b> la mejora continua de nuestro personal, convencidos de que sus capacidades y actitudes son la base del éxito.
                        <br /> <br /><b className="orange-text">Impulsamos</b> el uso de las tecnologías para aprender, innovar y emprender, sin perder de vista la manera adecuada de implementarlas dentro del aula.
                        <br></br><br /> <b className="orange-text">La visión global </b>de nuestros estudiantes y catedráticos es el agregado necesario para entender la actualidad, un ingrediente que nos caracteriza.
                        <br></br> <br />Promovemos proyectos de <b className="orange-text">intercambio académico</b> nacionales e internacionales. El desarrollo de estos proyectos de intercambio académico permiten que nuestros estudiantes y docentes interactúen en otros ambientes, con otras culturas, sociedades, pensamientos y sentimientos. 
                        </p>
                    </Col>
                    <Col xs={12} md={6}>
                    <br></br>
                        <h4 className="subtitulo">Excelencia académica</h4>
                        <br></br>
                        <p className="parrafos"><b className="orange-text">Alcanzamos las exigencias educativas</b> y formativas del mundo globalizado, a partir de programas de educación media superior, superior y posgrado.
                        <br /> <br />Propiciamos ambientes de aprendizaje acordes a las necesidades e intereses de los alumnos para el <b class="orange-text">desarrollo de la creatividad, la investigación y la solución de problemas.</b>
                        <br></br><br /> De esta manera, impulsamos los procesos de enseñanza y aprendizaje orientándolos a la formación de líderes competentes, innovadores, emprendedores y éticos.
                        <br></br> <br />
                        </p>
                        <Image alt="excelente servicio ctm" className="circle legado-img" width="90%" src={FotoObjetivos} rounded/>
                    </Col>
                </Row>
            </div>
        )
    }
}
