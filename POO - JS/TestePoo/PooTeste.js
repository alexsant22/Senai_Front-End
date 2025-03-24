class Pessoa { // Criando classe
    constructor(nome, idade) { // Construtor com parametros
        // Definindo atributos
        this.nome = nome;
        this.idade = idade;
    }

    // Métodos
    saudação() {
        return `Olá, você é o(a) ${this.nome} e tem ${this.idade} anos.`;
    }

}

// Criando obj
const pessoa1 = new Pessoa("Alexandre", 20);
console.log(pessoa1.saudação());