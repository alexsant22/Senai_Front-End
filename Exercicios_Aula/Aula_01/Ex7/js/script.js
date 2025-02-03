function calcularDesconto() {
  const precoProduto = parseFloat(document.getElementById('produto').value);
  const percentualDesconto = parseFloat(
    document.getElementById('desconto').value
  );

  const valorDesconto = (precoProduto * percentualDesconto) / 100;
  const precoFinal = precoProduto - valorDesconto;

  document.getElementById(
    'resultado'
  ).innerText = `Preço final com desconto: R$ ${precoFinal.toFixed(2)}`;
}
