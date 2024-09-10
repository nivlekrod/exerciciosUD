// criando um objeto para armazenar os dados das duas pessoas
let pessoas = {
    pessoa1: {
        nome: "João",
        idade: 25,
        escolaridade: "Graduação",
        ondeEstuda: "Universidade X"
    },
    pessoa2: {
        nome: "Maria",
        idade: 32,
        escolaridade: "Pós-graduação",
        ondeEstuda: "Universidade Y"
    }
};

// mostrando os dados das duas pessoas
console.log("Dados da pessoa 1:");
console.log("- Nome: " + pessoas.pessoa1.nome);
console.log("- Idade: " + pessoas.pessoa1.idade);
console.log("- Escolaridade: " + pessoas.pessoa1.escolaridade);
console.log("- Onde estuda: " + pessoas.pessoa1.ondeEstuda);

console.log("Dados da pessoa 2:");
console.log("- Nome: " + pessoas.pessoa2.nome);
console.log("- Idade: " + pessoas.pessoa2.idade);
console.log("- Escolaridade: " + pessoas.pessoa2.escolaridade);
console.log("- Onde estuda: " + pessoas.pessoa2.ondeEstuda);
