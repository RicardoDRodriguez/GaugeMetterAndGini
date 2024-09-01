  import React, {useState,useEffect} from "react";
  import LiveGaugeChart from './LiveGaugeChart';
  import AvatarProgress from './AvatarProgress'
  import { Container, Row, Col } from 'react-bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';


  function App() {

    const [isVisible, setIsVisible] = useState(true);
    
    /*
    
    useEffect(() => {
      const interval = setInterval(() => {
        window.location.reload();
      }, 7000); // 5000 milissegundos = 5 segundos

      return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    }, []);
    */

    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'h') {
          setIsVisible(false);
        } else if (event.key === 's') {
        //  setIsVisible(true);
             window.location.reload();
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);

    return (
      <div>
      {isVisible && (
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

         <Row className="justify-content-md-center">
          <Col md={6} className="text-center">
            <LiveGaugeChart />
          </Col>
        </Row>
        
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>


        <Row className="justify-content-md-center">
          <Col md={6} className="text-center">
            <AvatarProgress />
          </Col>
        </Row>
    
      </Container> )}
     </div>
    );
  }

  export default App;