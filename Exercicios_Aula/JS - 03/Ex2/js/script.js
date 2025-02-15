function sumRange() {
  let soma = 0;
  // Pegando infos e parse
  let number = parseInt(
    prompt("Digite um número para somar (ou -1 para sair):")
  );

  // Loop para soma
  while (number !== -1) {
    if (!isNaN(number)) {
      soma += number;
    } else {
      alert("Por favor, digite um número válido.");
    }
    number = parseInt(prompt("Digite um número para somar (ou -1 para sair):"))
  }
  alert(`A soma total é: ${soma}`)
}

sumRange();