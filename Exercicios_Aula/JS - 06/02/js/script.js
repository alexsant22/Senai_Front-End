let arrayNumero = [];

function exibirNumero () {
    let saida = document.getElementById('resultado');
    if (saida instanceof HTMLParagraphElement) {
        // Ordenando o array de numeros
        arrayNumero.sort((a, b) => a - b);

        // Exibindo
        saida.textContent = arrayNumero.join(', ');
    }
}

function cadastrarNumero (numero) {
    // Verifica se é nulo e se não é um número
    if (numero && !isNaN(numero)) {
        arrayNumero.push(Number(numero)); // Adiciona no tipo numero
        exibirNumero();
    } else {
        alert("Por favor, insira um valor válido!");
    }
}

const configurarNumeros = () => {
    let entradaNumero = document.getElementById('entradaNumero');
    let cadastrarNumeroBtn = document.getElementById('cadastrarNumeroBtn');

    //prettier-ignore
    if ((cadastrarNumeroBtn instanceof HTMLButtonElement) &&
        (entradaNumero instanceof HTMLInputElement)) {
            cadastrarNumeroBtn.addEventListener('click', () => {
                cadastrarNumero(entradaNumero.value);
                entradaNumero.value = '';
            })
        }
}

document.addEventListener('DOMContentLoaded', configurarNumeros);