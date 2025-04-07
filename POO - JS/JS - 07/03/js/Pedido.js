export default class Pedido {
    #nome;
    #quantidade;
    #preco;

    // Bob construtor
    constructor(nome, quantidade, preco) {
        this.#nome = nome;
        this.#quantidade = quantidade;
        this.#preco = preco;
    }

    // Métodos
    valorTotal() {
        let valorFinal = this.#preco * this.#quantidade;
        return (valorFinal  * 1.1).toFixed(2);
        
    }

    toString() {
        return `${this.#nome} | Quantidade: ${this.#quantidade} | Valor total (10% imposto): ${this.valorTotal()}`
    }
}