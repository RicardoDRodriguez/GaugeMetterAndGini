class Teste {
    constructor() {
      // Verifica se o objeto process está definido ou não
      if (typeof window === 'undefined') {
        // Se for undefined, está rodando no lado cliente
        console.log('#### Teste está rodando no lado servidor ####');
      } else {
        // Se não for undefined, está rodando no lado servidor
        console.log('*** Teste está rodando no lado cliente');
      }
    }
  }
  module.exports = Teste;