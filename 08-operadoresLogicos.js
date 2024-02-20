var manha = true
var sono = false

console.log("---------------------------------")
console.log("manhã:", manha, "|estou com sono?", sono)

console.log("operador AND (E):", manha&&sono) //comparando se é de manha e estou com sono
console.log("operador OR (OU):", manha||sono) //comparando se é de manha OU estou com sono

sono = false
console.log("---------------------------------")
console.log("operador AND (E):", manha&&sono) //comparando se é de manha e estou com sono
console.log("operador OR (OU):", manha||sono) //comparando se é de manha OU estou com sono

manha=false
console.log("---------------------------------")
console.log("operador AND (E):", manha&&sono) //comparando se é de manha e estou com sono
console.log("operador OR (OU):", manha||sono) //comparando se é de manha OU estou com sono