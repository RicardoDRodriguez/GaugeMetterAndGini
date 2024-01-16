class Participante {
    constructor(sala,id, sequencia, nome, avatar, entradaNaSala, tempoDeFala) {
      this.sala = sala;
      this.id = id;
      this.sequencia = sequencia;
      this.nome = nome;
      this.avatar = avatar;
      this.entradaNaSala = entradaNaSala;
      this.tempoDeFala = tempoDeFala;
      console.log("Participante construido:", this)
      return this
    }
  }
  export default Participante