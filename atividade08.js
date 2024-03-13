// Criar uma classe Aluno em JavaScript que represente um aluno em uma instituição de ensino. A classe deve receber informações do aluno, calcular sua idade e apresentar-se como métodos.

// Requisitos:
// A classe Aluno deve ter os seguintes atributos:
// ra: Número de Registro do Aluno (string)
// nome: Nome completo do aluno (string)
// dataNascimento: Data de nascimento do aluno (data)
// curso: Curso do aluno (string)

// A classe Aluno deve ter os seguintes métodos:
// calcularIdade(): Calcula e retorna a idade do aluno em anos.
// apresentar(): Exibe as informações do aluno no formato:

class Aluno {
  constructor(ra, nome, anoNascimento, curso) {
    this.ra = ra;
    this.nome = nome;
    this.dataNascimento = anoNascimento;
    this.curso = curso;
  }
}

function compararStrings(str1, str2) {
  // Converte ambas as strings para minúsculas
  const str1Minusculas = str1.toLowerCase();
  const str2Minusculas = str2.toLowerCase();
  // Compara as strings minúsculas
  return str1Minusculas === str2Minusculas;
}
var resultado = compararStrings("Oi", "OLÁ");
console.log(resultado); // true

function extrairNumeros(str) {
  const regex = /\d+/g;
  return str.match(regex);
}
const string = "O 12 1 2587 preço do produto é R$ 12,99.";
const numeros = extrairNumeros(string);
console.log(numeros); // ["12", "99"]

function inverterFrase(frase) {
  const palavras = frase.split(" ");
  return palavras.reverse().join(" ");
}

const frase = "Este é um exemplo de frase invertida";
const fraseInvertida = inverterFrase(frase);
console.log(fraseInvertida); // " invertida frase de exemplo um é Este"

var resultado = comparar("Joao", "Jose");
console.log(resultado);
