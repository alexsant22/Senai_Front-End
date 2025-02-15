function parOuImpar() {
  // Pegando infos e fazendo parse
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  // Definindo saida
  let resultado = document.getElementById("resultado");

  // Verificando validação de numeros
  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, insira valores válidos.");
    return;
  }

  // Determinado maior e menor valor
  let menor = Math.min(num1, num2);
  let maior = Math.max(num1, num2);

  // Contadores
  let par = 0;
  let impar = 0;

  // Loop e verificação
  for (let i = menor; i <= maior; i++) {
    if (i % 2 === 0) {
      par++;
    } else {
      impar++;
    }
  }

  // Resultado printado
  resultado.innerText = `Pares: ${par}\nÍmpares: ${impar}`;
}

// Função main
function main() {
  let calcularParesImpares = document.getElementById("calcularParesImpares");
  if (calcularParesImpares) {
    calcularParesImpares.addEventListener("click", parOuImpar);
  }
}

// DOM
document.addEventListener("DOMContentLoaded", main);
