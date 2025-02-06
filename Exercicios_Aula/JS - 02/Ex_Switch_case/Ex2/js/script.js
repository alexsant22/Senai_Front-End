function operacoes() {
    // Pegando info
    let escolha = document.getElementById('escolha').value;
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;

    // Verificando entrada
    console.log(escolha);
    console.log(numero1);
    console.log(numero2);

    // Fazendo parse
    let num1 = parseFloat(numero1);
    let num2 = parseFloat(numero2);

    // Opcoes das escolhas
    switch (escolha) {
        case "1": // Média
            var resul = (num1 + num2) / 2
            document.getElementById('resultado').innerText = `O resultado da média é: ${resul}`;
            break;
        case "2": // Diferenca
            var resul = num1 - num2
            document.getElementById('resultado').innerText = `O resultado da diferença é: ${resul}`;
            break;
        case "3": // Multiplicação
            var resul = num1 * num2
            document.getElementById('resultado').innerText = `O resultado da multiplicação é: ${resul}`;
            break;
        case "4": // Divisão
            var resul = num1 / num2
            document.getElementById('resultado').innerText = `O resultado da divisão é: ${resul}`;
            break;
        case "5": // Soma
            var resul = num1 + num2
            document.getElementById('resultado').innerText = `O resultado da soma é: ${resul}`;
            break;
        case "0":
            alert("Escolha uma opção válida.")
        default:
            console.log('Houve algum erro.');
    }
}