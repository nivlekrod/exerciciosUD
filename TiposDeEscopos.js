//ESCOPO GLOBAL:
var g = "Kelvin";
function escopoGlobal() {
  function funcInterna() {
    console.log(g); //g é Global, então é acessível
  };
  funcInterna();
}
escopoGlobal();

// //ESCOPO DA FUNÇÃO:
// var nome = "Kelvin";
// function escopoFunc() {
//     var idade = 20;
//     console.log(nome); //nome é Global
//     console.log(idade); // idade faz parte do escopo da função, então é acessível
// }
// escopoFunc();
// console.log(nome);
// console.log(idade); //idade faz parte do escopo da função, então não é acessível por estar fora dela

//ESCOPO DE BLOCO:
function escopoBloco() {
    if(true) {
        let nome_idade = "Kelvin " + 20;
        console.log(nome_idade);
    }
    console.log(nome_idade); //nome_idade está fora do bloco, logo não é acessível
}
escopoBloco();