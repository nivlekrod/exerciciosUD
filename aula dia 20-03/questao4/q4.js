async function pegarFilmes(g) {
  return await new Promise((resolve, reject) => {
    const filmes = [
      { nome: "Matrix", genero: "Ficção Cientifica" },
      { nome: "Harry Potter", genero: "Fantasia" },
      { nome: "Barbie", genero: "Fantasia" },
    ];

    if (g) {
      let filmesGen = [];
      for (let i of filmes) {
        if (i.genero === g) {
          filmesGen.push(i.nome);
        }
      }
      resolve(filmesGen);
    } else {
      resolve(filmes);
    }
  });
}
//Apenas para mostrar todos os filmes
pegarFilmes().then(resposta => console.log(resposta)).catch(error => console.error(error));

//Para mostrar apenas os filmes com o parametro dado
pegarFilmes('Ficção Cientifica').then(resposta => console.log(resposta));