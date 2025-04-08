function configurar() {
    let botaoAcessar = document.getElementById('acessarBtn');
    let nomeInput = document.getElementById('nomeInput');
    let idadeInput = document.getElementById('idadeInput');

    if ((botaoAcessar instanceof HTMLButtonElement) && (nomeInput instanceof HTMLInputElement) && (idadeInput instanceof HTMLInputElement)) {
        botaoAcessar.addEventListener('click', () => {
            let idade = parseInt(idadeInput.value);
            validarIdade(idade);
        });
    }
}

function exibirErro(mensagem) {
    let saida = document.getElementById('saida');

    if (saida instanceof HTMLDivElement) {
        saida.textContent = `Erro: ${mensagem}.`
    }
}

function exibirSaida(nome = "Usuário") {
    let saida = document.getElementById('saida');
    let nomeInput = document.getElementById('nomeInput');

    if ((saida instanceof HTMLDivElement) && (nomeInput instanceof HTMLInputElement)) {
        let nomeFinal = nomeInput.value.trim() || nome;

        saida.textContent = `Acesso do ${nomeFinal}, autorizado!`
    }
}

function validarIdade(idadeUsuario) {
    let nomeInput = document.getElementById('nomeInput');
    let idadeInput = document.getElementById('idadeInput');

    if ((nomeInput instanceof HTMLInputElement) && (idadeInput instanceof HTMLInputElement)) {
        let nome = nomeInput.value;
        let idade = parseInt(idadeInput.value);

        if (nome == "") {
            nome = "Usuário";
        }

        try {
            if (isNaN(idade)) {
                throw new Error('Digite um número válido');
            }
            if (idade < 18) {
                throw new Error(`Acesso negado, ${nome} é menor de idade`);
            }

            exibirSaida();
        } catch (error) {
            exibirErro(error.message);
        }
    }
}

document.addEventListener('DOMContentLoaded', configurar);
