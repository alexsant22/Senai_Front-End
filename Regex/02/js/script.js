function configurar() {
    let cpfInput = document.getElementById('cpf');
    let verificarBtn = document.getElementById('verificarBtn');

    if ((cpfInput instanceof HTMLInputElement) && (verificarBtn instanceof HTMLButtonElement)) {
        verificarBtn.addEventListener('click', () => {
            verificarCPF(cpfInput.value);

            cpfInput.value = '';
        });
    }
}

function verificarCPF(cpf) {
    try {
        if (!cpf || cpf.trim() === "") {
            throw new Error("Digite um CPF ou RG válido.");
        }

        const regexCPF_RG = /^(\d{2}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}-\d{1})$/;

        if (!regexCPF_RG.test(cpf)) {
            throw new Error("Formato inválido. Use CPF 99.999.999-99 ou RG 99.999.999-9.");
        }

        exibir(`CPF: ${cpf} - Verificado!`, true);
    } catch (error) {
        exibir(`Erro: ${error.message}`, false);
    }
}

function exibir(mensagem, sucesso) {
    let saida = document.getElementById('resultado');

    if (saida instanceof HTMLParagraphElement) {
        saida.textContent = mensagem;
        saida.style.color = sucesso ? 'green' : 'red';
    }
}

document.addEventListener('DOMContentLoaded', configurar);