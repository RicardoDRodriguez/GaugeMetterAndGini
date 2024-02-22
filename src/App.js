import React from "react";
import LiveGaugeChart from './LiveGaugeChart';
import AvatarProgress from './AvatarProgress'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <Container>
      <style>
        {`
          body {
            max-width: 600px; /* Defina o tamanho máximo desejado */
            margin: 0 auto; /* Centraliza a página no centro */
          }
        `}
      </style>
      <Row className="justify-content-md-center">
        <Col md={12} className="text-center">
          <h3>Indicador Dialógico</h3>
        </Col>
      </Row>

      {/* Linha para LiveGaugeChart */}
      <Row className="justify-content-md-center">
        <Col md={6} className="text-center">
          <LiveGaugeChart />
        </Col>
      </Row>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>

      {/* Linha para o título de 'Participações Individuais' */}
      <Row className="justify-content-md-center">
        <Col md={12} className="text-center">
          <h3>Participações Individuais</h3>
        </Col>
      </Row>

      {/* Linha para AvatarProgress */}
      <Row className="justify-content-md-center">
        <Col md={6} className="text-center">
          <AvatarProgress />
        </Col>
      </Row>
    </Container>

  );
}

export default App;