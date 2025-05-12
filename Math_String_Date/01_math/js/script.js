function inicializar() {
  let botaoCalcular = document.getElementById('calcular');
  let inputNumeros = document.getElementById('numeros');

  //prettier-ignore
  if ((botaoCalcular instanceof HTMLButtonElement) && (inputNumeros instanceof HTMLInputElement)) {
    botaoCalcular.addEventListener('click', () =>{
      let extremos = calcularMaiorMenor(inputNumeros.value);
      exibirResultado(extremos);
      inputNumeros.value = '';
    });
  }
}

function calcularMaiorMenor(seqNumerosStr) {
    let numeros = seqNumerosStr.split(',');
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);

    return {maior,menor};
}


// Função para exibir o resultado
function exibirResultado(extremos) {
  let resultado = document.getElementById('resultado');
  
  if (resultado instanceof HTMLParagraphElement) {
    resultado.textContent = `O maior número é ${extremos.maior} e o menor número é ${extremos.menor}.`;
  }
}


document.addEventListener('DOMContentLoaded', inicializar);

