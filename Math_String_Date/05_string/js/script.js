import ContadorPalavras from './ContadorPalavras.js';

function configurar() {
  let botaoContar = document.getElementById('contarPalavrasBtn');
  let botaoLimpar = document.getElementById('limparPalavrasBtn');
  let texto = document.getElementById('textoEntrada');

  //prettier-ignore
  if ((botaoContar instanceof HTMLButtonElement) && (botaoLimpar instanceof HTMLButtonElement)
    && (texto instanceof HTMLTextAreaElement)){
     botaoContar.addEventListener('click', () => {
      let resultado = contarPalavras(texto.value);
      exibirConteudo(resultado);
     });
     botaoLimpar.addEventListener('click', () =>{
      texto.value = '';
     })
  }
}

function contarPalavras(texto) {
  let contador = new ContadorPalavras();
  let resultado = contador.contarPalavras(texto);
  return resultado;
}

function exibirConteudo(resultado) {
  let saida = document.getElementById('resultado');

  if (saida instanceof HTMLParagraphElement) {
    saida.textContent = `Número de palavras: ${resultado}`;
  }
}

document.addEventListener('DOMContentLoaded', configurar);
