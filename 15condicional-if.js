var anoNascimento = 1998

if(anoNascimento > 1998)
    console.log("a pessoa nasceu depois de 1998")

    if (anoNascimento < 1998)
    console.log("a pessoa nasceu antes de 1998")
 
    if (anoNascimento == 1998)
    console.log("a pessoa nasceu em 1998")

    function sinaleiro(cor){
        if(cor == "vermelho")
        console.log(`pare`)
        
        else if(cor == "amarelo")
        console.log(`preste atenção`)
        
        else if(cor == "verde")
        console.log(`siga`)
    else console.log(`voce informou cores diferentes de verde, amarelo ou vermelho`)
    }
sinaleiro("vinho")
console.log("-------------------------------------")
var idade = 18

if (idade <= 18) {
    console.log("entrou no if...")
    idade++, console.log("incremetei a idade...")
    console.log(`a nova idade é ${idade}`)
    console.log(`agora estou saindo do bloco de codigos if`)
}
console.log(`terminei`)

console.log("-------------------------------------")
//validação (algo == algo) ou (algo > alguma coisa)
//? (if)
//termos de aceite do if (se for verdadeiro)
// : (else)
//termos de nn aceite do if (se for falso)
var preco = 500

var resultado = preco <=100 ? "tá barato" : "vish, tá caro pra kaceti"
console.log(resultado)

console.log("-------------------------------------")
var anoNascimento = 2002

if(anoNascimento > 2000)
    console.log(`a pessoa nasceu depois de 2000`)
else
    console.log(`a pessoa nasceu antes de 2000`)
console.log("-------------------------------------")
//condicional composto com if
    const login = "admin" //digitando pelo usuario
    var senha = "sususus783" //digitando pelo usuario

    //banco de dados
    const loginUser = "admin" //banco de dados
    const senhaUser = "admin" //banco de dados

if(login == loginUser && senha == senhaUser) 
console.log(`acesso permitido`)
else
console.log(`acesso negado vAI SE FUDEEEEEEEEEEEEEEEEEEE`)