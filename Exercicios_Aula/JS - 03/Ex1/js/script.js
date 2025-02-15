function showTableNumber() {
  // Pegando infos e fazendo parse
  let number = parseInt(document.getElementById("number").value);

  // Saidas
  let title = document.getElementById("title");
  let showResult = document.getElementById("showResult");

  // Vericando valor válido
  if (!isNaN(number)) {
    title.textContent = `Tabudada do ${number}`;
    showResult.innerHTML = ""; // Limpa resultados anteriores

    // Fazendo tabuado do número inserido
    for (let cont = 1; cont <= 10; cont++) {
      let result = number * cont;
      showResult.innerHTML += `${number} x ${cont} = ${result}<br />`; // Adiciona resultados sem sobrescrever
    }
  } else {
    // Caso for inválido
    alert(`Por favor, insira um número válido.`);
  }
}

// Funcao main
function main() {
  let showTable = document.getElementById("showTable");
  if (showTable) {
    showTable.addEventListener("click", showTableNumber);
  }
}

// DOM
document.addEventListener("DOMContentLoaded", main);
