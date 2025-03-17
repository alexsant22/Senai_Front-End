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
        } */

    } else {
        alert("Por favor, insira um valor válido!")
    }
}

const configurarTarefas = () => {
    let entradaTarefa = document.getElementById('tarefaInput');
    let cadastrarTarefaBtn = document.getElementById('cadastarTarefaBtn');

    //prettier-ignore
    if ((cadastrarTarefaBtn instanceof HTMLButtonElement) && 
        (entradaTarefa instanceof HTMLInputElement)) {
        cadastrarTarefaBtn.addEventListener('click', () => {
            cadastrarTarefa(entradaTarefa.value);
            entradaTarefa.value = '';
        });
    }
}

document.addEventListener('DOMContentLoaded', configurarTarefas);