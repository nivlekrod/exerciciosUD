function soma(n1, n2, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultado = n1 + n2;
      if (typeof resultado !== "number") {
        reject("erro");
      } else {
        resolve(resultado);
      }
    }, delay);
  });
}

console.log("iniciando operação assincrona de soma de números..")

soma(2, 5, 2000).then((resultado) => {
    console.log(`Resultado: ${resultado}`)
})
.catch((error) => {
    console.error(error)
})