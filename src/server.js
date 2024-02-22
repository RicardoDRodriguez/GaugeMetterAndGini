// server.js

const express = require('express');
const bodyParser = require('body-parser');
const ParticipanteDAO = require('./ParticipanteDAO');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rota para receber dados via POST
app.post('/adicionarParticipante', async (req, res) => {
  try {
    const participanteDAO = new ParticipanteDAO();
    await participanteDAO.adicionarParticipante(req.body);
    res.status(200).send('Participante adicionado com sucesso.');
  } catch (error) {
    console.error('Erro ao adicionar participante:', error);
    res.status(500).send('Erro ao adicionar participante.');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

//export default server;