function saudacao(nome) {
  console.log(`olá ${nome}, seja bem vindo`);
}
saudacao("Latte");
saudacao("Espresso");
saudacao("Madalena");

function somar(valor1, valor2) {
  return valor1 + valor2;
}
console.log(`5 + 3 = ${somar(5, 3)}`);
console.log(`12 + 8 = ${somar(12, 8)}`);
console.log(`6,5 + 2,12 = ${somar(6.5, 2.12)}`);

var v1 = 9;
var v2 = 6;
console.log(`v1 + v2 = ${somar(v1, v2)}`);

function desconto(valorVenda, desc) {
    return (valorVenda+desc) / 100
}

var totalPedido = 300
var totalDesconto = desconto(totalPedido, 5)

console.log(`-------------------------------`)
console.log(`total do pedido: R${totalPedido}`)
console.log(`total dos descotos: R${totalDesconto}`)
console.log(`volar final da venda: R${totalPedido - totalDesconto}`)
console.log(`-------------------------------`)

//criando uma função que apresenta uma pessoa
function apresentaPessoa(nome,idade,cidade) {
    console.log(`apresento para voces: ${nome}, que tem ${idade} e more em ${cidade}`)
}
apresentaPessoa("Affogato", 24, "Reino Cacao Escuro")