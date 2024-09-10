/*
3 - Utilizando uma estrutura de repetição, faça um programa que calcule o
fatorial de um número inteiro qualquer, no final do programa mostre o
resultado.
*/

// Definindo o número inteiro
let n = 5;

// Calculando o fatorial
let fatorial = 1;
for (let i = 1; i <= n; i++) {
  fatorial *= i;
}

// Exibindo o resultado
console.log(`O fatorial de ${n} é: ${fatorial}`);