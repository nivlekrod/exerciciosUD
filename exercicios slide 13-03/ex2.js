function palavrasComLetra(strings, letra) {
  const palavrasComLetra = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].toLowerCase() === letra.toLowerCase()) {
      palavrasComLetra.push(strings[i]);
      console.log(palavrasComLetra)
    }
  }
  return `A letra ${letra} aparece ${palavrasComLetra.length} vezes`;
}

console.log(palavrasComLetra("banana", "N"));