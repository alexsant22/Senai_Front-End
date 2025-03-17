let arrayTarefa = [];

function exibirConteudo () {
    let saida = document.getElementById('resultado');
    if (saida instanceof HTMLParagraphElement) {
        saida.textContent = arrayTarefa.join(', ');
    }
}

function cadastrarTarefa (tarefa) {
    if (tarefa) {
        arrayTarefa.push(tarefa);
        exibirConteudo();

        /* Pode ser feito dessa forma */
        /* const exibirConteudo = () => {
            let saida = document.getElementById('resultado');
            if (saida instanceof HTMLParagraphElement) {
                saida.textContent = arrayTarefa.join(', ');
            }
        }
        exibirConteudo(); */

    } else {
        alert("Por favor, insira um valor válido!")
    }
}

function removerTarefa () {
    if (arrayTarefa.length > 0) {
        arrayTarefa.pop();
        exibirConteudo();
    } else {
        alert("Não existem tarefas cadastradas!")
    }
}

function removerTarefaEscolhida (tarefa) {
    let i = arrayTarefa.indexOf(tarefa);

    if (arrayTarefa.length > 0) {
        arrayTarefa.splice(i, 1);
        exibirConteudo();
    } else {
        alert("Não existem tarefas cadastradas!")
    }
}

const configurarTarefas = () => {
    let entradaTarefa = document.getElementById('tarefaInput');
    let cadastrarTarefaBtn = document.getElementById('cadastarTarefaBtn');
    let removerTarefaBtn = document.getElementById('removerTarefaBtn');

    let tarefaRemovida = document.getElementById('tarefaRemovida')
    let removerTarefaEscolhidaBtn = document.getElementById('removerTarefaEscolhidaBtn');

    //prettier-ignore
    if ((cadastrarTarefaBtn instanceof HTMLButtonElement) && 
        (entradaTarefa instanceof HTMLInputElement)) {
        cadastrarTarefaBtn.addEventListener('click', () => {
            cadastrarTarefa(entradaTarefa.value);
            entradaTarefa.value = '';
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
                tarefaRemovida.value = '';
            });
    }
}

document.addEventListener('DOMContentLoaded', configurarTarefas);