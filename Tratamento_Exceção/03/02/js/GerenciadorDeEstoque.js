import Produto from './Produto.js';

class GerenciadorDeEstoque {
  #produtos = [];

  constructor() {
    this.configurar();
  }

  configurar() {
    let adicionarBtn = document.getElementById('adicionarBtn');
    let removerBtn = document.getElementById('removerBtn');

    if ((adicionarBtn instanceof HTMLButtonElement) && (removerBtn instanceof HTMLButtonElement)) {
      adicionarBtn.addEventListener('click', this.adicionarProduto.bind(this));
      removerBtn.addEventListener('click', this.removerProduto.bind(this));
    }
  }

  adicionarProduto() {
    try {
      let nomeInput = document.getElementById('nome');
      let quantidadeInput = document.getElementById('quantidade');
      let precoInput = document.getElementById('preco');

      if ((nomeInput instanceof HTMLInputElement) && (quantidadeInput instanceof HTMLInputElement)
          && (precoInput instanceof HTMLInputElement)) {
        let nome = nomeInput.value;
        let quantidade = parseInt(quantidadeInput.value);
        let preco = parseFloat(precoInput.value);

        if (!nome || isNaN(quantidade) || isNaN(preco)) { 
          alert('Preencha todos os campos corretamente.');
          return;
        }

        let produtoExistente = this.#produtos.find((p) => p.nome === nome);
        if (produtoExistente) {
          produtoExistente.quantidade += quantidade;
        } else {
          this.#produtos.push(new Produto(nome, quantidade, preco));
        }

        this.atualizarLista();
        this.limparCampos();
      }
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      alert('Ocorreu um erro ao adicionar o produto. Tente novamente.');
    }
  }

  removerProduto() {
    try {
      let nomeInput = document.getElementById('nome');
      if (nomeInput instanceof HTMLInputElement) {
        let nome = nomeInput.value.trim();
        if (nome === '') {
          alert('Informe o nome do produto para remover.');
          return;
        }

        let indice = this.#produtos.findIndex((p) => p.nome === nome);
        if (indice >= 0) {
          this.#produtos.splice(indice, 1);
          this.atualizarLista();
        } else {
          alert('Produto não encontrado.');
          return;
        }

        this.limparCampos();
      }
    } catch (error) {
      console.error('Erro ao remover produto:', error);
      alert('Ocorreu um erro ao remover o produto. Tente novamente.');
    }
  }

  atualizarLista() {
    try {
      let estoqueLista = document.getElementById('estoqueLista');
      if (estoqueLista instanceof HTMLUListElement) {
        while (estoqueLista.firstChild) {
          estoqueLista.removeChild(estoqueLista.firstChild);
        }

        this.#produtos.forEach((produto) => {
          let li = document.createElement('li');
          li.textContent = produto.toString();
          estoqueLista.appendChild(li);
        });
      }
    } catch (error) {
      console.error('Erro ao atualizar lista:', error);
      alert('Ocorreu um erro ao atualizar a lista. Tente novamente.');
    }
  }

  limparCampos() {
    try {
      let nomeInput = document.getElementById('nome');
      let quantidadeInput = document.getElementById('quantidade');
      let precoInput = document.getElementById('preco');

      if ((nomeInput instanceof HTMLInputElement) && (quantidadeInput instanceof HTMLInputElement)
       && (precoInput instanceof HTMLInputElement)) {
        nomeInput.value = '';
        quantidadeInput.value = '';
        precoInput.value = '';
      }
    } catch (error) {
      console.error('Erro ao limpar campos:', error);
      alert('Ocorreu um erro ao limpar os campos. Tente novamente.');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new GerenciadorDeEstoque();
});
