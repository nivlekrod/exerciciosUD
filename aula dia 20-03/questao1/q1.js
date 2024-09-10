function removerDuplicados(lista) {
    const valoresUnicos = [];
    const listaSemDuplicados = [];

    for (let i of lista) {
        let valor = i;
        if (!valoresUnicos[valor]) {
            valoresUnicos[valor] = valor;
            listaSemDuplicados.push(valor);
        }
    }
    return listaSemDuplicados;
}

let listaComDuplicados = [1, 2, 2, 2, 3, 4, 5, 6, 6];
let listaSemDuplicados = removerDuplicados(listaComDuplicados);
console.log(listaSemDuplicados)