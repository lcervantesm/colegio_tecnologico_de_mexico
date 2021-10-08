import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class BannerAdmisiones extends React.Component {
    render() {
        return(
            <div className="admisiones">
                <br></br>
                <Row>
                    <Col xs={12} md={12}>
                    <div className="admisiones-title"><h3>ADMISIONES</h3><br></br><h5 className="admisiones-text">
                        Te invitamos a una de nuestras sesiones informativas para que podamos resolver todas tus dudas y puedas conocer nuestras instalaciones.
                    </h5>
                    <Button className="admisiones-button" href="/contacto" size="lg">
                        ¡Regístrate aquí!
                    </Button>
                    </div>
                    </Col>
                </Row>
                <br></br>
            </div>
        );
    }
}

export default BannerAdmisiones;