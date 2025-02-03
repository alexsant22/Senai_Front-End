function numMes() {
  const mes = document.getElementById('mesAno').value;
  console.log(mes);

  // Verificando mes
  if (mes == 'jan') {
    document.getElementById('resultado').innerText = `O número do seu mês é 01`;
  } else if (mes == 'fev') {
    document.getElementById('resultado').innerText = `O número do seu mês é 02`;
  } else if (mes == 'mar') {
    document.getElementById('resultado').innerText = `O número do seu mês é 03`;
  } else if (mes == 'abr') {
    document.getElementById('resultado').innerText = `O número do seu mês é 04`;
  } else if (mes == 'mai') {
    document.getElementById('resultado').innerText = `O número do seu mês é 05`;
  } else if (mes == 'jun') {
    document.getElementById('resultado').innerText = `O número do seu mês é 06`;
  } else if (mes == 'jul') {
    document.getElementById('resultado').innerText = `O número do seu mês é 07`;
  } else if (mes == 'ago') {
    document.getElementById('resultado').innerText = `O número do seu mês é 08`;
  } else if (mes == 'set') {
    document.getElementById('resultado').innerText = `O número do seu mês é 09`;
  } else if (mes == 'out') {
    document.getElementById('resultado').innerText = `O número do seu mês é 10`;
  } else if (mes == 'nov') {
    document.getElementById('resultado').innerText = `O número do seu mês é 11`;
  } else {
    document.getElementById('resultado').innerText = `O número do seu mês é 12`;
  }
}
