//criando um objeto do "tipo" data
var data1 = new Date();
console.log(data1);

//criando um objeto do tipo "data" com data especifica Date()
var data2 = new Date("2005-05-12");
console.log(data2);

var data3 = new Date("2008-03-16");
console.log(`data: ${data3}`);
console.log(`ano: ${data3.getFullYear()}`);
console.log(`mes: ${data3.getMonth()}`);
console.log(`dia: ${data3.getDate()}`);

const mes = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "junho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];
console.log(`retornando o mes por escrito!`);
console.log(`mes: ${mes[data3.getMonth()]}`);

const diaDaSemana = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
];
console.log(`dia da semana: ${diaDaSemana[data3.getDay()]}`);
console.log(`-------------------------------------------------------------`);
const dataNasc = new Date("1999-08-03");
const dataAtual = new Date();

const diferenca = dataAtual.getTime() - dataNasc.getTime();
console.log(`diferenca: ${diferenca}`);
const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
console.log(`idade: ${idade}`);
console.log(`-------------------------------------------------------------`)
const diferencaAnos = dataAtual.getFullYear() - dataNasc.getFullYear()
console.log(`diferenca em anos: ${diferencaAnos}`)

if(dataAtual.getMonth() < dataNasc.getMonth() ||
    (dataAtual.getMonth() === dataNasc.getMonth() &&
    dataAtual.getDate() < dataNasc.getDate())){
        console.log(`ainda não fez niver!`)
        console.log(`idade: ${diferencaAnos - 1}`)
    }
