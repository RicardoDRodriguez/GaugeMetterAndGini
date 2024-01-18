//import { useState } from 'react';
//import ReactDOM from 'react-dom';
//import math from 'mathjs';
import Participante from "./Participante";


class DataBase {

  static participantes = [
    //sala,id, sequencia, nome, avatar, entradaNaSala, tempoDeFala
    new Participante("Sem Interatividade",1, 1, "Pimentel", "avatar", 10, 4928),
    new Participante("Sem Interatividade",2, 1, "Amanda", "avatar", 10, 278),
    new Participante("Sem Interatividade",3, 1, "Sabrina", "avatar", 10, 267),
    new Participante("Sem Interatividade",4, 1, "Isa", "avatar", 10, 252),
    new Participante("Sem Interatividade",5, 1, "Patricia", "avatar", 10, 160),
    new Participante("Sem Interatividade",6, 1, "ElianeG", "avatar", 10, 88),
    new Participante("Sem Interatividade",7, 1, "Ana", "avatar", 10, 42),
    new Participante("Sem Interatividade",8, 1, "Ricardo", "avatar", 10, 21),
    new Participante("Sem Interatividade",9, 1, "Mariana", "avatar", 10, 12),
    new Participante("Sem Interatividade",10, 1, "Paulo", "avatar", 10, 6),
    new Participante("Sem Interatividade",11, 1, "Alice", "avatar", 10, 0),
    new Participante("Sem Interatividade",12, 1, "Andreia", "avatar", 10, 0),
    new Participante("Sem Interatividade",13, 1, "ElianeR", "avatar", 10, 0),
    new Participante("Sem Interatividade",14, 1, "Felipe", "avatar", 10, 0),
    new Participante("Sem Interatividade",15, 1, "Isis", "avatar", 10, 0),
    new Participante("Sem Interatividade",16, 1, "Jones", "avatar", 10, 0),
    new Participante("Sem Interatividade",17, 1, "Monica", "avatar", 10, 0),
    new Participante("Sem Interatividade",18, 1, "Monique", "avatar", 10, 0),
    new Participante("Sem Interatividade",19, 1, "Rodrigo", "avatar", 10, 0),
    new Participante("Sem Interatividade",20, 1, "Silvia", "avatar", 10, 0)
  ]
  

  constructor() {
      console.clear();
  }

  static setParticipantes (arrayParticipantes, participante) {
    console.log("Entrei em setParticipante")
    if (isNaN(participante)){
      console.log("participanten estah  vazio") 
      this.participantes.length = 0; // Limpa o array existente
      Array.prototype.push.apply(DataBase.participantes, arrayParticipantes);
    } 
    else {
      console.log("Participante encontrado e inserido no vetor participantes")
      DataBase.participantes.push(participante);
    }
    return DataBase.participantes;    
  }

  
  adicionarParticipante(participante){
    DataBase.setParticipantes(DataBase.participantes, participante);
    return this.participantes;
  };

  static ExcluirParticipante(id){
    const novosParticipantes = DataBase.participantes.filter((participante) => participante.id !== id);
    DataBase.setParticipantes(novosParticipantes);
  };

  static AtualizarParticipante(id, novoNome){
    const novosParticipantes = DataBase.participantes.map((participante) =>
      participante.id === id ? { ...participante, nome: novoNome } : participante
    );
    DataBase.setParticipantes(novosParticipantes);
  };

  static percorrerParticipantes(){
      console.log("Percorrendo todos os participantes:");
      DataBase.participantes.forEach((participante) => {
         console.log(participante);
      });
  };

