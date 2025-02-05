function anoBissexto() {
    // Pegando infos
    let entradaAno = document.getElementById('anoInput').value;
    console.log(entradaAno); // Conferindo valor

    // Fazendo parse
    let ano = parseFloat(entradaAno);

    // Verificação
    if (ano % 4 == 0) {
        document.getElementById('resultado').innerText = `O ano ${ano} é bissexto ^-^ !`
    } else {
        document.getElementById('resultado').innerText = `O ano ${ano} não é bissexto t-t !`
    }
}