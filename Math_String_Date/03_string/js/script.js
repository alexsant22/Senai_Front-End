function configurar() {
  let botaoSubstituirString = document.getElementById('substituirStringBtn');
  let frase = document.getElementById('frase');
  let palavraAlvo = document.getElementById('palavraAlvo');
  let palavraSubstituta = document.getElementById('palavraSubstituta');

  //prettier-ignore
  if ((botaoSubstituirString instanceof HTMLButtonElement) && (frase instanceof HTMLInputElement) && 
  (palavraAlvo instanceof HTMLInputElement) && (palavraSubstituta instanceof HTMLInputElement)){
    botaoSubstituirString.addEventListener('click', () =>{
      let resultado = substituirString(frase.value, palavraAlvo.value, palavraSubstituta.value);
      frase.value = ''; 
      palavraAlvo.value = ''; 
      palavraSubstituta.value = '';  
      
      exibirConteudo(resultado);
    });
  }
}

function substituirString(frase, palavraAlvo, palavraSubstituta) {
  let resultado = frase;
  //includes é usado para verificar se uma string contém outra string.
  // o while aqui é usado para garantir que todas as ocorrências da palavra alvo 
  // (palavraAlvo) sejam substituídas pela palavra substituta (palavraSubstituta)
  while (resultado.includes(palavraAlvo)) {
    resultado = resultado.replace(palavraAlvo, palavraSubstituta);
  }
  return resultado;
}

function exibirConteudo(resultado) {
  let saida = document.getElementById('resultado');

  if (saida instanceof HTMLParagraphElement) {
    saida.textContent = resultado;
  }
}

document.addEventListener('DOMContentLoaded', configurar);
