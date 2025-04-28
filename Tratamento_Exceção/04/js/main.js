const agenda = new Agenda();

function configurar() {
    let botaoAdicionar = document.getElementById('btnAdicionar');
    let botaoPesquisar = document.getElementById('btnPesquisar');

    if (botaoAdicionar instanceof HTMLButtonElement &&
        botaoPesquisar instanceof HTMLButtonElement) {

        botaoAdicionar.addEventListener('click', () => {
            adicionarContato();
        });

        botaoPesquisar.addEventListener('click', () => {
            pesquisarContato();
        });
    }
}

function exibirSaida(mensagem, cor) {
    let resultado = document.getElementById('resultado');

    if (resultado instanceof HTMLParagraphElement) {
        resultado.textContent = mensagem;
        resultado.style.color = cor;
    }
}

function atualizarLista(contatos) {
    let lista = document.getElementById('listaContatos');

    if (lista instanceof HTMLUListElement) {
        lista.innerHTML = '';
        contatos.forEach(contato => {
            let li = document.createElement('li');
            li.textContent = `Nome: ${contato.nome} | Telefone: ${contato.telefone} | Email: ${contato.email}`;
            lista.appendChild(li);
        });
    }
}

function adicionarContato() {
    let nomeInput = document.getElementById('nome');
    let telefoneInput = document.getElementById('telefone');
    let emailInput = document.getElementById('email');

    if (nomeInput instanceof HTMLInputElement &&
        telefoneInput instanceof HTMLInputElement &&
        emailInput instanceof HTMLInputElement) {

        let nome = nomeInput.value.trim();
        let telefone = telefoneInput.value.trim();
        let email = emailInput.value.trim();

        try {
            if (nome === '') {
                throw new Error('O nome é obrigatório.');
            }

            if (!/^\d{10,11}$/.test(telefone)) {
                throw new Error('O telefone deve conter apenas números e ter 10 ou 11 dígitos.');
            }

            if (email === '' || !email.includes('@')) {
                throw new Error('O email deve ser válido.');
            }

            let contato = new Contato(nome, telefone, email);
            agenda.adicionarContato(contato);
            atualizarLista(agenda.contatos);

            exibirSaida('Contato adicionado com sucesso!', 'blue');

            nomeInput.value = '';
            telefoneInput.value = '';
            emailInput.value = '';

        } catch (error) {
            exibirSaida(error.message, 'red');
        }
    }
}

function pesquisarContato() {
    let pesquisaInput = document.getElementById('pesquisa');

    if (pesquisaInput instanceof HTMLInputElement) {
        let termo = pesquisaInput.value.trim();
        let resultados = agenda.pesquisarContatos(termo);

        atualizarLista(resultados);

        if (resultados.length === 0) {
            exibirSaida('Nenhum contato encontrado.', 'red');
        } else {
            exibirSaida(`Foram encontrados ${resultados.length} contato(s).`, 'blue');
        }
    }
}

document.addEventListener('DOMContentLoaded', configurar);
