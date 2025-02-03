function areaTrapezio() {
  let baseMaiorInput = document.getElementById('bMaiorInput');
  let baseMaior;

  let baseMenorInput = document.getElementById('bMenorInput');
  let baseMenor;

  let altuInput = document.getElementById('alturaInput');
  let altura;

  if (
    baseMaiorInput instanceof HTMLInputElement &&
    baseMenorInput instanceof HTMLInputElement &&
    altuInput instanceof HTMLInputElement
  ) {
    baseMaior = parseFloat(baseMaiorInput.value);
    baseMenor = parseFloat(baseMenorInput.value);
    altura = parseFloat(altuInput.value);
    //prettier-ignore
    console.log(typeof (baseMaior));
    //prettier-ignore
    console.log(typeof (baseMenor));
    //prettier-ignore
    console.log(typeof (altura));
  }

  document.body.insertAdjacentHTML(
    'beforeend',
    'Resultado: ' + ((baseMaior + baseMenor) * altura) / 2
  );
}
