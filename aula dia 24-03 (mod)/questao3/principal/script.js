async function PegarDadosPessoas() {
    return await new Promise((resolve, reject) => {
        const pessoas = [
            {nome: "Kelvin", idade: 17},
            {nome: "Heloysa", idade: 20},
            {nome: "Lorena", idade: 23}
        ]

        let contadorMaior18 = 0
        for (let i of pessoas) {
            if(i.idade >= 18){
                contadorMaior18++;
            }
        }

        resolve(contadorMaior18)
    })
}

PegarDadosPessoas().then(resposta => console.log(`Tem ${resposta}`))
.catch(error => console.error(error))