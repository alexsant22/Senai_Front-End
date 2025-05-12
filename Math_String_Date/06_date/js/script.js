function configurar() {
  let botaoCalcularDia = document.getElementById('calcularDiaBtn');
  let campoData = document.getElementById('data');
  //prettier-ignore
  if ((botaoCalcularDia instanceof HTMLButtonElement) && (campoData instanceof HTMLInputElement)) {
    botaoCalcularDia.addEventListener('click', () =>{
      // Valor em formato ISO (YYYY-MM-DD)
      let diaSemana = obterDiaDaSemana(campoData.value); 
      exibirConteudo(diaSemana);
    });
  }
}

function obterDiaDaSemana(data) {
  if (!data) {
    return 'Por favor, selecione uma data.';
  }

  //prettier-ignore
  let diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  // criar um vetor com partes da data escolhida
  let partes = data.split('-'); // Divide o formato "YYYY-MM-DD"
  
  let ano = parseInt(partes[0]);
  let mes = parseInt(partes[1]) - 1; // Meses em JavaScript seguem padrão de 0 até 11
  let dia = parseInt(partes[2]);
  //padrão  new Date(ano, mes, dia) - referência no slide 35 do material
  let dataEscolhida = new Date(ano, mes, dia); 
  let diaPorExtenso = diasDaSemana[dataEscolhida.getDay()];
  return diaPorExtenso
}

function exibirConteudo(resultado) {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLParagraphElement) {
    saida.textContent = resultado;
  }
}

document.addEventListener('DOMContentLoaded', configurar);
