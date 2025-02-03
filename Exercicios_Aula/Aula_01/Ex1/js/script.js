function exibirNum() {
  let numeroInput = document.getElementById('numInput');
  let num;

  if (numeroInput instanceof HTMLInputElement) {
    num = numeroInput.value;
    //prettier-ignore
    console.log(typeof (num));
  }
  document.body.insertAdjacentHTML(
    'beforeend',
    'Antecessor: ' + (Number(num) - 1) + ' Sucessor: ' + (Number(num) + 1)
  );
}
