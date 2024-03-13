// class Pessoa {
//   constructor(pNome, pIdade) {
//     this.nome = pNome;
//     this.idade = pIdade;
//   }
//   apresentarSe() {
//     console.log(`ola, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
//   }
//   envelhecer() {
//     this.idade++;
//   }
// }

// //criando objetos do "tipo" pessoa
// var pessoa1 = new Pessoa("Soluço", 21);
// var p2 = new Pessoa("Astrid", 22);
// pessoa1.apresentarSe();
// p2.apresentarSe();

// pessoa1.envelhecer();
// pessoa1.apresentarSe();

// //----------------------------------------------------------------------
// //abstração
// console.log(
//   "------------------------Abstração---------------------------------"
// );

// class Pet {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }

//   alimentar() {
//     console.log(`A ${this.nome} foi alimentada!`);
//   }
// }
// const meuPet = new Pet("Ozzy", "3 meses", "Gato");
// console.log(
//   `meu pet é um ${meuPet.tipo}, chamada ${meuPet.nome} e tem ${meuPet.idade} de idade!`
// );

// meuPet.alimentar();

// console.log("-------------------------Herança--------------------------------");

// class Animal {
//   constructor(nome, idade, tipoAlimentaçao) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipoAlimentaçao = tipoAlimentaçao;
//   }
//   alimentar() {
//     console.log(`A ${this.nome} foi alimentada!`);
//   }
//   emitirSom() {
//     console.log(`Au au!`);
//   }
// }
// class Cachorro extends Animal {
//   alimentar() {
//     console.log();
//   }
// }
// const meuCachorro = new Animal("Milly", 15, "Cachorro");
// meuCachorro.alimentar();
// meuCachorro.emitirSom();

// console.log("-------------------------Encapsulamento--------------------------------");
// class Petzinho {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }
//   getNome() {
//     return this.nome;
//   }
//   setNome(novoNome) {
//     this.nome = novoNome;
//   }
// }
// const novoPetzinho = new Petzinho("Banguela", 5, "Dragão");

// console.log(novoPetzinho.getNome()); //banguela
// novoPetzinho.setNome("Tempestade");
// console.log(novoPetzinho.getNome()); //tempestade

console.log("--------------------Polimorfismo--------------------");
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerBarulho() {
    console.log("O animal faz um barulho genérico.");
  }
}

class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }

  fazerBarulho() {
    console.log("O cachorro late!");
  }
}

class Gato extends Animal {
  constructor(nome) {
    super(nome);
  }

  fazerBarulho() {
    console.log("O gato mia!");
  }
}

// Exemplo de uso
const animais = [
  new Cachorro("Rex"),
  new Gato("Mia"),
  new Animal("Bob"), // Animal genérico
];

for (const animal of animais) {
  animal.fazerBarulho();
}

console.log("-------------------Exemplos-----------------------");
//criando uma classe retangulo
class Retangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }
  obterArea() {
    return this.comprimento * this.largura;
  }
  objetoPerimetro() {
    return this.comprimento * 2 + this.largura * 2;
  }
  setComprimento(novoComprimento) {
    this.comprimento = novoComprimento;
  }
  setLargura(novaLargura) {
    this.largura = novaLargura;
  }
}

//criando um objeto de "tipo" retangulo
const ret1 = new Retangulo(10, 15);
function displayRet(retangulo) {
  console.table(retangulo);
  console.log(`comprimento = ${retangulo.comprimento}`);
  console.log(`largura = ${retangulo.largura}`);
  console.log(`area = ${retangulo.obterArea()}`);
  console.log(`perimetro = ${retangulo.objetoPerimetro()}`);
}
displayRet(ret1);
ret1.setComprimento(20);
displayRet(ret1);
ret1.setLargura(20);
displayRet(ret1);
