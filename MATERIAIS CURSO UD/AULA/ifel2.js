let anoNascimento = 2008;
let anoVotacao = new Date().getFullYear()
let idadePessoa = anoVotacao - anoNascimento;

if (idadePessoa >= 16) {
    console.log("Pode votar")
} else {
    console.log("Não pode votar")
}