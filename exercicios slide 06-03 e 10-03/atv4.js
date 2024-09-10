const ListaDeCompras = {
  produtos: {
    banana: 2.5,
    leite: 3.0,
    pão: 4.5,
    queijo: 7.0,
  },
};

function calcularTotal(obj) {
  let total = 0;
  for (let produto in obj.produtos) {
    total += obj.produtos[produto];
  }
  return total;
}

console.log(calcularTotal(ListaDeCompras)); // deve imprimir 17.0

// const ListaDeCompras = {
//   produtos: {
//     banana: 2.5,
//     leite: 3.0,
//     pão: 4.5,
//     queijo: 7.0,
//   },
//   calcularTotal: function () {
//     let total = 0;
//     for (const produto in this.produtos) {
//       total += this.produtos[produto];
//     }
//     return total;
//   },
// };

// console.log(ListaDeCompras.calcularTotal()); // deve imprimir 17.0
