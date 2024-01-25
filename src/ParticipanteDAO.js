


const mongoose = require('mongoose');
console.log('Instância de Mongoose criada:', mongoose);

const uri = 'mongodb://admin:password@localhost:27017/JistiDatabase'

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
  static adicionarParticipante(participante) {
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
  static insereParticipantesNoBancoDeDados (participantes){

    if (! mongoose.connect) {
      console.log("Mongoose Connect não encontrado")
      return
    } else {
      console.log("Mongoose console encontrado")
    }
    // Conectando ao MongoDB com usuário e senha
     mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: 'admin'
    })
    .then(() => {
      console.log('Conexão ao MongoDB estabelecida com sucesso.');
      //Uso do DAO
      participantes.forEach((participante) => {
        ParticipanteDAO.adicionarParticipante(participante);
      });
    })
    .catch((error) => {
      console.error('Erro ao conectar ao MongoDB:', error);
    })
    .finally(() => {
      // Feche a conexão aqui
      mongoose.connection.close();
    });
  }
  // Outros métodos CRUD podem ser adicionados conforme necessário
}

export default ParticipanteDAO;
