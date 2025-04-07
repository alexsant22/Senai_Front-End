export default class Produto {
    // Atributos
    #nome;
    #preco;
    #quantidade;

    // bob construtor
    constructor(nome, quuantidade, precoUnitario) {
        this.#nome = nome;
        this.#quantidade = quuantidade;
        this.#preco = precoUnitario;
    }

    // Métodos
    valorTotal() {
        /* let resultado = this.#preco * this.#quantidade;
        return resultado.toFixed(2); */
        return (this.#preco * this.#quantidade).toFixed(2);
    }

    toString() {
        return `${this.#nome}: Quantidade:${this.#quantidade} | 
        Preço Unitário R$ ${this.#preco} | Valor Total R$${this.valorTotal()}`
    }
}