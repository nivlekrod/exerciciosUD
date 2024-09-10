let permissao = "diretor"
permissao = permissao.toUpperCase()
/*Poderia utilizar só o permissao.toUpperCase() como condição
  sem mudar o valor da variavel, como feito acima*/

switch (permissao) {
    case "COMUM":
        console.log(`Sua permissão é ${permissao}`)
        break;
    case "GERENTE":
        console.log(`Sua permissão é de ${permissao}`)
        break;
    case "DIRETOR":
        console.log(`Sua permissão é de ${permissao}`)
        break;
    default:
        console.log(`Você não tem nenhuma permissão`)
}