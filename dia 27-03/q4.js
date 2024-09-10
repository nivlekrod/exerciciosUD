async function ContaBancaria(param) {
  return await new Promise((resolve, reject) => {
    const dados_clientes = [
      {
        id: 1,
        nome: "Clara",
        saldo: 0,
      },
      {
        id: 2,
        nome: "Marcos",
        saldo: 2300,
      },
    ];

    if (param) {
      if (param != NaN) {
        if (dados_clientes[param].saldo > 0) {
          resolve(
            `O cliente ${dados_clientes[param].nome} tem o saldo de ${dados_clientes[param].saldo},00 reais`
          );
        } else {
          resolve(
            `O cliente ${dados_clientes[param].nome} não tem saldo na sua conta`
          );
        }
      }
    } else {
      resolve(`Lista de Clientes \n ${dados_clientes}`);
    }
  });
}

//Pega apenas um dado, de acordo com um parametro
ContaBancaria(0).then((response) => {
  console.log(response);
});

//Pega todos os dados
ContaBancaria().then((response) => {
  console.log(response);
});