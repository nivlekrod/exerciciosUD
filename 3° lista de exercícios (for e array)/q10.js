// altura do triângulo
const altura = 5;

// se o triângulo será preenchido ou não
const preenchido = false;

// laço para percorrer cada linha do triângulo
for (let i = 1; i <= altura; i++) {
  let linha = "";

  // laço para construir cada linha do triângulo
  for (let j = 1; j <= i; j++) {
    if (preenchido) {
      linha += "*";
    } else {
      if (i === altura || j === 1 || j === i) {
        linha += "*";
      } else {
        linha += " ";
      }
    }
  }

  console.log(linha);
}
