//implementando da condicional
var menuSelecionado = "home"
switch (menuSelecionado){
    case "home":
        console.log(`voce clicou no link HOME`)
    break
   case "quem somos":
    console.log(`voce clicou no link quem somos`)
    break
    case "contato":
    console.log(`voce clicou no link contato`)
    break
    default:
    console.log(`opção invalida`)
    break
    }

var mes = 4
switch (mes) {
    case 1:
    case 2:
    case 3:
        console.log(`primeiro trimestre`)
        break;
    case 4:
    case 5:
    case 6:
        console.log(`segundo trimestre`)
        break;
    case 7:
    case 8:
    case 9:
        console.log(`terceiro trimestre`)
        break;
    case 10:
    case 11:
    case 12:
        console.log(`quarto trimestre`)
        break;
   
    default:
        break;
}