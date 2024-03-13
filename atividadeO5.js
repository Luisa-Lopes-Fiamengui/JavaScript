function idade(anoNascimento) {
  return 2024 - anoNascimento;
}
var nome = "Espresso";
console.log(`Olá, eu sou ${nome} e tenho ${idade(2000)} anos de idade`);

function mediaCombustivel(combustivel, kml) {
  return combustivel * kml;
}
console.log(`carro 1 tem: 20L -> percorre ${mediaCombustivel(20, 12)}kms`);
console.log(`carro 2 tem: 8L -> percorre ${mediaCombustivel(8, 12)}kms`);
console.log(`carro 3 tem: 2L -> percorre ${mediaCombustivel(2, 12)}kms`);

console.log("--------------------------------");

var idade = 17;
if (idade > 16) console.log("a pessoa pode votar");
else console.log("a pessoa NÃO pode votar");

votar(10)