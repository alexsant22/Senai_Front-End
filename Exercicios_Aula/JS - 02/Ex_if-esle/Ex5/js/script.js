function avaliarNota() {
    // Pegando info
    let nota = document.getElementById('notaInput').value;

    // Verificando entrada
    console.log(nota);

    // Fazendo parse
    let nt = parseFloat(nota);

    // Verificacao da nota
    if (nt >= 5) {
        document.getElementById('resultado').innerText = 'Aprovado.'
    } else if (nt < 3) {
        document.getElementById('resultado').innerText = 'Reprovado.'
    } else {
        document.getElementById('resultado').innerText = 'Recuperação.'
    }
}

// Função para chamar
function main() {
    let verificar = document.getElementById('verificar');
    if (verificar) {
        verificar.addEventListener('click', avaliarNota);
    }
}

document.addEventListener('DOMContentLoaded', main);