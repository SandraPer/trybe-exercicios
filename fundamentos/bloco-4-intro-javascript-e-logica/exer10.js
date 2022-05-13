const custoProduto = 20;
const valorVenda = 50;
const impostoProduto = 20;
const impostoSobreOCusto = 4;

let lucro = custoProduto - impostoSobreOCusto;
console.log("Esse é o valor do imposto sobre cada produto:" + lucro);

let valorTotal = lucro - valorVenda;
console.log("Esse é o valor do produto menos imposto:" + valorTotal);

let valorDoLucroMult = valorTotal * 1000;
console.log("Esse é o valor do lucro do produto multiplicado por 1000:" + valorDoLucroMult);
