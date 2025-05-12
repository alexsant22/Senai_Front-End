export default class GeradorNumeros {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  geradorNumeros(quantidade) {
    let numeros = [];

    for (let i = 0; i < quantidade; i++) {
      let numeroGerado = Math.floor(Math.random() * this.max) + this.min;
      numeros.push(numeroGerado);
    }
    return numeros;
  }
}
