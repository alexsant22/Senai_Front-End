import GeradorNumeros from './GeradorNumeros.js';

function configurar() {
  let botaoGerar = document.getElementById('gerarBtn');
  if (botaoGerar instanceof HTMLButtonElement) {
    botaoGerar.addEventListener('click', () => {
      let numeros = processarGeracao();
      exibirConteudo(numeros);
    });
  }
}

function exibirConteudo(numeros) {
  let resultado = document.getElementById('resultado');
  if (resultado instanceof HTMLParagraphElement) {
    resultado.textContent = String(numeros);
  }
}

function capturarValores() {
  let entradaMin = document.getElementById('minimo');
  let entradaMax = document.getElementById('maximo');
  let entradaQtd = document.getElementById('quantidade');

  //prettier-ignore
  if((entradaMin instanceof HTMLInputElement) && (entradaMax instanceof HTMLInputElement)
       && (entradaQtd instanceof HTMLInputElement)){
        let min = entradaMin.value;
        let max = entradaMax.value;
        let quantidade = entradaQtd.value;

        return {min, max, quantidade}
    }
  return null;
}

function validarValores(min, max, quantidade) {
  //prettier-ignore
  if(isNaN(min) || isNaN(max) || isNaN(quantidade) || min >= max || quantidade <= 0){
        alert('Entrada invalida')
        return false;
    }
  return true;
}

function processarGeracao() {
  let valores = capturarValores();

  if (!valores) {
    alert('Erro ao capturar valores');
    return;
  }

  if (!validarValores(valores.min, valores.max, valores.quantidade)) {
    alert('Por favor, insira valores válidos!');
    return;
  }

  let gerar = new GeradorNumeros(Number(valores.min), Number(valores.max));
  let numerosGerados = gerar.geradorNumeros(valores.quantidade);
  return numerosGerados;
}

document.addEventListener('DOMContentLoaded', configurar);
