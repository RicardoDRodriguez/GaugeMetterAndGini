class Participante {
  constructor(sala, id, sequencia, nome, avatar, entradaNaSala, tempoDeFala,tempoDePresenca) {
    this.sala = sala;
    this.id = id;
    this.sequencia = sequencia;
    this.nome = nome;
    this.avatar = avatar;
    // Elementos para o Calculo do Fator de Gini e do Igualitômetro
    // Tabela 3 do artigo
    this.entradaNaSala = entradaNaSala;
    this.tempoDeFala = tempoDeFala;
    this.fatorRiquezaAbsoluta = 0.0;      // Coluna 3 do artigo
    this.tempoPresenca = tempoDePresenca;
    this.fatorTempoPresenca = 0.0;        // Coluna 5 do artigo (Si)
    this.fatorAcumuladoPresenca = 0.0;    // Coluna 6 do artigo
    this.populacaoAcumulada = 0.0;
    this.percentualAcumuloFala = 0.0;
    this.proporcaoAcumuladaPopulacao = 0.0;
    this.fatorAcumuladoCurvaLorenz = 0.0;   

    return this
  }
}
 module.exports=Participante