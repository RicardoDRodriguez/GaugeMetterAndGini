const mongoose = require('mongoose');

// Definindo o esquema do Participante
const participanteSchema = new mongoose.Schema({
  sala: String,
  id: Number,
  sequencia: Number,
  nome: String,
  avatar: String,
  entradaNaSala: Number,
  tempoDeFala: Number,
  tempoDeFalaAcumulado: Number,
  populacaoAcumulada: Number,
  percentualAcumuloFala: Number,
  fatorDeLorenz: Number,
});

// Criando o modelo Participante
const ParticipanteModel = mongoose.model('Participante', participanteSchema);

// Criando a classe DAO para interagir com o MongoDB
class ParticipanteDAO {
  // Método para adicionar um participante
  static async adicionarParticipante(participante) {
    try {
      const novoParticipante = new ParticipanteModel(participante);
      await novoParticipante.save();
      console.log('Participante adicionado com sucesso.');
    } catch (error) {
      console.error('Erro ao adicionar participante:', error);
    }
  }

  // Outros métodos CRUD podem ser adicionados conforme necessário
}

module.exports = ParticipanteDAO;
