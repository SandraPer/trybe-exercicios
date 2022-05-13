let aliquoINSS;
let aliquoIR;

const salario = 3000;

if (salario <= 1556.94) {
  aliquoINSS = salario * 0.08;
} else if (salario <= 2594.82) {
  aliquoINSS = salario * 0.09;
} else if (salario <= 5189.82) {
  aliquoINSS = salario * 0.11;
} else {
  aliquoINSS = 570.88;
}

const baseSalario = salario - aliquoINSS;

if (baseSalario <= 1903.99) {
  aliquoIR = 0;
} else if (baseSalario <= 2826.65) {
  aliquoIR = baseSalario * 0.075 - 142.8;
} else if (baseSalario <= 3751.05) {
  aliquoIR = baseSalario * 0.15 - 354.8;
} else if (baseSalario <= 4664.68) {
  aliquoIR = baseSalario * 0.225 - 636.13;
} else {
  aliquoIR = baseSalario * 0.275 - 869.36;
}
