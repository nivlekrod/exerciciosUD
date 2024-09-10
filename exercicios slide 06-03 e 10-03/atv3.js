function filtraStringsPorTamanho(strings) {
  const novaArray = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > 5) {
      novaArray.push(strings[i]);
    }
  }
  return novaArray;
}
console.log(filtraStringsPorTamanho(["maça", "banana", "laranja", "kiwi"]));
