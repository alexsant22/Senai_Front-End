function obterNumeros() {
  // Pegando valores e fazendo parse
  let entradaNum1 = document.getElementById('num1');
  let entradaNum2 = document.getElementById('num2');

  if (
    entradaNum1 instanceof HTMLInputElement &&
    entradaNum2 instanceof HTMLInputElement
  ) {
    let num1 = +entradaNum1.value;
    let num2 = +entradaNum2.value;

    return { num1, num2 };
  }
  return { num1: 0, num2: 0 }; // Retorna valores padrão se houver erro
}

function exibirResultado(resultado) {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLElement) {
    saida.textContent = `Resultado: ${resultado}`;
  }
}

const somar = function (a, b) {
  return a + b;
};

const subtrair = function (a, b) {
  return a - b;
};

const multiplicar = function (a, b) {
  return a * b;
};

const dividir = function (a, b) {
  if (b === 0) {
    return 'Erro: Divisão por zero!';
  }
  return a / b;
};

function calcular(operacao) {
  let numeros = obterNumeros();
  let num1 = numeros.num1;
  let num2 = numeros.num2;

  let resultado;

  switch (operacao) {
    case 'somar':
      resultado = somar(num1, num2);
      break;
    case 'subtrair':
      resultado = subtrair(num1, num2);
      break;
    case 'multiplicar':
      resultado = multiplicar(num1, num2);
      break;
    case 'dividir':
      resultado = dividir(num1, num2);
      break;
    default:
      resultado = 'Operação inválida!';
  }

  exibirResultado(resultado);
}
