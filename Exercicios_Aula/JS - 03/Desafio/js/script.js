function matriz() {
  // Recebendo entrada
  let numero = parseInt(document.getElementById('numero').value);

  // Definindo saída
  let resultado = document.getElementById('resultado');

  // Verifica se o número é válido
  if (isNaN(numero) || numero <= 0) {
    resultado.innerHTML = 'Por favor, insira um número válido maior que zero.';
    return;
  }

  let matrizHTML = '';

  for (let i = 0; i < numero; i++) {
    for (let y = 0; y < numero; y++) {
      matrizHTML += (i + y) % 2 === 0 ? '0 ' : '1 ';
    }
    matrizHTML += '<br>'; // Quebra de linha para exibir corretamente
  }

  if (resultado) {
    resultado.innerHTML = matrizHTML; // Exibe a matriz formatada no HTML
  } else {
    console.error("Elemento com id 'resultado' não encontrado.");
  }
}

// Função main
function main() {
  let exibirResultado = document.getElementById('exibirResultado');
  if (exibirResultado) {
    exibirResultado.addEventListener('click', matriz);
  }
}

// Garante que o script só execute quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', main);
