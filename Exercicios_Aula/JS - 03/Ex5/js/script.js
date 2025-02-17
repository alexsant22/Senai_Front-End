// Armazena notas
let notas = [];

// Saída
let resultado = document.getElementById('resultado');

// Função de adicionar notas
function adicionarNota() {
  let nota = parseFloat(document.getElementById('nota').value); // Lê o valor dentro da função

  // Enquanto o valor inserido for válido
  while (isNaN(nota) || nota < 0 || nota > 10) {
    resultado.textContent = 'Nota inválida! Encerrando entrada de notas.';
    document.getElementById('nota').disabled = true;
    return; // Se nota for inválida, termina a execução
  }

  // Se a nota for válida, adiciona à lista
  notas.push(nota);
  resultado.textContent = 'Nota adicionada!';
  document.getElementById('nota').value = ''; // Limpa o input
}

// Função para calcular média
function calcularMedia() {
  if (notas.length === 0) {
    resultado.textContent = 'Nenhuma nota válida foi inserida.';
    return;
  }

  // Usando while para somar as notas
  let soma = 0;
  let i = 0;
  while (i < notas.length) {
    soma += notas[i]; // Somando as notas
    i++; // Incrementa o índice
  }

  let media = soma / notas.length; // Calculando a média
  resultado.textContent = 'Média das notas: ' + media.toFixed(2);
}
