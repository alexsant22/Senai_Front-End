// Esta função é chamada assim que o DOM (estrutura HTML) estiver totalmente carregado
function configurar() {
    // Seleciona os elementos HTML pelo ID
    let botaoAcessar = document.getElementById('acessarBtn'); // Botão de acesso
    let nomeInput = document.getElementById('nomeInput');     // Campo de nome
    let idadeInput = document.getElementById('idadeInput');   // Campo de idade

    // Verifica se os elementos foram encontrados e têm o tipo correto
    if ((botaoAcessar instanceof HTMLButtonElement) &&
        (nomeInput instanceof HTMLInputElement) &&
        (idadeInput instanceof HTMLInputElement)) {

        // Adiciona um "escutador de evento" para o botão
        // Quando o botão for clicado, a função dentro do addEventListener será executada
        botaoAcessar.addEventListener('click', () => {
            // Converte o valor do input de idade (que é uma string) para número inteiro
            let idade = parseInt(idadeInput.value);

            // Chama a função que valida a idade, passando o valor como argumento
            validarIdade(idade);
        });
    }
}

// Função que exibe uma mensagem de erro na tela
function exibirErro(mensagem) {
    let saida = document.getElementById('saida'); // Pega o elemento onde a mensagem será exibida

    // Verifica se o elemento existe e é uma div
    if (saida instanceof HTMLDivElement) {
        // Define o texto da div como uma mensagem de erro personalizada
        saida.textContent = `Erro: ${mensagem}.`;
    }
}

// Função que exibe uma mensagem de sucesso quando o acesso é autorizado
function exibirSaida(nome = "Usuário") {
    let saida = document.getElementById('saida');         // Onde exibir a mensagem
    let nomeInput = document.getElementById('nomeInput'); // Campo de entrada do nome

    // Verifica se os elementos existem e têm os tipos corretos
    if ((saida instanceof HTMLDivElement) && (nomeInput instanceof HTMLInputElement)) {
        // Usa o valor do input de nome, removendo espaços em branco
        // Se estiver vazio, usa o valor padrão "Usuário"
        let nomeFinal = nomeInput.value.trim() || nome;

        // Exibe a mensagem de acesso autorizado com o nome informado
        saida.textContent = `Acesso do ${nomeFinal}, autorizado!`;
    }
}

// Função que valida a idade fornecida pelo usuário
function validarIdade(idadeUsuario) {
    // Obtém novamente os campos do DOM (boas práticas para garantir que ainda existem)
    let nomeInput = document.getElementById('nomeInput');
    let idadeInput = document.getElementById('idadeInput');

    // Verifica se os inputs existem e são do tipo correto
    if ((nomeInput instanceof HTMLInputElement) && (idadeInput instanceof HTMLInputElement)) {
        let nome = nomeInput.value;                   // Pega o nome do input
        let idade = parseInt(idadeInput.value);       // Converte o valor da idade para número

        // Se o campo de nome estiver vazio, define como "Usuário"
        if (nome == "") {
            nome = "Usuário";
        }

        try {
            // Verifica se a idade informada não é um número válido
            if (isNaN(idade)) {
                // Lança um erro que será capturado pelo catch
                throw new Error('Digite um número válido');
            }

            // Verifica se a idade é menor que 18
            if (idade < 18) {
                throw new Error(`Acesso negado, ${nome} é menor de idade`);
            }

            // Se passou por todas as validações, mostra a mensagem de sucesso
            exibirSaida();
        } catch (error) {
            // Se ocorrer algum erro, exibe a mensagem de erro na tela
            exibirErro(error.message);
        }
    }
}

// Adiciona um escutador para o evento de carregamento do DOM
// Quando o HTML estiver pronto, chama a função configurar
document.addEventListener('DOMContentLoaded', configurar);
