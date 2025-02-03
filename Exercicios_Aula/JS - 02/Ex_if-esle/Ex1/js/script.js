function positivoNegativo() {
  let num = document.getElementById('numInput').value;
  console.log(num);

  let numero = parseFloat(num);
  //prettier-ignore
  console.log(typeof (numero));

  // Verificando valor
  if (numero > 0) {
    document.getElementById('resultado').innerText = `Seu número é positivo!`;
  } else if (numero < 0) {
    document.getElementById('resultado').innerText = `Seu número é negativo!`;
  } else {
    document.getElementById(
      'resultado'
    ).innerText = `Seu número é igual a zero!`;
  }
}
