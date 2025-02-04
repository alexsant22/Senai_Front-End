function media() {
  // Pegando dados e verificando
  let nota1 = document.getElementById('nota1').value;
  console.log(nota1);
  let nota2 = document.getElementById('nota2').value;
  console.log(nota2);
  let nota3 = document.getElementById('nota3').value;
  console.log(nota3);

  // Fazendo parse
  let n1 = parseFloat(nota1);
  let n2 = parseFloat(nota2);
  let n3 = parseFloat(nota3);

  // Calculando média e exibindo
  document.getElementById('resultado').innerText = `Sua média é: ${
    (n1 + n2 + n3) / 3
  }`;
}
