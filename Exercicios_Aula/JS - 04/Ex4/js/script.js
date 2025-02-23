// Função callback para inverter o numero
function inversorNumeros(num, callback) {
    const numeroInvertido = parseFloat(
        num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num);

    callback(numeroInvertido);
}

// Função q o botao chama
function exibirInverso() {
    // Entrada
    let inputNumero = document.getElementById('numero');
    let numero = +inputNumero.value;

    // Saida
    let resultado = document.getElementById('resultado');

    // Validacao de entrada
    if (numero === null) {
        resultado.textContent = 'Por favor, digite um valor válido!';
        return;
    }

    inversorNumeros(numero, function (numeroInvertido) {
        resultado.textContent = `Número invertido: ${numeroInvertido}`;
    });
}
