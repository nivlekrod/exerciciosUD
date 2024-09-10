let listaNum = [10, 20, 30];

// (10 + 20 + 30)/3

//SEM REPETIÇÃO
const media = (listaNum[0] + listaNum[1] + listaNum[2])/listaNum.length


//USANDO FOR
let soma = 0;
for (let i = 0; i < listaNum.length; i++) {
  soma += listaNum[i]; //soma + listaNum[i]
}

// let media = soma/listaNum.length -> caso use o for

console.log(`A média dos valores é: ${media}`)