function somaNumero(numeros) {
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]; // soma = soma + posiçao do numero
    }
    return soma;
}
console.log(somaNumero([1, 2, 3, 4, 5]));