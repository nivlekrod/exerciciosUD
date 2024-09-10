// criando o objeto com os usuários
let usuarios = [
    {
        nome: "João",
        profissao: "Engenheiro",
        idade: 30,
        habilidades: ["JavaScript", "Node.js", "React", "SQL"]
    },
    {
        nome: "Maria",
        profissao: "Médica",
        idade: 28,
        habilidades: ["Anatomia", "Cardiologia", "Cirurgia", "Emergência"]
    }
];

// obtendo o tamanho da lista de habilidades de cada usuário
let tamanhoHabilidadesJoao = usuarios[0].habilidades.length;
let tamanhoHabilidadesMaria = usuarios[1].habilidades.length;

// obtendo a primeira e última habilidade de cada usuário
let primeiraHabilidadeJoao = usuarios[0].habilidades[0];
let ultimaHabilidadeJoao = usuarios[0].habilidades[tamanhoHabilidadesJoao - 1];
let primeiraHabilidadeMaria = usuarios[1].habilidades[0];
let ultimaHabilidadeMaria = usuarios[1].habilidades[tamanhoHabilidadesMaria - 1];

// imprimindo os resultados
console.log("Tamanho da lista de habilidades do João: " + tamanhoHabilidadesJoao);
console.log("Tamanho da lista de habilidades da Maria: " + tamanhoHabilidadesMaria);
console.log("Primeira habilidade do João: " + primeiraHabilidadeJoao);
console.log("Última habilidade do João: " + ultimaHabilidadeJoao);
console.log("Primeira habilidade da Maria: " + primeiraHabilidadeMaria);
console.log("Última habilidade da Maria: " + ultimaHabilidadeMaria);
