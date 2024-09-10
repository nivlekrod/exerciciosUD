/*
1 -Crie um programa que leia 6 valores inteiros de um array e, em seguida,
mostre na tela os valores lidos na ordem inversa.

*/

// Criando o array com os valores
let valores = [1, 2, 3, 4, 5, 6];

// Criando um novo array para armazenar os valores invertidos
let valoresInvertidos = [];

// Invertendo a ordem dos valores manualmente e adicionando no novo array
for (let i = valores.length - 1; i >= 0; i--) {
  valoresInvertidos.push(valores[i]);
}

console.log(valoresInvertidos)