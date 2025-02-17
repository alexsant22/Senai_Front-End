// Armazena notas
let notas = [];

// Saída
let resultado = document.getElementById('resultado');

// Função de adicionar notas
function adicionarNota() {
    let nota = parseFloat(document.getElementById('nota').value); // Lê o valor dentro da função

    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
        notas.push(nota);
        resultado.textContent = 'Nota adicionada!';
    } else {
        resultado.textContent = "Nota inválida! Encerrando entrada de notas.";
        document.getElementById("nota").disabled = true;
    }
    document.getElementById("nota").value = ''; // Limpa o input
}

// Função para calcular média
function calcularMedia() {
    if (notas.length === 0) {
        resultado.textContent = "Nenhuma nota válida foi inserida.";
        return;
    }

    // Somando, dividindo e exibindo
    let soma = notas.reduce((acc, val) => acc + val, 0);
    let media = soma / notas.length;
    resultado.textContent = "Média das notas: " + media.toFixed(2);
}
