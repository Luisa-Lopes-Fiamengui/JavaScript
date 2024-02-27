console.log("----------------------------------------------------");
var frutas = ["Maça", "Banana", "Pera", "Uva", "Morango"];
console.log(frutas);
console.log(frutas[0]);
console.log("");
console.log(frutas);
console.log("o vetor tem", frutas.length, "elementos");

console.log("----------------------------------");
frutas.push("Maça", "Banana");
console.table(frutas);

console.log("----------------------------------");
frutas.push("Tangerina");
console.table(frutas);

console.log("----------------------------------");
frutas.unshift("Goiaba");
console.table(frutas);

console.log("----------------------------------");
console.log(frutas[5]);
console.log("----------------------------------");

//05-excluir uva
// frutas.splice(4,1)
var posicao = frutas.indexOf("Uva");
frutas.splice(posicao, 1);
console.table(frutas);

//copia de array
var copia = frutas.slice(2, 5);
console.table(copia);

console.log("----------------------------------");
var elementos = [1, 2, 3, 4, 5];
console.table(elementos);

console.log("----------------------------------");
var elementoProcurado = 2;
var posicao = elementos.indexOf(elementoProcurado);
console.log(elementoProcurado + posicao);

console.log("----------------------------------");
var copia = elementos.slice();
console.log("vetor copia 1");
console.table(copia);

console.log("----------------------------------");
//dobro do original
copia[0] = elementos[0] * 2;
copia[1] = elementos[1] * 2;
copia[2] = elementos[2] * 2;
copia[3] = elementos[3] * 2;
copia[4] = elementos[4] * 2;
console.table(copia);
