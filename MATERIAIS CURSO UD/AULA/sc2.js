let opcao = "+"; // +, -, *, /
let n1 = 5;
let n2 = 10;

switch (opcao) {
  case "+":
    console.log(`O resultado da soma é ${n1 + n2} `);
    break;
  case "-":
    console.log(`O resultado da subtração é ${n1 - n2} `);
    break;
  case "*":
    console.log(`O resultado da multiplicação é ${n1 * n2} `);
    break;
  case "/":
    console.log(`O resultado da divisão é ${n1 / n2} `);
    break;
  default:
    console.log(`Não tem essa opção`);
    break;
}
