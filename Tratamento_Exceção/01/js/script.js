function exibirErro(mensagem) {
    let saida = document.getElementById('saida');

    if (saida instanceof HTMLDivElement) {
        saida.textContent = `Erro: ${mensagem}.`
    }
}

function validarIdade() {
    let nomeInput = document.getElementById('nomeInput');
    let idadeInput = document.getElementById('idadeInput');

    if ((nomeInput instanceof HTMLInputElement) && (idadeInput instanceof HTMLInputElement)) {
        let nome = nomeInput.value;
        let idade = parseInt(idadeInput.value);
    }
}