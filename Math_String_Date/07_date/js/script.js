function configurar() {
  let botaoCalcular = document.getElementById('calcularBtn');
  let inputDataFutura = document.getElementById('dataFutura');

  //prettier-ignore
  if ((botaoCalcular instanceof HTMLButtonElement) && (inputDataFutura instanceof HTMLInputElement)){
      botaoCalcular.addEventListener('click',() =>{
        calcularContagemRegressiva(inputDataFutura.value);
      });
    }
}

function calcularContagemRegressiva(data) {
  let dataFutura = new Date(data);
  let agora = new Date();

  if (dataFutura > agora) {
    //referência no material slide 36 e 37
    let diferencaMs = Number(dataFutura) - Number(agora);
    let resultado = calcularUnidadesDeTempo(diferencaMs);
    exibirResultado(resultado);
  } else {
    exibirResultado('Por favor, selecione uma data futura.');
  }
}

function calcularUnidadesDeTempo(milisegundos) {
  let segundosTotais = Math.floor(milisegundos / 1000);
  let dias = Math.floor(segundosTotais / (60 * 60 * 24));
  let horas = Math.floor((segundosTotais % (60 * 60 * 24)) / (60 * 60));
  // remova o comentário da linha abaixo para contabilizar mins e segs
  // let minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
  // let segundos = segundosTotais % 60;

  if (dias === 0) {
    return `Falta menos de um dia e ${horas} horas restante(s).`;
  } else {
    // remova o comentário da linha abaixo para contabilizar mins e segs
    // return `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos restantes.`;
    return `${dias} dia(s) e ${horas} horas restante(s).`;
  }
}

function exibirResultado(resultado) {
  let saida = document.getElementById('resultado');

  if (saida instanceof HTMLParagraphElement) {
    saida.textContent = resultado;
  }
}

document.addEventListener('DOMContentLoaded', configurar);
