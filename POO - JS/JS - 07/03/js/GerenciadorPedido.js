import Pedido from "./Pedido";

export default class GerenciadorPedido {
    #itens = [];

    configurar() {
        let adicionarBtn = document.getElementById('adicionarBtn');
        let removerBtn = document.getElementById('removerBtn');
    
        //prettier-ignore
        if((adicionarBtn instanceof HTMLButtonElement) && (removerBtn instanceof HTMLButtonElement)){
            adicionarBtn.addEventListener('click', this.adicionarItem.bind(this));
            removerBtn.addEventListener('click', this.removerProduto.bind(this));
        }
      }
}