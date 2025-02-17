// Função para verificar se é primo
function ehPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

// Função para procurar os Primos em um intervalos de números
function findPrimes(start, end) {
  let primos = [];
  for (let i = start; i <= end; i++) {
    if (ehPrimo(i)) {
      primos.push(i);
    }
  }

  return primos;
}

// Função para ver os primos
function showPrimes() {
  // Pegando infos entradas
  const start = parseInt(document.getElementById("start").value);
  const end = parseInt(document.getElementById("end").value);

  // Definindo saida
  const result = document.getElementById("result");

  // Verificação
  if (!isNaN(start) && !isNaN(end)) {
    const primos = findPrimes(Math.min(start, end), Math.max(start, end));
    result.textContent = "Números primos no intervalo: " + primos.join(", ");
  } else {
    result.textContent = "Por favor, insira números válidos.";
  }
}

// Função main
function main() {
  let acharPrimos = document.getElementById("acharPrimos");
  if (acharPrimos) {
    acharPrimos.addEventListener("click", showPrimes);
  }
}

// DOM
document.addEventListener("DOMContentLoaded", main);
