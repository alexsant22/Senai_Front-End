function informacao() {
    // Pegando info
    let escolha = document.getElementById('escolha').value;

    // Verificando entrada
    console.log(escolha);
    console.log(typeof(escolha)); // string

    // Opcoes das escolhas
    switch (escolha) {
        case "1": // Primavera
            document.getElementById('titulo').innerText = 'Informações sobre a Primavera:';
            document.getElementById('resultado').innerText = 'A primavera é a estação do ano marcada pelo florescimento das plantas, temperaturas amenas e dias mais longos. Ela ocorre entre o inverno e o verão, variando conforme o hemisfério: no Hemisfério Sul, vai de setembro a dezembro, enquanto no Hemisfério Norte, acontece de março a junho. 🌸🌿';
            break;
        case "2": // Verão
            document.getElementById('titulo').innerText = 'Informações sobre a Verão:';
            document.getElementById('resultado').innerText = 'O verão é a estação mais quente do ano, caracterizada por dias mais longos e temperaturas elevadas. No Hemisfério Sul, ocorre de dezembro a março, enquanto no Hemisfério Norte, vai de junho a setembro. É um período associado a férias, praia e atividades ao ar livre. ☀️🏖️';
            break;
        case "3": // Outono
            document.getElementById('titulo').innerText = 'Informações sobre a Outono:';
            document.getElementById('resultado').innerText = 'O outono é a estação do ano marcada pela transição entre o verão e o inverno. As temperaturas começam a cair, e as folhas das árvores de clima temperado mudam de cor e caem. No Hemisfério Sul, ocorre de março a junho, e no Hemisfério Norte, de setembro a dezembro. 🍂🌆';
            break;
        case "4": // Inverno
            document.getElementById('titulo').innerText = 'Informações sobre a Inverno:';
            document.getElementById('resultado').innerText = 'O inverno é a estação mais fria do ano, caracterizada por temperaturas baixas, noites mais longas e, em algumas regiões, neve e geadas. No Hemisfério Sul, ocorre de junho a setembro, enquanto no Hemisfério Norte, vai de dezembro a março. É um período associado a roupas quentes, bebidas quentes e aconchego. ❄️🔥';
            break;
        default:
            alert('Houve algum erro.');
    }
}