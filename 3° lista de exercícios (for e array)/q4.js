/*
4 - Escreva um programa que lê o tamanho do lado de um quadrado e imprime
um quadrado daquele tamanho com asteriscos. Seu programa deve
funcionar para quadrados com lados de todos os tamanhos entre 1 e 20.
*/

let lado = 5;
let aux = ""
if (lado >= 1 && lado <= 20){
  for (let i = 1; i <= lado; i++) {
    for(let j = 1; j <= lado; j++) {
        aux += "*"
      }
    console.log(aux);
    aux = ""
  }
}