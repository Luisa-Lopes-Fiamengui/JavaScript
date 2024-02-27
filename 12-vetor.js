const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

console.log(numeros[2]);

//criando variedades de tipo array (vetores)

var dinos = ["tiranossauro rex", "estegossauro", "anquilossauro"];
console.log(dinos); //retorna todos os itens do array
console.log(dinos[0]); //retorna o primeiro indice do array
console.log("");
console.log(dinos); //cria tabela com os itens do array
console.log("o vetor tem", dinos.length, "elementos"); //mostrando quantidade de itens

//adicionando elementos ao vetor existente
dinos.push("brontossauro", "velociraptor"); //array.push adiciona um item no final do vetor
console.table(dinos);

dinos.unshift("triceraptops"); //adiciona itens no inicio do array
console.table(dinos);

//alterando elementos com base no indice (posiçao)
dinos[3] = "titanossauro";
console.table(dinos);

//obtendo um elemento com base em seu indice
console.log("primeira posição:", dinos[0]); //retorna um elemento especifico
console.log("segunda posição:", dinos[1]);
console.log("item da posição 20:", dinos[19]); //retorna indefinido

//removendo elementos do vetor
dinos.pop(); //remove o último elemento do vetor
console.table(dinos);

dinos.shift(); //remove o primeiro elemento do vetor
console.table(dinos);

dinos.splice(1, 1); //remove o elemento a partir do indice 1, contando 1
console.table(dinos);

console.log("");
console.log("------continuação da aula------");

var dinos = [
  "triceraptops",
  "tiranossauro rex",
  "estegossauro",
  "anquilossauro",
  "brontossauro",
  "batata",
  "pterodactilo",
  "espinossauro",
];

console.table(dinos);

var elementoProcurado = "brontossauro";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "triceraptops";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "pterodactilo";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);

//criando cópia de array (vetor)
var copia1 = dinos.slice() //.slice() faz uma copia real do item de vetor
console.log("vet copia 1")
console.table(copia1)

var copia2 = dinos.slice(1,3) //.slice(1,3) determino onde comeco e onde termino a copia
console.log("vetor copia 2")
console.table(copia2)