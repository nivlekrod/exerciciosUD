let estados = ["Amapá", "São Paulo", "Rio de Janeiro", "Santa Catarina"];

let resultado = estados.filter((valor) => {
    if(valor.toLocaleLowerCase().charAt(0) === "s") {
        return valor;
    }
})
console.log(resultado)