function palavrasComLetra(strings, letra) {
  const palavrasComLetra = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].toLowerCase() === letra.toLowerCase()) {
      palavrasComLetra.push(strings[i]);
    }
  }
  return `A letra ${letra} aparece ${palavrasComLetra.length} vezes`;
}

console.log(palavrasComLetra("Eu gosto de programar", "M"));
//Agora, escreva uma função chamada palavrasComLetra que recebe um array de strings e uma letra como parâmetros e retorna um novo array contendo todas as palavras que contêm a letra especificada.
