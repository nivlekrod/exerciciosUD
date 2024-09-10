/*
5 - Faça um programa que possua um vetor denominado A que armazene 6
números inteiros. O programa deve executar os seguintes passos:
(a) Atribua os seguintes valores a esse vetor: 1, 0, 5, -2, -5, 7.
(b) Armazene em uma variável inteira (simples) a soma entre os valores das
posições A[0], A[1] e A[5] do vetor e mostre na tela esta soma.
(c) Modifique o vetor na posição 4, atribuindo a esta posição o valor 100.
(d) Mostre na tela cada valor do vetor A, um em cada linha.
*/

// (a) criando o vetor A com os valores especificados
let A = [1, 0, 5, -2, -5, 7];

// (b) calculando a soma das posições especificadas e mostrando na tela
let soma = A[0] + A[1] + A[5];
console.log(`A soma dos valores das posições A[0], A[1] e A[5] é: ${soma}`);

// (c) modificando o valor da posição 4 para 100
A[4] = 100;

// (d) mostrando cada valor do vetor A em uma linha separada
console.log("Os valores do vetor A são:");
for (let i = 0; i < A.length; i++) {
  console.log(A[i]);
}
