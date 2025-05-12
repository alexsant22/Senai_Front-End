export default class ContadorPalavras {
  #texto;

  contarPalavras(texto) {
    this.#texto = texto;

    if (this.#texto.trim() === '') {
      return 0;
    }

    // Remove espaços extras
    let textoSemEspacoNoComecoeFim = this.#texto.trim();
    let palavras = [];
    let palavraAtual = '';
    
    // Substitui múltiplos espaços consecutivos por
    // um espaço único usando uma abordagem de loop
    for (let caractere of textoSemEspacoNoComecoeFim) {
      if (caractere === ' ') {
        if (palavraAtual !== '') {
          palavras.push(palavraAtual);
          palavraAtual = '';
        }
      } else {
        palavraAtual += caractere;
      }
    }

    // Adiciona a última palavra se existir
    if (palavraAtual !== '') {
      palavras.push(palavraAtual);
    }

    return palavras.length;
  }
}
