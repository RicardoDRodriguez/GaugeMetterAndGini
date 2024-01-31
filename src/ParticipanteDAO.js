const mongoose = require('mongoose');
console.log('***** Instância de Mongoose criada: *****', mongoose);
const uri = 'mongodb://admin:password@localhost:27017/JistiDatabase'

(async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexão ao MongoDB estabelecida com sucesso.');

    // Restante do código que depende da conexão ao banco de dados...

  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
})();

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
console.log('***** ParticipanteSchema criado *****', mongoose);

// Criando o modelo Participante
const ParticipanteModel = mongoose.model('participante', participanteSchema);
console.log('***** ParticipanteModel criado *****', mongoose);

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
      const novoParticipante = new ParticipanteModel(participante);
      novoParticipante.save();
      console.log('Participante adicionado com sucesso.');
    } catch (error) {
      console.error('Erro ao adicionar participante:', error);
    }
  }

  /*
   Insere os dados do participante no ParticipanteDAO
*/
  async insereParticipantesNoBancoDeDados(participantes) {
    // Conectando ao MongoDB com usuário e senha
    console.log('Conexão ao MongoDB estabelecida com sucesso.');
    //Uso do DAO
    participantes.forEach((participante) => {
      this.adicionarParticipante(participante);
    });
    // Outros métodos CRUD podem ser adicionados conforme necessário
  }
}

module.exports = ParticipanteDAO

