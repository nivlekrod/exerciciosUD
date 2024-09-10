/*
2 - Faça um programa para ler a nota da prova de 15 alunos e armazene num
vetor, calcule e imprima a média geral.
*/

// Criando o vetor para armazenar as notas
let notas = [10, 8, 7, 5, 9, 2, 9.5, 6.4, 0, 10, 3, 2, 9, 10, 6];

// Calculando a média geral
let soma = 0;
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}
const media = soma / notas.length;

// Exibindo a média geral
console.log(`A média geral é: ${media}`);