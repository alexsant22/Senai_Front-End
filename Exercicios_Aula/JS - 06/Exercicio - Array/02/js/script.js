let arrayTarefa = [];

function exibirConteudo() {
    let saida = document.getElementById('resultado');
    if (saida instanceof HTMLParagraphElement) {
        // Exibindo as tarefas com quebra de linha
        saida.innerHTML = arrayTarefa.join('<br>');
    }
}

function cadastrarTarefa(tarefa) {
    if (tarefa) {
        // Verificando se a tarefa já existe na lista antes de adicionar
        if (!arrayTarefa.includes(tarefa)) {
            arrayTarefa.push(tarefa);
            exibirConteudo();
        } else {
            alert("Tarefa já cadastrada!");
        }
    } else {
        alert("Por favor, insira um valor válido!");
    }
}

function removerTarefa() {
    if (arrayTarefa.length > 0) {
        arrayTarefa.pop();
        exibirConteudo();
    } else {
        alert("Não existem tarefas cadastradas!");
    }
}

function removerTarefaEscolhida(tarefa) {
    let i = arrayTarefa.indexOf(tarefa);

    if (i != -1) {
        arrayTarefa.splice(i, 1);
        exibirConteudo();
    } else {
        alert("Tarefa não encontrada!");
    }
}

const configurarTarefas = () => {
    let entradaTarefa = document.getElementById('tarefaInput');
    let cadastrarTarefaBtn = document.getElementById('cadastarTarefaBtn');
    let removerTarefaBtn = document.getElementById('removerTarefaBtn');

    let tarefaRemovida = document.getElementById('tarefaRemovida');
    let removerTarefaEscolhidaBtn = document.getElementById('removerTarefaEscolhidaBtn');

    // Configurando os eventos de click nos botões
    if ((cadastrarTarefaBtn instanceof HTMLButtonElement) && 
        (entradaTarefa instanceof HTMLInputElement)) {
        cadastrarTarefaBtn.addEventListener('click', () => {
            cadastrarTarefa(entradaTarefa.value);
            entradaTarefa.value = ''; // Limpando o campo de input
        });
    }

    if (removerTarefaBtn instanceof HTMLButtonElement) {
        removerTarefaBtn.addEventListener('click', () => {
            removerTarefa();
        });
    }

    if ((tarefaRemovida instanceof HTMLInputElement) &&
        (removerTarefaEscolhidaBtn instanceof HTMLButtonElement)) {
        removerTarefaEscolhidaBtn.addEventListener('click', () => {
            removerTarefaEscolhida(tarefaRemovida.value);
            tarefaRemovida.value = ''; // Limpando o campo de input
        });
    }
}

document.addEventListener('DOMContentLoaded', configurarTarefas);
