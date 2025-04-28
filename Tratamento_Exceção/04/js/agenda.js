class Agenda {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(contato) {
        this.contatos.push(contato);
        this.ordenarContatos();
    }

    pesquisarContatos(nome) {
        return this.contatos.filter(c => c.nome.toLowerCase().includes(nome.toLowerCase()));
    }

    ordenarContatos() {
        this.contatos.sort((a, b) => a.nome.localeCompare(b.nome));
    }
}
