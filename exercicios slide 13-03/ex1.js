function VerificaIdade(idade){
    if(idade >= 18){
        return "Maior de Idade"
    } else {
        return "Menor de Idade"
    }
}
console.log(VerificaIdade(20));