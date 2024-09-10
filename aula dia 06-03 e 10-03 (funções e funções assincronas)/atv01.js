/**
 * Implemente uma função que recebe um número e
 * verifica se ele é par ou ímpar usando uma 
 * estrutura de controle if/else.
 */
function ParOuImpar(num) {
    if (num % 2 === 0) {
        return "O numero é par"
    } else {
        return "O numero é ímpar"
    }
}
console.log(ParOuImpar(3))