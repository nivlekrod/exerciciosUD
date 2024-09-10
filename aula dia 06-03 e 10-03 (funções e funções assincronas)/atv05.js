const somaQuadradosPares = (arr) => {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 ===0) {
            soma += arr[i] ** 2
        }
    }
    // for (let num of arr) {
    //     if (num%2 === 0) {
    //         soma += num**2;
    //     }
    // }
    return soma;
};
const entrada = [1,2,3,4,5,6];
const resultado = somaQuadradosPares(entrada)
console.log(resultado)