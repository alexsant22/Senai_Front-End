//prettier-ignore
let produtos = [
    { nome: 'Fone', diretorio: 'fone', textoDescritivo: 'Fone de Ouvido Philips com Microfone - Branco' },
    { nome: 'Mouse', diretorio: 'mouse', textoDescritivo: 'Mouse Gamer Acer Nitro 7200 DPI - Preto' },
    { nome: 'HeadSet', diretorio: 'headSet', textoDescritivo: 'Headset Gamer Com Mic Quantum Jbl  - Preto' },
    { nome: 'Teclado', diretorio: 'teclado', textoDescritivo: 'Teclado Mecânico Gamer Phantom, ABNT2 - Preto' },
  ];

function inicializarProdutos() {
  let containerPrincipal = document.getElementById('produtos');

  if(containerPrincipal instanceof HTMLDivElement) {
    produtos.forEach((produto) => {
      console.log(produto);

      let containerProduto = criarContainerProduto(produto);
      containerPrincipal.appendChild(containerProduto);
    });
  }
}

function criarContainerProduto(produto) {
  let divProduto = document.createElement('div');
  divProduto.className = 'container';

  let quadro = criarQuadro(produto);
  divProduto.appendChild(quadro);

  return divProduto;
}

function criarQuadro(produto) {
  let quadro = document.createElement('div');
  quadro.className = 'quadro-imagens';

  produto.imagens.forEach((item) => {
      let imagem = document.createElement('img');
      imagem.src = `img/${produto.diretorio}/${item}`;
      imagem.alt = produto.nome;
      quadro.appendChild(imagem);
  });

  return quadro;
}

  document.addEventListener('DOMContentLoaded', inicializarProdutos);