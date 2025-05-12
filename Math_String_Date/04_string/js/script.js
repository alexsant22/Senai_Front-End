function configurar() {
    let botaoTransformarString = document.getElementById('transformarStringBtn');
    let frase = document.getElementById('frase');

    //prettier-ignore
    if((botaoTransformarString instanceof HTMLButtonElement) && (frase instanceof HTMLInputElement)) {
      botaoTransformarString.addEventListener('click',() =>{
        let resultado = transformarPrimeiraLetraMaiuscula(frase.value);
        exibirConteudo(resultado);
      });
    }
  }
  
  function transformarPrimeiraLetraMaiuscula(frase) {
    // Separar a frase em palavras
    let palavras = frase.split(' ');
  
    //map é usado em arrays para criar um novo array transformando cada elemento 
    // do array original de acordo com a função fornecida como argumento.
    // Transformar cada palavra para que a primeira letra seja maiúscula
    let palavrasTransformadas = palavras.map(palavra => {
      // Verifica se a palavra não está vazia
      if (palavra.length > 0) {
        let primeiraLetraMaiuscula = palavra.charAt(0).toUpperCase();
        //separa o restante da palavra após a primeira letra
        let restoDaPalavra = palavra.slice(1).toLowerCase();
        return primeiraLetraMaiuscula + restoDaPalavra;
      }
      return palavra;
    });
  
    return palavrasTransformadas.join(' ');
  }
  
  function exibirConteudo(resultado) {
    let saida = document.getElementById('resultado');
  
    if (saida instanceof HTMLParagraphElement) {
      saida.textContent = resultado;
    }
  }
  
document.addEventListener('DOMContentLoaded', configurar);
  

