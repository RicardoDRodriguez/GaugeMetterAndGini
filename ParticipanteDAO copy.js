
const mongoose = require('mongoose');

  (async () => {
    try {
      await
        mongoose.connect( 'mongodb://localhost:27017/JistiDatabase', {
          serverSelectionTimeoutMS: 5000, // Timeout de seleção de servidor em milissegundos
          socketTimeoutMS: 45000, // Timeout de socket em milissegundos
        });
      console.log('Conexão ao MongoDB estabelecida com sucesso.');

      // Restante do código que depende da conexão ao banco de dados...

    } catch (error) {
      console.error('Erro ao conectar ao MongoDB:', error);
    }
  })();

// Definindo o esquema do Participante   
const participanteSchema = new mongoose.Schema({
  sala: { type: String, default: 'Sem Sala' },
  id: { type: Number, default: 0 },
  sequencia: { type: Number, default: 1 },
  nome: { type: String, default: 'Sem Nome' },
  avatar: { type: String, default: 'default_avatar.jpg' },
  entradaNaSala: { type: Number, default: 0 },
  tempoDeFala: { type: Number, default: 0 },
  tempoDeFalaAcumulado: { type: Number, default: 0 },
  populacaoAcumulada: { type: Number, default: 0 },
  percentualAcumuloFala: { type: Number, default: 0 },
  fatorDeLorenz: { type: Number, default: 0 },
});

// Criando o modelo Participante
const ParticipanteModel = mongoose.model('participante', participanteSchema);

// Criando a classe DAO para interagir com o MongoDB
class ParticipanteDAO {

  constructor() {
    // Verifica se o objeto window está definido ou não
    if (typeof window === 'undefined') {
      // Se for undefined, está rodando no lado servidor
      console.log('**** ParticipanteDAO Está rodando no lado servidor ****');
    } else {
      // Se não for undefined, está rodando no lado cliente
      console.log('* ParticipanteDAO Está rodando no lado cliente *');
    }

  }
  // Método para adicionar um participante
  async adicionarParticipante(participante) {
    try {
      console.log('ParticipanteDAO.adicionarParticipante -> Objeto participante:', participante);
      const novoParticipante = new ParticipanteModel(participante);
      await novoParticipante.create();
      console.log('ParticipanteDAO.adicionarParticipante -> Participante adicionado com sucesso.');
    } catch (error) {
      console.error('ParticipanteDAO.adicionarParticipante -> Erro ao adicionar participante:', error);
    }
  }

  /*
   Insere os dados do participante no ParticipanteDAO
*/
  async insereParticipantesNoBancoDeDados(participantes) {
    //Uso do DAO
    participantes.forEach((participante) => {
      console.log('#### ParticipanteDAO.insereParticipantesNoBancoDeDados->participante',participante);
      this.adicionarParticipante(participante);
    });
    // Outros métodos CRUD podem ser adicionados conforme necessário
  }
}

module.exports = ParticipanteDAO

