async function PegarDadosPessoas(){
  return await new Promise((resolve, reject) => {
    const pessoas = [
      {nome: "Caio", idade: 18},
      {nome: "João", idade: 10},
      {nome: "Clara", idade: 20}
    ]

  let contadorMaior18 = 0; 
  for(let i of pessoas){
    if(i.idade >= 18){
      contadorMaior18++;
    } 
  }
  resolve(contadorMaior18)
  });
};
  
PegarDadosPessoas().then(resposta => console.log(`Tem ${resposta}`)).catch(error => console.log(error));