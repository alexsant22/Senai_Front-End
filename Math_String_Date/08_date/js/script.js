import CalculadoraDeIdade from './CalculadoraDeIdade.js';

function configurar() {
  let botaoCalcular = document.getElementById('calcularIdadeBtn');
  let inputDataNascimento = document.getElementById('dataNascimento');

  //prettier-ignore
  if ((botaoCalcular instanceof HTMLButtonElement) && (inputDataNascimento instanceof HTMLInputElement)) {
    botaoCalcular.addEventListener('click', () => {
      let idade = calcularIdade(inputDataNascimento.value);
      exibirResultado(idade);
    });
  }
}

function calcularIdade(dataNascimento) {
  let calculadoraDeIdade = new CalculadoraDeIdade(dataNascimento);
  let idade = calculadoraDeIdade.calcularIdade();
  return idade;
}

function exibirResultado(idade) {
  let saida = document.getElementById('resultado');

  if (saida instanceof HTMLParagraphElement) {
    saida.textContent = `Você tem ${idade} anos.`;
  }
}

document.addEventListener('DOMContentLoaded', configurar);
