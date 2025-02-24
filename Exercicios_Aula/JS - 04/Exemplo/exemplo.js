// Função anonima
const saida = function (a, b) {
  return a + b;
};

console.log(saida(2, 2)); // Resultado: 4

// Função com callback
function exibirResultado(resultado) {
  console.log(resultado);
}

function somar(a, b, exibirResultado) {
  let res = a + b;
  exibirResultado(res);
}

somar(1, 2, exibirResultado);
