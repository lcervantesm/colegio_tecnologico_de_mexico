import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Legado from '../../assets/img/LegadoCTM.png';
import Image from 'react-bootstrap/Image';
import Filosofia from '../../Components/Filosofia';
import Objetivos from '../../Components/Objetivos';
import Fortalezas from '../../Components/Fortalezas';
import MensajeRector from '../../Components/MensajeRector';

export default class About extends Component {
    render() {
        return (
            <div>
                <br></br><br></br>
                <h2 className="titulo">¿Quiénes somos?</h2>
                <br></br><br></br>
                <Row>
                    <Col xs={12} md={6}>
                        <h3 className="center subtitulo">Legado del CTM
                        </h3>
                        <p className="parrafos">Sabemos que nuestros estudiantes son jóvenes con un gran potencial y que la base de su futuro, su éxito y realización personal, está sustentada en el <b className="orange-text">impulso de su liderazgo.</b> Por ello, toda la comunidad del Colegio Tecnológico de México buscamos que nuestro principal legado, como parte de su formación, sea infundir en ellos cinco principios que guíen su vida:<br></br>
                            <ol className="legado-ol parrafos">
                                <li className="list-element-ol">Reconocerse como seres humanos íntegros, solidarios, comprometidos consigo mismos y con los demás
                                </li>
                                <li className="list-element-ol">Generadores de sentido y propósito de vida, en una búsqueda constante de su trascendencia y del bien común
                                </li>
                                <li className="list-element-ol">Innovadores y creadores disruptivos, dispuestos a superar desafíos y crear oportunidades
                                </li>
                                <li className="list-element-ol">Emprendedores de ideas, sueños y proyectos
                                </li>
                                <li className="list-element-ol">Integradores de tecnología, centrados siempre en generar valor
                                </li>
                            </ol></p>
                    </Col>
                    <Col xs={12} md={6}>
                        <br></br>
                        <Image className="center legado-img" src={Legado} alt={Legado} roundedCircle/>
                    </Col>
                </Row>
                <Row>
                    <p className="parrafos"> Estos principios forman el valor primordial que el Colegio aspira a generar en beneficio de sus alumnos, los miembros de su comunidad y la sociedad, por lo que los hemos adoptado como <b>eje de nuestra filosofía</b>, constituyéndonos como una comunidad educativa sólida y dispuesta a acompañar a nuestros alumnos a lo largo de su trayectoria académica y de vida.
                    </p>
                </Row><br></br>
                <Filosofia />
                <Objetivos />
                <Fortalezas />
                <MensajeRector />
            </div>
        );
    }
}
