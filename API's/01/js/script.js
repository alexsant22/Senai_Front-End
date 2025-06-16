// Obtenha sua chave da API em https://thecatapi.com/
// É altamente recomendável usar uma chave para evitar limites de taxa.
const API_KEY = 'YOUR_API_KEY'; // <-- COLOQUE SUA CHAVE AQUI

function inicializar() {
  let searchButton = document.getElementById('search-button');

  if (searchButton instanceof HTMLButtonElement) {
    searchButton.addEventListener('click', searchCatImages);
  }

  // Carregar as raças de gatos assim que a página for carregada
  loadBreeds();
}

async function searchCatImages() {
  try {
    let breedSelect = document.getElementById('breed-select');
    let catImagesContainer = document.getElementById('cat-images');

    // prettier-ignore
    if (breedSelect instanceof HTMLSelectElement && catImagesContainer instanceof HTMLDivElement) {
            let selectedBreedId = breedSelect.value;

            if (!selectedBreedId) {
                throw new Error('Por favor, selecione uma raça de gato.');
            }

            // Exibe mensagem de carregamento
            exibirMensagem('Carregando imagens...', 'blue');
            catImagesContainer.innerHTML = ''; // Limpa as imagens anteriores

            let catImages = await fetchCatImages(selectedBreedId);

            if (catImages.length === 0) {
                exibirMensagem('Nenhuma imagem encontrada para esta raça.', 'orange');
                return;
            }

            catImages.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.url;
                imgElement.alt = 'Foto de gato';
                catImagesContainer.appendChild(imgElement);
            });

            exibirMensagem('Imagens carregadas com sucesso!', 'green');
        }
  } catch (erro) {
    // Exibe mensagem de erro na tela
    exibirMensagem(
      erro.message || 'Ocorreu um erro ao buscar as imagens.',
      'red'
    );
  }
}

async function loadBreeds() {
  let breedSelect = document.getElementById('breed-select');

  if (!(breedSelect instanceof HTMLSelectElement)) {
    exibirMensagem('Erro: Elemento de seleção de raças não encontrado.', 'red');
    return;
  }

  exibirMensagem('Carregando raças...', 'blue');
  try {
    const response = await fetch('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key': API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }

    const breeds = await response.json();

    breedSelect.innerHTML = '<option value="">Selecione uma raça</option>'; // Opção padrão
    breeds.forEach((breed) => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
    exibirMensagem('Raças carregadas!', 'green');
  } catch (error) {
    console.error('Erro ao buscar raças:', error);
    exibirMensagem(
      `Não foi possível carregar as raças: ${error.message}`,
      'red'
    );
  }
}

function fetchCatImages(breedId) {
  return new Promise(async (resolve, reject) => {
    if (!breedId) {
      reject('ID da raça não fornecido.');
      return;
    }

    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=10`,
        {
          headers: {
            'x-api-key': API_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }

      const catImages = await response.json();
      resolve(catImages);
    } catch (error) {
      reject(`Erro ao buscar imagens de gatos: ${error.message}`);
    }
  });
}

// Função para exibir mensagens
function exibirMensagem(conteudo, cor) {
  let mensagemElemento = document.getElementById('mensagem');

  if (mensagemElemento instanceof HTMLParagraphElement) {
    mensagemElemento.textContent = conteudo;
    mensagemElemento.style.color = cor;
  }
}

document.addEventListener('DOMContentLoaded', inicializar);
