function fraseCaract() {
  // Frase em maiscula
  let fraseMai = document.getElementById('fraseInput').value;
  console.log(fraseMai);
  document.getElementById(
    'fraseMaiuscula'
  ).innerText = `Frase em Maiúscula: ${fraseMai.toUpperCase()}`;

  // Frase em minuscula
  let fraseMin = document.getElementById('fraseInput').value;
  console.log(fraseMin);
  document.getElementById(
    'fraseMinuscula'
  ).innerText = `Frase em Minúscula: ${fraseMin.toLowerCase()}`;

  // Tamanho da frase
  let fraseTam = document.getElementById('fraseInput').value;
  console.log(fraseTam);
  document.getElementById(
    'fraseTamanho'
  ).innerText = `Tamanho da frase: ${fraseTam.length}`;
}
