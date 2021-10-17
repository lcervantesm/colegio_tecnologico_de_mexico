import React, { Component } from 'react';
/*import Stack from 'react-bootstrap/Stack';*/
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
export default class OfertaEducativa extends Component {
    render() {
        return (
            <div>
                <h2 className="titulo">Oferta Educativa</h2><br></br><br>
                </br>
                <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link className="link-oferta" eventKey="first">Bachilleratos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link className="link-oferta" eventKey="second">Licenciaturas</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link className="link-oferta" eventKey="third">Maestrías</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <div className="container-fluid">
                                <div className="container p-5">
                                    <div className="row">

                                        <div className="col-lg-12 col-md-12 mb-12">
                                            <div className="card h-100 shadow-lg">
                                                <div className="card-body">
                                                    <div className="text-center p-3">
                                                        <h6 className="card-title">TERMINA TU</h6>
                                                    </div>
                                                    <h2 className="card-text">Bachilleratos</h2>

                                                </div>
                                                <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><a href="/bachillerato-sep"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                                </svg> Plan de estudios SEP</a></li>
                                                <li className="list-group-item"><a href="/bachillerato-ipn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                                </svg> Plan de estudios IPN</a></li>
                                                <li className="list-group-item"><a href="/bachillerato-unam"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                                </svg> Próximamente UNAM </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <div className="container-fluid">
                                <div className="container p-5">
                                    <div className="row">

                                        <div className="col-lg-12 col-md-12 mb-12">
                                            <div className="card h-100 shadow-lg">
                                                <div className="card-body">
                                                    <div className="text-center p-3">
                                                        <h6 className="card-title">ESCOGE UNA</h6>
                                                    </div>
                                                    <h2 className="card-text">Licenciatura</h2>

                                                </div>
                                                <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><a href="/lic-ciencias-informaticas-ipn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                                </svg> Ciencias informáticas IPN</a></li>
                                                <li className="list-group-item"><a href="/lic-contaduria-ipn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                                </svg> Contaduría Pública IPN</a></li>
                                                <li className="list-group-item"><a href="/lic-admin-industrial-ipn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                                </svg> Administración Industrial IPN</a></li>
                                                <li className="list-group-item"><a href="/lic-informatica-sep"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                                </svg> Informática SEP</a></li>
                                                <li className="list-group-item"><a href="/lic-contaduria-sep"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                                </svg> Contadurá Pública SEP</a></li>
                                                <li className="list-group-item"><a href="/lic-pedagogia-sep"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                                </svg> Pedagogía SEP</a></li>
                                                <li className="list-group-item"><a href="/lic-mercadotecnia-sep"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                                </svg> Mercadotecnia SEP</a></li>
                                                <li className="list-group-item"><a href="/lic-derecho-sep"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                                </svg> Derecho SEP</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <div className="container-fluid">
                                <div className="container p-5">
                                    <div className="row">

                                        <div className="col-lg-12 col-md-12 mb-12">
                                            <div className="card h-100 shadow-lg">
                                                <div className="card-body">
                                                    <div className="text-center p-3">
                                                        <h6 className="card-title">ESCOGE UNA</h6>
                                                    </div>
                                                    <h2 className="card-text">Maestría</h2>

                                                </div>
                                                <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><a href="/maestria-admin-hosp"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                                </svg> Administración de Hospitales</a></li>
                                                <li className="list-group-item"><a href="/maestria-educacion"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                                </svg> Ciencias de la Educación</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container><br></br> <br></br></Container>
            </div>
        )
    }
}
