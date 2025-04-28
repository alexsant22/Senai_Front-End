function configurar() {
    let botaoConfirmar = document.getElementById('btnConfirmar');
    let nomeInput = document.getElementById('nome');
    let valorInput = document.getElementById('valor');
    let idadeInput = document.getElementById('idade');

    if ((botaoConfirmar instanceof HTMLButtonElement) &&
        (nomeInput instanceof HTMLInputElement) &&
        (valorInput instanceof HTMLInputElement) &&
        (idadeInput instanceof HTMLInputElement)) {
            botaoConfirmar.addEventListener('click', () => {
                validarEmprestimo();
            });
        }
}

function exibirSaida(mensagem, cor) {
    let resultadoInput = document.getElementById('resultado');

    if (resultadoInput instanceof HTMLParagraphElement) {
        resultadoInput.textContent = mensagem;
        resultadoInput.style.color = cor;
    }
}

function validarEmprestimo() {
    let nomeInput = document.getElementById('nome');
    let valorInput = document.getElementById('valor');
    let idadeInput = document.getElementById('idade');

    if ((nomeInput instanceof HTMLInputElement) &&
        (valorInput instanceof HTMLInputElement) &&
        (idadeInput instanceof HTMLInputElement)) {
            let nome = nomeInput.value;
            let idade = parseInt(idadeInput.value);
            let valor = parseFloat(valorInput.value);

            try {
                if (nome === '' || nome === null) {
                    throw new Error('Digite um nome para fazer o Empréstimo.');
                }
        
                if (isNaN(idade)) {
                    throw new Error("A idade deve ser um número.");
                }

                if ((idade < 18) || (idade > 70)) {
                    throw new Error("Não é uma idade válida para o Empréstimo.");
                }

                if (isNaN(valor)) {
                    throw new Error("O valor deve ser um número.");
                }

                if ((valor < 100) || (valor > 30000)) {
                    throw new Error("O valor do emprestimo não é válido.");
                }

                let cor = 'blue'
                exibirSaida("Pedido enviado para análise.", cor);
            } catch (error) {
                let cor = 'red'
                exibirSaida(error.message, cor);
            }
        }
}

document.addEventListener('DOMContentLoaded', configurar);