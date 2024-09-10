const array_numeros = [1,2,3,5,6];

function multiplicarPorDois(array, callback){
  const resultado = [];
  for(let i in array){
      resultado.push(callback(array[i]));
  }
  return resultado;
}

function dobrarNumero(numero){
  return numero * 2;
}

const numerosDobrados = multiplicarPorDois(array_numeros, dobrarNumero);
console.log(numerosDobrados);
