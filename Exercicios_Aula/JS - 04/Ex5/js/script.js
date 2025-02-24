// Definindo array com as vogais
const vogais = ['a', 'e', 'i', 'o', 'u'];

// Saida
let saida = document.getElementById('resultado');

// Função de contar vogais
function contar(palavra) {
  // Entrada
  let entradaPalavra = document.getElementById('palavra');
  // Verificação de entrada
  if (entradaPalavra instanceof HTMLInputElement) {
    let palavra = entradaPalavra.value; // Definindo entrada

    // Contador
    let contador = 0;

    // Loop para contar
    for (let letra of palavra.toLowerCase()) {
      if (vogais.includes(letra)) {
        contador++;
      }
    }
    // retornando resultado
    saida.textContent = `Número de vogais: ${contador}`;
  }
}
