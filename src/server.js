// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const DataBase = require('./DataBase');

const app = express();
const port = 3000;

app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.post('/api/calcularGini', async (req, res) => {
  try {
    const giniIndex = await DataBase.calcularGini();
    res.status(200).json({ giniIndex });
  } catch (error) {
    console.error('Erro ao calcular o Gini:', error);
    res.status(500).json({ error: 'Erro ao calcular o Gini' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
