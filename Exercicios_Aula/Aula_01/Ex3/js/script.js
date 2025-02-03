let tempCelsius = prompt("Digite a temperatura em Celsius:");

let fahrenheit = (Number(tempCelsius) * 9/5) + 32;
let kelvin = Number(tempCelsius) + 273.15;

console.log(fahrenheit); //Testando resultados
console.log(kelvin); //Testando resultados

document.body.insertAdjacentHTML('afterbegin', 'Fahrenheit: ' + fahrenheit);

document.body.insertAdjacentHTML('beforeend', 'Kelvin: ' + kelvin);