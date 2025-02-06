function verificarPalindromo() {
    // Pegando info
    let palavra = document.getElementById('inputPalavra').value;

    // Verificando entrada
    console.log(palavra);

    // Caso não tenha entrada
    if (!palavra) {
        alert("Nenhuma palavra foi digitada.");
        return;
    }
    
    // Conversao e verificacao
    palavra = palavra.toLowerCase().replace(/\s/g, ""); // Normaliza a palavra
    let reverso = palavra.split('').reverse().join('');
    
    if (palavra === reverso) {
        alert(`A palavra "${palavra}" é um palíndromo!`);
    } else {
        alert(`A palavra "${palavra}" não é um palíndromo.`);
    }
}
