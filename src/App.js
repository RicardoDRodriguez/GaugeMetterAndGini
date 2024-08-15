import React, {useEffect} from "react";
import LiveGaugeChart from './LiveGaugeChart';
import AvatarProgress from './AvatarProgress'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  /*
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 7000); // 5000 milissegundos = 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);
  */
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
        <h3>Participômetro</h3>
          <r5>(Distribuição dos Tempos de Fala)</r5>
          <br/><br/><br/>
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