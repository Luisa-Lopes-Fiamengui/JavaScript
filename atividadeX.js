// Crie e utilize uma classe "Sorvete" contendo as propriedades : sabor, preço e tamanho (P | M | G)
// Crie um sorvete de morango grande
// Crie um sorvete de chocolate pequeno
// Crie um sorvete de melancia medio
// Altere o preço do sorvete de morango grande para R$ 10,51

class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  setPreco(novoPreco) {
    this.preco = novoPreco;
  }
}
var sorvete1 = new Sorvete("Morango", 10, "G")
var sorvete2 = new Sorvete("Chocolate", 5, "P")
var sorvete3 = new Sorvete("Melancia", 7.5, "M")

console.log(`o sorvete de ${sorvete1.sabor} custa ${sorvete1.preco}`)
console.log(`o sorvete de ${sorvete2.sabor} custa ${sorvete2.preco}`)
console.log(`o sorvete de ${sorvete3.sabor} custa ${sorvete3.preco}`)

sorvete1.setPreco(10.51)
console.log(`o sorvete de ${sorvete1.sabor} custa ${sorvete1.preco}`)