  static calcularGini() {
    
    const math = require('mathjs');
    
    console.log("Colecao de participantes: ", DataBase.participantes);
    const participantesOrdenados = DataBase.participantes.slice().sort((a, b) => b.tempoDeFala - a.tempoDeFala);
    
    
    
    let fatorPercentual = 0
    let acumulaPercentual = 0
    let tempoDeFalaAcumulado = 0

    if (participantesOrdenados.length > 0) {
       fatorPercentual = 100 / participantesOrdenados.length
    }

 /*
      Calcula a soma acumulativa dos tempos de fala dos participantes
    */
      const ocupantesDaSala= DataBase.participantes.length
      const somaAcumulativa = participantesOrdenados.reduce((soma, participante) => {
        soma += participante.tempoDeFala;
        return soma;
      }, 0);
      console.log("Soma dos tempos:", somaAcumulativa)
      console.log("Ocupantes da Sala:", ocupantesDaSala) 
      

    const aTempoFala = []
    const aFatorPercentual = []
    const participantesOrdenadosCompleto = []
    var populacaoAcumuladaAnterior = 0
    var percentualAcumuloFalaAnterior = 0
    var privez = true
    participantesOrdenados.forEach((participante) => {
      // Carrega vetor de tempo de fala
      aTempoFala.push(participante.tempoDeFala)

      // Carrega Vetor de fator percentual
      acumulaPercentual += fatorPercentual 
      aFatorPercentual.push(acumulaPercentual)
    
      // Calcula tempo de Fala Acumulado
      tempoDeFalaAcumulado += participante.tempoDeFala

      // Atualiza percentual acumulado 
      participante.populacaoAcumulada = acumulaPercentual
      
      // Atualiza tempo de fala acumulado
      participante.tempoDeFalaAcumulado = tempoDeFalaAcumulado
      participante.percentualAcumuloFala = (tempoDeFalaAcumulado / somaAcumulativa) * 100
      
      // Calcula o fator de Lorens
    
      if (! privez){
        /*
          Os valores apresentados são percentuais, por isso a divisão por 100
        */
        var fatorDeLorenz = (((populacaoAcumuladaAnterior/100+ acumulaPercentual/100) *
                         (participante.percentualAcumuloFala/100-percentualAcumuloFalaAnterior/100)) * 0.5);
         participante.fatorDeLorenz = fatorDeLorenz;

        /* console.log ("População acumulada anterior:", populacaoAcumuladaAnterior)
         console.log ("População acumulada:", acumulaPercentual)
         console.log ("percentual acumula fala:", participante.percentualAcumuloFala)
         console.log ("Percentual acumula anterior", percentualAcumuloFalaAnterior)
         console.log ("Fator de Lorenz", fatorDeLorenz)*/
         
        }
      // Guarda vetor em participantesOrdenadosCompleto
      participantesOrdenadosCompleto.push(participante);
      
      populacaoAcumuladaAnterior = participante.populacaoAcumulada
      percentualAcumuloFalaAnterior = participante.percentualAcumuloFala

      privez = false
      // Calcula a curva de Lorens


    });
    console.log("Tempo de fala ordenado:", aTempoFala)
    console.log("Participantes Ordenados Com populacaoAcumulada", participantesOrdenadosCompleto)

    const variance = math.variance(aTempoFala);
    const stdDeviation = math.std(aTempoFala);

    console.log('Variância:', variance);
    console.log('Desvio Padrão:', stdDeviation);
    
   
    /*
      Calcula a media dos tempos de fala dos participantes
    */

    const mediaPartic = this.calcularMediaTempoDeFala();
    console.log("Media dos Participantes",mediaPartic)

    /*
       Calcula o coeficiente de variação dos tempos da sala
    */
    const coeficienteDeVariacao = (mediaPartic,stdDeviation)=>{
        if (mediaPartic > 0) {
            return (stdDeviation / mediaPartic)
        } else {
            return(0) 
        }
 
    }

    
    const coefVariacao = coeficienteDeVariacao(mediaPartic, stdDeviation);
    console.log("Coeficiente de Variacao:",coefVariacao)



    
    // Calcula a soma acumulaomativa das frequências relativas acumuladas
    let somaFrequenciasRelativasAcumuladas = 0;
    const giniValues = participantesOrdenados.map((participante, index) => {
      somaFrequenciasRelativasAcumuladas += (participante.tempoDeFala / somaAcumulativa);
      return (index + 1) / participantesOrdenados.length - somaFrequenciasRelativasAcumuladas;
    });

    // Calcula o índice de Gini
    const giniIndex = 1 - 2 * giniValues.reduce((soma, valor) => soma + valor, 0);

    console.log('Índice de Gini:', giniIndex);
    return giniIndex;
  };

  static calcularMediaTempoDeFala(){
    if (DataBase.participantes.length === 0) {
      console.log("Não encontrei participantes para calcular a média")
      return 0;
    }

    const totalTempoDeFalaEmMinutos = DataBase.participantes.reduce(
      (total, participante) => total + parseInt(participante.tempoDeFala),
      0
    );

    return totalTempoDeFalaEmMinutos / this.participantes.length;
 
  };

};

export default DataBase;