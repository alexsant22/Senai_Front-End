import Aluno from './Aluno.js';

class GerenciadorDeAlunos {
  constructor() {
    this.aluno = null;
    this.#configurar();
  }

  #configurar() {
    try {
      let notaInput = document.getElementById('nota');
      let adicionarNotaBtn = document.getElementById('adicionarNotaBtn');
      let calcularMediaBtn = document.getElementById('calcularMediaBtn');
      let limparConteudoBtn = document.getElementById('limparConteudoBtn');

      if (
        (notaInput instanceof HTMLInputElement) &&
        (adicionarNotaBtn instanceof HTMLButtonElement) &&
        (calcularMediaBtn instanceof HTMLButtonElement) &&
        (limparConteudoBtn instanceof HTMLButtonElement)
      ) {
        adicionarNotaBtn.addEventListener('click', () => {
          this.acrescentarNota(notaInput);
        });

        calcularMediaBtn.addEventListener('click', () => {
          this.exibirMedia();
        });

        limparConteudoBtn.addEventListener('click', () => {
          this.limparConteudo();
        });
      }
    } catch (error) {
      console.error('Erro na configuração dos elementos:', error);
    }
  }

  obterNome() {
    try {
      let nomeInput = document.getElementById('nome');

      if (nomeInput instanceof HTMLInputElement) {
        return nomeInput.value;
      }
      return '';
    } catch (error) {
      console.error('Erro ao obter o nome do aluno:', error);
      return '';
    }
  }

  inicializarAluno() {
    try {
      let nome = this.obterNome();

      if (!nome) {
        alert('Por favor, insira o nome do aluno.');
        return false;
      }

      if (!this.aluno) {
        this.aluno = new Aluno(nome);
      } else {
        this.aluno = new Aluno(nome, this.aluno.notas);
      }
      return true;
    } catch (error) {
      console.error('Erro ao inicializar aluno:', error);
      return false;
    }
  }

  acrescentarNota(notaInput) {
    try {
      if (!this.inicializarAluno()) return;

      let nota = Number(notaInput.value);
      if (!isNaN(nota) && nota >= 0 && nota <= 10) {
        this.aluno.adicionarNota(nota);
        notaInput.value = '';
        this.exibirNotas();
      } else {
        alert('Digite uma nota válida entre 0 e 10.');
      }
    } catch (error) {
      console.error('Erro ao acrescentar nota:', error);
    }
  }

  exibirMedia() {
    try {
      let resultado = document.getElementById('resultado');

      if (!this.aluno) {
        alert('Nenhum aluno foi inicializado.');
        return;
      }
      if (resultado instanceof HTMLParagraphElement) {
        let media = Number(this.aluno.calcularMedia());
        resultado.textContent = `Aluno: ${this.aluno.nome}, Média: ${media}`;
      }
    } catch (error) {
      console.error('Erro ao exibir a média:', error);
    }
  }

  exibirNotas() {
    try {
      let notasAdicionadas = document.getElementById('notasAdicionadas');

      if (!this.aluno) {
        alert('Nenhum aluno foi inicializado.');
        return;
      }
      if (notasAdicionadas instanceof HTMLParagraphElement) {
        notasAdicionadas.textContent = `Notas adicionadas: ${this.aluno.notas.join(', ')}`;
      }
    } catch (error) {
      console.error('Erro ao exibir notas:', error);
    }
  }

  limparConteudo() {
    try {
      let notasAdicionadas = document.getElementById('notasAdicionadas');
      let resultado = document.getElementById('resultado');
      let nomeInput = document.getElementById('nome');

      if (
        (notasAdicionadas instanceof HTMLParagraphElement) &&
        (resultado instanceof HTMLParagraphElement) &&
        (nomeInput instanceof HTMLInputElement)
      ) {
        notasAdicionadas.textContent = '';
        resultado.textContent = '';
        nomeInput.value = '';
      }
      this.aluno = null;
    } catch (error) {
      console.error('Erro ao limpar conteúdo:', error);
    }
  }
}

// Inicializar o Gerenciador ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
  try {
    new GerenciadorDeAlunos();
  } catch (error) {
    console.error('Erro ao inicializar GerenciadorDeAlunos:', error);
  }
});
