function tipoTriangulo() {
    // Pegando infos
    let lado1 = document.getElementById('lado1').value;
    let lado2 = document.getElementById('lado2').value;
    let base = document.getElementById('base').value;

    // Verificando se chegou
    console.log(`Input lado 1: ${lado1}`);
    console.log(`Input lado 2: ${lado2}`);
    console.log(`Input base: ${base}`);

    // Fazendo parse
    let ld1 = parseFloat(lado1);
    let ld2 = parseFloat(lado2);
    let ba = parseFloat(base);

    // Fazendo verificacoes dos tipos de triangulo
    if (ld1 == ld2 && ld1 == ba && ld2 == ba) {
        document.getElementById('resultado').innerText = `O Triângulo é equilátero.`;
    } else if (ld1 == ld2 || ld1 == ba || ld2 == ba) {
        document.getElementById('resultado').innerText = `O Triângulo é isóceles.`
    } else {
        document.getElementById('resultado').innerText = `O Triângulo é escaleno.`
    }
}