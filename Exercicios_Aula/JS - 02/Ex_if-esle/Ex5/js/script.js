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