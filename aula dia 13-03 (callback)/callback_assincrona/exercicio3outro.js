function UsuarioInfo(id, callback){
  console.log('Carregando...')
  setTimeout(() =>{
    const Usuario = {
      id: id,
      nome:'Marcos',
      email: 'marcos@mail.com'
    }
    callback(Usuario)
  }, 2000);
}
async function MostrarNoTerminal(dados){
  const result = await dados;
  console.log(`ID: ${result.id}`);
  console.log(`ID: ${result.nome}`);
  console.log(`ID: ${result.email}`);
  console.log('Finalizado...')
}

UsuarioInfo(3,MostrarNoTerminal);