function obterNumero() {
  // Pegando Valores
  let entradaNum = document.getElementById("num");
  let entradaNum2 = document.getElementById("num2");

  // Verificando entrada e fazendo parse
  if (
    entradaNum instanceof HTMLInputElement &&
    entradaNum2 instanceof HTMLInputElement
  ) {
    let num = +entradaNum.value;
    let num2 = +entradaNum2.value;

    return { num, num2 };
  }
  return { num: 0, num2: 0 };
}

// Função para pegar resultado e fazer saida
function exibirResultado(resultado, operacao) {
  let saida = document.getElementById("resultado");
  if (saida instanceof HTMLElement) {
    // Ternário para modificar resposta de acordo com operação
    let mensagem =
      operacao === "raiz"
        ? `Resultado da raiz: ${resultado}`
        : `Resultado da exponenciação: ${resultado}`;
    saida.textContent = mensagem;
  }
}

// Funções para operações
const raiz = (a) => Math.sqrt(a); // Raiz quadrada

const exponencial = (a, b) => a ** b; // Exponenciação

// Função calcular
function calcular(operacao) {
  // Definindo e chamando variaveis
  let numeros = obterNumero();
  let num = numeros.num;
  let num2 = numeros.num2;

  let resultado;

  // Switch para escolhas
  switch (operacao) {
    case "raiz":
      resultado = raiz(num);
      break;
    case "exponencial":
      resultado = exponencial(num, num2);
      break;
    default:
      resultado = "Operação inválida!";
  }

  // Exibindo resultado
  exibirResultado(resultado, operacao);
}
