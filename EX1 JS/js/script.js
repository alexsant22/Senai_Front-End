console.log('Olá, Mundo!');
//document.body.insertAdjacentElement('beforeend', Olá, Mundo!);

/*var saida = 'Global';

function metodo() {
  var saida2 = 'Local';
  return saida2;
}

console.log(saida);
console.log(metodo());*/

/*let menor = 'Menor de Idade';
let maior = 'Maior de Idade';

let idade = 20;

if (idade >= 18) {
  console.log(maior);
} else {
  console.log(menor);
}*/

// let saida1 = 'Algum texto';
// let saida2 = 20;
// let saida3 = true;
// let saida4;

// console.log(typeof saida1);
// console.log(typeof saida2);
// console.log(typeof saida3);
// console.log(typeof saida4);

// let nameUser = prompt('Digite seu nome:');
// document.body.insertAdjacentHTML('beforeend', 'Olá, ' + nameUser + '!');

// function exibirNome() {
//   let elemento = document.getElementById('nomeInput');
//   let nome;

//   if (elemento instanceof HTMLInputElement) {
//     nome = elemento.value;
//   }
//   document.body.insertAdjacentHTML('beforeend', 'Olá, ' + nome + '!');
// }

function exibirAulaSelecionada() {
  let selecaoAula = document.getElementById('selecionarAula');

  if (selecaoAula instanceof HTMLSelectElement) {
    let i = selecaoAula.selectedIndex;
    let selecionada = selecaoAula.options[i].value;
    document.body.insertAdjacentHTML(
      'beforeend',
      'Aula Selecionada: ' + selecionada
    );
  }
}
