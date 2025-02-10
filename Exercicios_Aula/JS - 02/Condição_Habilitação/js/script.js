function validarIdade() {
  let idadeInput = document.getElementById('idadeInput');
  let saida = document.getElementById('saida');

  if (idadeInput instanceof HTMLInputElement) {
    let idade = parseInt(idadeInput.value);
    if (saida != null) {
      if (idade >= 18) {
        saida.textContent = 'Pode fazer o exame de habilitação!';
      } else {
        saida.textContent = 'Não pode fazer o exame de habilitação.';
      }
    }
  }
}

function main() {
  let validarIdadeBtn = document.getElementById('validarIdadeBtn');
  if (validarIdadeBtn) {
    validarIdadeBtn.addEventListener('click', validarIdade);
  }
}

document.addEventListener('DOMContentLoaded', main);
