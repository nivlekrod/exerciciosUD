function exibirMensagem(arg){
  console.log(`Resultado : " ${arg} "`);
}

async function DadosApi(api, callback){
  const resultados = await fetch(api);
  const dados = await resultados.json();
  callback(dados.value);
 
}

DadosApi('https://api.chucknorris.io/jokes/random', exibirMensagem);
  


