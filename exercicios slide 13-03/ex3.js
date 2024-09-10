exibir = (arg) => {
  console.log(`O resultado da operação é ${arg}`);
};

soma = (a, b, callback) => {
  let op = a + b;
  callback(op);
};

multiplicacao = (a, b, callback) => {
  let op = a * b;
  callback(op);
};

soma(1, 2, exibir);
multiplicacao(2, 4, exibir);
