export default class Aluno {
    // Atributos
    #nome;
    #notas = [];

    // Bob construtor
    constructor(nome, notas = []) {
        this.#nome = nome;
        this.#notas = notas;
    }

    // Getters and Setters
    get getNome() {
        return this.#nome;
    }

    get getNotas() {
        return this.#notas;
    }

    set setNome(novoNome) {
        this.#nome = novoNome;
    }

    set setNotas(novasNotas) {
        if (this.#validarNotas(novasNotas)) {
            this.#notas = novasNotas;
        }
    }

    // Métodos de execução
    #validarNotas(notas) { // Validação para notas
        let notasValidas = notas.every((nota) => {
            return ((nota >= 0) && (nota <= 10));
        });

        if (notasValidas == false) {
            alert("As notas devem estar entre 0 e 10.")
        }

        return true;
    }

    calculandoMedia() {
        if (this.#notas.length > 0) {
            let somaNotas = this.#notas.reduce((acumulador, notaAtual) => {
                return acumulador + notaAtual;
            }, 0);
    
            let resultado = somaNotas / this.#notas.length;
    
            return resultado;
        } else {
            alert("Divisão por Zero não é permitido.");
            return 0;
        }
    }

    toString() {
        return `Aluno: ${this.#nome} -  Média: ${this.calculandoMedia().toFixed(2)}`
    }
}