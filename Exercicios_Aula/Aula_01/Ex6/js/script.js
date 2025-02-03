function mostrarResultado() {
  const disciplinaSelecionada = document.getElementById('disciplina').value;
  document.getElementById(
    'resultado'
  ).innerText = `Olá! Você escolheu: ${disciplinaSelecionada}`;
}
