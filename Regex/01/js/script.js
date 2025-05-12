function configurar() {
    let nomeInput = document.getElementById('nome');
    let confirmarBtn = document.getElementById('confirmarBtn');

    if ((nomeInput instanceof HTMLInputElement) && (confirmarBtn instanceof HTMLButtonElement)) {
        confirmarBtn.addEventListener('click', () => {
            let resultado = verificarNome(nomeInput.value);
            exibirConteudo(resultado);

            nomeInput.value = '';
        });
    }
}

function verificarNome(nome) {
    try {
        if (!nome || nome == null || nome == " ") {
            throw new Error('Digite um nome válido');
        }

        let palavras = nome.trim().split(/\s+/); // Divide o nome em palavras considerando múltiplos espaços
        
        if (palavras.length < 2) {
            throw new Error('O nome deve conter pelo menos um nome e um sobrenome');
        }

        let negacao = /[^a-zA-ZÀ-ÿ \s]/g;
        
        if (negacao.test(nome)) {
            throw new Error('O nome não pode conter números ou caracteres especiais');
        }

        return nome;

    } catch (error) {
        alert(`Erro: ${error.message}.`)
    }
}

function exibirConteudo(resultado) {
    let saida = document.getElementById('resultado');

    if (saida instanceof HTMLParagraphElement) {
        if (!resultado) {
            saida.textContent = "";
        } else {
            saida.textContent = `Nome: ${resultado} - Verificado!`;
        }
    }
}

document.addEventListener('DOMContentLoaded', configurar);