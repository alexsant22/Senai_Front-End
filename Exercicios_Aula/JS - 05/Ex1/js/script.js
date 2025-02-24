function saudacao(nomePadrao = 'Visitante', mensagemPadrao = 'Bem-Vindo') {
  // Entradas
  let nomeEntrada = document.getElementById('nome');
  let mensagemEntrada = document.getElementById('mensagem');

  // Verificação
  if (
    nomeEntrada instanceof HTMLInputElement &&
    mensagemEntrada instanceof HTMLInputElement
  ) {
    // Definindo entadas
    let nome = nomeEntrada.value;
    let mensagem = mensagemEntrada.value;
    /*  if (nome == '' || mensagem == '') {
      exibirConteudo(nomePadrao, mensagemPadrao);
    } else { */
    exibirConteudo(nome, mensagem);
    //}
  }
  //exibirConteudo(nomePadrao, mensagemPadrao);
  console.log(nomePadrao);
}

function exibirConteudo(nome, mensagem) {
  // Saida
  let saida = document.getElementById('resultado');
  if (saida != null) {
    saida.textContent = `Olá, ${nome}! ${mensagem}!`;
  }
}

function main() {
  let botao = document.getElementById('exibir');
  if (botao instanceof HTMLElement) {
    botao.addEventListener('click', saudacao);
  }
}

document.addEventListener('DOMContentLoaded', main);
