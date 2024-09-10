async function PegarMaisVelho_Novo(param) {
    return await new Promise((resolve, reject) => {
      const Pessoas = [
        { nome: "Jorge", idade: 15 },
        { nome: "José", idade: 50 },
        { nome: "Marcos", idade: 30 },
      ];
  
      let MaisVelho = Pessoas[0];
      let MaisNovo = Pessoas[0];
      for (let i of Pessoas) {
        if (i.idade > MaisVelho.idade) {
          MaisVelho = i;
        }
      }
      for (let i of Pessoas) {
        if (i.idade < MaisVelho.idade) {
          MaisNovo = i;
        }
      }
      if (param === 1) {
        resolve(MaisVelho.nome);
      } else if(param === 2) {
        resolve(MaisNovo.nome);
      }
    });
  }
  //Mais velho
  PegarMaisVelho_Novo(2).then((response) => {
    console.log(`A pessoa é ${response}`);
  });
  PegarMaisVelho_Novo(1).then((response) => {
    console.log(`A pessoa é ${response}`);
  });