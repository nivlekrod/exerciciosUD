// criando a lista de compras
let listaDeCompras = ["Arroz", "Feijão", "Carne", "Leite"];

// adicionando um item esquecido na lista
listaDeCompras.push("Pão");

// mostrando a lista de compras atualizada
console.log("Minha lista de compras é:");
for (var i = 0; i < listaDeCompras.length; i++) {
    console.log(`- ${listaDeCompras[i]}`);
}
