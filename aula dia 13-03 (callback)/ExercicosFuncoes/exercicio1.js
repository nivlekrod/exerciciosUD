function VerificaMaior(idade){
  if(idade >= 18){
    return 'Maior de Idade';
  } else {
    return 'Menor de Idade';
  }
}
console.log(VerificaMaior(20));