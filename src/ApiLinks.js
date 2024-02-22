// ApiLinks.js

const express = require('express');
const bodyParser = require('body-parser'); // Adicione esta linha para analisar o corpo da solicitação
const ParticipanteDAO = require('./ParticipanteDAO');

class ApiLinks {
  constructor() {
    this.app = express();
    this.participanteDAO = new ParticipanteDAO();

    // Adicione o middleware bodyParser para analisar o corpo da solicitação
    this.app.use(bodyParser.json());

    // Defina a rota para adicionar participante
    this.app.post('/adicionarParticipante', (req, res) => {
      const participante = req.body; // Supondo que os dados do participante estejam no corpo da requisição
      this.participanteDAO.adicionarParticipantes(participante); // Corrija para adicionar um único participante
      res.send('Participante adicionado com sucesso!');
    });

    // Inicie o servidor na porta 3001
    this.app.listen(3001, () => {
      console.log('Servidor está ouvindo na porta 3001');
    });
  }
}

export default ApiLinks;
