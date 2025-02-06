function mostrarClass() {
    // Pegando info e convertendo para número
    let escolha = parseInt(document.getElementById('escolha').value);

    // Verificando entrada no console
    console.log(escolha);

    // Opções das escolhas
    switch (escolha) {
        case 1:
            document.getElementById('resultado').innerText = "Alimento não-perecível";
            break;
        case 2:
        case 3:
        case 4:
            document.getElementById('resultado').innerText = "Alimento perecível";
            break;
        case 5:
        case 6:
            document.getElementById('resultado').innerText = "Vestuário";
            break;
        case 7:
            document.getElementById('resultado').innerText = "Higiene Pessoal";
            break;
        case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15:
            document.getElementById('resultado').innerText = "Limpeza e Utensílios Domésticos";
            break;
        default:
            document.getElementById('resultado').innerText = "Código inválido";
    }
}
