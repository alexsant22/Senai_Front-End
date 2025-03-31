import Produto from "./Produto";

class GerenciadorDeProdutos {
    // Atributos
    #produtos = [];


    // Métodos
    adicionar() {
        let nomeInput = document.getElementById('nome');
        let quantidadeInput = document.getElementById('quantidade');
        let precoInput = document.getElementById('preco');

        //prettier-ignore
        if ((nomeInput instanceof HTMLInputElement) &&
            (quantidadeInput instanceof HTMLInputElement) &&
            (precoInput instanceof HTMLInputElement)) {
                let nome = nomeInput.value;
                let quantidade = parseInt(quantidadeInput.value);
                let preco = parseFloat(precoInput.value);

                //prettie-ignore
                if ((!nome) || isNaN(quantidade) || isNaN(preco)) {
                    alert("Preencha todos os campos corretamente.")
                }

                // Validar produto existente
                let produtoExistente = this.#produtos.find((produto) => produto.nome === nome);
                if (produtoExistente) {
                    produtoExistente.quantidade += quantidade;
                } else {
                    this.#produtos.push(new Produto(nome, quantidade, preco));
                }

                this.atualizarLista();
                this.limparCampos();
            }
    }

    remover() {
        let nomeInput = document.getElementById('nome');

        if (nomeInput instanceof HTMLInputElement) {
            let nome = nomeInput.value;
            // if (nome == '') || (nome == undefined)
            if (!nome) {
                alert("Informe um nome do produto o qual deseja remover.");
                return;
            }
            // Encontrar o indice do produto a partir do nome
            let indice = this.#produtos.findIndex((produto) => produto.nome === nome);
            if (indice > 0) {
                this.#produtos.splice(indice, 1);
                this.atualizarLista();
            } else {
                alert("Produto não encontrado.")
            }

            limparCampos();
        }
    }

    atualizarLista() {
        let estoqueLista = document.getElementById('estoqueLista');

        if (estoqueLista instanceof HTMLUListElement) {
            // estoqueLista.innerHTML = '';
            while (estoqueLista.firstChild) {
                estoqueLista.removeChild(estoqueLista.firstChild);
            }

            this.#produtos.forEach((produto) => {
                let li = document.createElement('li');
                li.textContent = produto.toString();
                estoqueLista.appendChild(li);
            });
        }
    }

    limparCampos() {
        let nomeInput = document.getElementById('nome');
        let quantidadeInput = document.getElementById('quantidade');
        let precoInput = document.getElementById('preco');

        //prettier-ignore
        if ((nomeInput instanceof HTMLInputElement) &&
            (quantidadeInput instanceof HTMLInputElement) &&
            (precoInput instanceof HTMLInputElement)) {
                nomeInput.value = '';
                quantidadeInput.value = '';
                precoInput.value = ';'
            }
    }

    configurar() {
        let adicionarBtn = document.getElementById('adicionarBtn');
        let removerBtn = document.getElementById('removerBtn');

        //prettier-ignore
        if ((adicionarBtn instanceof HTMLButtonElement) &&
            (removerBtn instanceof HTMLButtonElement)) {
                adicionarBtn.addEventListener('click', this.adicionar);
                removerBtn.addEventListener('click', this.remover);
        }
    }

}

document.addEventListener('DOMContentLoaded', () => {
    new GerenciadorDeProdutos;
})