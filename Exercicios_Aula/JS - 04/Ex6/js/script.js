// Definindo saida
let saida = document.getElementById('resultado');

// Funções para calculo
const quadradoRetangulo = (a, b) => a * b;

const trapezio = (a, b, h) => ((a + b) * h) / 2;

const triangulo = (b, h) => (b * h) / 2;

const circulo = (r) => Math.PI * r ** 2;

function areaFiguras() {
  // Entrda
  let figuras = document.getElementById('figuras');

  // Verificação de entrada
  if (figuras instanceof HTMLSelectElement) {
    let valor = figuras.value; // Definindo entrada

    // Switch de figuras
    switch (valor) {
      case '1': // Quadrado
        let lado1 = prompt('Digite o valor do lado do Quadrado:');
        saida.textContent = `Área do quadrado é: ${quadradoRetangulo(
          lado1,
          lado1
        )}`;
        break;

      case '2': // Retangulo
        let l1 = prompt('Digite o valor do lado do Retângulo:');
        let l2 = prompt('Digite o valor do outro lado Retângulo:');
        saida.textContent = `Área do retângulo é: ${quadradoRetangulo(l1, l2)}`;
        break;

      case '3':
        let baseM = prompt('Digite o valor da base maior do Trapézio:');
        let baseMen = prompt('Digite o valor da base menor do Trapézio:');
        let altura = prompt('Digite o valor da altura do Trapézio:');
        saida.textContent = `Área do trapézio é: ${trapezio(
          baseM,
          baseMen,
          altura
        )}`;
        break;

      case '4':
        let baseT = prompt('Digite o valor da base do Triângulo:');
        let alturaT = prompt('Digite o valor da altura do Triângulo:');
        saida.textContent = `Área do triângulo é: ${triangulo(baseT, alturaT)}`;

      case '5':
        let raio = prompt('digite o valor do raio do Círculo:');
        saida.textContent = `Área do círculo é: ${circulo(raio)}`;
        break;

      default:
        saida.textContent = 'Entrada inválida!';
        break;
    }
  }
}

function main() {
  let botao = document.getElementById('botao');
  if (botao instanceof HTMLElement) {
    botao.addEventListener('click', areaFiguras);
  }
}

document.addEventListener('DOMContentLoaded', main);
