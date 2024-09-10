function UsuarioInfo(id, callback){
    const Usuario = {
      id: id,
      nome:'Marcos',
      email: 'marcos@mail.com'
    }
    callback(Usuario)
}

function MostrarNoTerminal(dados){
  const result = dados;
  console.log(`ID: ${result.id}`);
  console.log(`ID: ${result.nome}`);
  console.log(`ID: ${result.email}`);
  console.log('')
}
UsuarioInfo(3,MostrarNoTerminal);
