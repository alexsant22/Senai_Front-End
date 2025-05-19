//prettier-ignore
let produtos = [
    { nome: 'Fone', diretorio: 'fone', textoDescritivo: 'Fone de Ouvido Philips com Microfone - Branco', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
    { nome: 'Mouse', diretorio: 'mouse', textoDescritivo: 'Mouse Gamer Acer Nitro 7200 DPI - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
    { nome: 'HeadSet', diretorio: 'headSet', textoDescritivo: 'Headset Gamer Com Mic Quantum Jbl  - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
    { nome: 'Teclado', diretorio: 'teclado', textoDescritivo: 'Teclado Mecânico Gamer Phantom, ABNT2 - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
  ];

function inicializarProdutos() {
  let containerPrincipal = document.getElementById('produtos');

  if(containerPrincipal instanceof HTMLDivElement) {
    produtos.forEach((produto) => {
      console.log(produto);

      let containerProduto = criarContainerProduto(produto);
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
  produto.imagens.forEach((item) => {
   let imagem = document.createElement('img');

   imagem.src = `img/${produto.diretorio}/${item}`;
  });
}

  document.addEventListener('DOMContentLoaded', inicializarProdutos);