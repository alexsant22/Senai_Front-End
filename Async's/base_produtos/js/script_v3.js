//prettier-ignore
let produtos = [
    { nome: 'Fone', diretorio: 'fone', textoDescritivo: 'Fone de Ouvido Philips com Microfone - Branco' },
    { nome: 'Mouse', diretorio: 'mouse', textoDescritivo: 'Mouse Gamer Acer Nitro 7200 DPI - Preto' },
    { nome: 'HeadSet', diretorio: 'headSet', textoDescritivo: 'Headset Gamer Com Mic Quantum Jbl  - Preto' },
    { nome: 'Teclado', diretorio: 'teclado', textoDescritivo: 'Teclado Mecânico Gamer Phantom, ABNT2 - Preto' },
  ];

async function inicializarProdutoDinamicamente() {
    for (let produto of produtos) {
        produto.quantidadeFotos = await contarImagens(produto.diretorio);
    }

    inicializarProdutos();
}

async function contarImagens(diretorio) {
    const MAX_IMG = 3;
    let contador = 0;

    for (let i = 1; i <= MAX_IMG; i++) {
        let img = new Image();
        img.src = `img/${diretorio}/0${i}.jpg`

        try {
            await img.decode(); // Aguarda a decodificação da imagem

            contador++;
        } catch (error) {
            console.log(`Erro ao carregar a imagem ${error.meassage}`);
            break;
        }

        return contador;
    }
}

function inicializarProdutos() {
  let containerPrincipal = document.getElementById('produtos');

  if(containerPrincipal instanceof HTMLDivElement) {
    produtos.forEach((produto, indice) => {
      console.log(produto);

      let containerProduto = criarContainerProduto(produto, indice);
      containerPrincipal.appendChild(containerProduto);
    });
  }
}

function criarContainerProduto(produto, indice) {
  let divProduto = document.createElement('div');
  divProduto.className = 'container';

  let primeiraImagemDiv = criarQuadro(produto.diretorio, 1, true);
  divProduto.appendChild(primeiraImagemDiv);

  for (let i = 2; i <= produto.quantidadeFotos; i++) {
    let imagemDiv = criarQuadro(produto.diretorio, i, false);
    divProduto.appendChild(imagemDiv);
  }

  //prettier-ignore
  let linhaMiniaturas = criarLinhaMiniaturas(produto.diretorio, produto.quantidadeFotos, indice);
  divProduto.appendChild(linhaMiniaturas);

  return divProduto;
}

function criarLinhaMiniaturas(diretorio, quantidadeFotos, indice) {
    
}

function criarQuadro(diretorio, numero, visivel) {
  let quadro = document.createElement('div');
  quadro.className = 'minhaImagem';
  quadro.style.display = visivel ? 'block' : 'nome';

  let imagem = document.createElement('img');
    imagem.src = `img/${diretorio}/0${numero}.jpg`;
    quadro.appendChild(imagem);

  return quadro;
}

  document.addEventListener('DOMContentLoaded', inicializarProdutoDinamicamente);