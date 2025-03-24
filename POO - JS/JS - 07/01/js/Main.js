// Importando classe Aluno
import Aluno from "./Aluno";

// Definindo classe principal
class Main {
    // Bob construtor
    constructor() {
        this.nomeAluno = null;
        this.notasAluno = [];
    }

    #configurar() {
        let nome = document.getElementById('nome');
        let nota = document.getElementById('nota');

        let botaoAdicionar = document.getElementById('adicionarNotaBtn');

        if ((nome instanceof HTMLInputElement) && 
        (nota instanceof HTMLInputElement) &&
        (botaoAdicionar instanceof HTMLButtonElement)) {
            botaoAdicionar.addEventListener('click', () => {
                this.#adicionarConteudo();
            })
        }
    }

    #adicionarConteudo() {

    }
}

new Main();