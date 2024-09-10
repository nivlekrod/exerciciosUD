exibir = (arg) => {
  console.log(`O resultado da operação é ${arg}`);
}

soma = (a,b,cb) => {
  let op = a + b;
  cb(op);
}


multiplicacao = (a,b,cb) => {
  let op = a * b;
  cb(op);
}

soma(1,2,exibir);
multiplicacao(2,4,exibir);


