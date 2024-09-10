// criando um array com 10 números aleatórios
let numeros = [];
for (let i = 0; i < 10; i++) {
  numeros.push(Math.floor(Math.random() * 10) + 1);
}

// calculando a multiplicação entre os elementos do array
var resultado = 1;
for (let i = 0; i < numeros.length; i++) {
  resultado *= numeros[i];
}

// imprimindo o resultado da multiplicação
console.log("Resultado da multiplicação: " + resultado);

// verificando se o resultado é par ou ímpar
if (resultado % 2 == 0) {
  console.log("O resultado é par.");
} else {
  console.log("O resultado é ímpar.");
}

// verificando se o resultado é primo ou não
var primo = true;
for (let i = 2; i < resultado; i++) {
  if (resultado % i == 0) {
    primo = false;
  }
}
if (primo) {
  console.log("O resultado é primo.");
} else {
  console.log("O resultado não é primo.");
}
