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
        <h3>Igualitômetro</h3>
          <h5><font color='A0A0A0'>(Igualdade dos Tempos de Fala)</font></h5>
          <br/><br/>
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