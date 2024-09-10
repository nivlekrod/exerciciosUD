async function NumeroAleatorio(numero) {
  return await new Promise((resolve, reject) => {
    let numeroAleatorio = 0;
    if (numero) {
      numeroAleatorio = Math.floor(Math.random() * numero) + 1;
      resolve(numeroAleatorio);
    } else {
      numeroAleatorio = Math.floor(Math.random() * 10) + 1;
      resolve(numeroAleatorio);
    }
  });
}
NumeroAleatorio()
  .then((resposta) => console.log("Numero gerado:", resposta))