let peso = 99.5;   //declaracao de variavel, mais recomendada que o "var"  
// var peso2;  
// nao precisa terminar com ";" a linha

if(peso > 99) {
    console.log("A peca possiu um peso adequado, pode ser cadastada!")
}else{     
    console.log("A peca nao possiu um peso adequado, nao possui peso minimo!")
}
// Utilizar "CRTL+;" para deixar como comentário

let listaPecas = ["Disco de freio", "Amortecedor", "Virabrequim", "Vela", "Bateria", "Radiador", "Correia", "Carter", "Ignição"]
console.log("Peças de exemplo " + listaPecas[2])

if (listaPecas.length < 10) {
    console.log("A lista ainda possui espaço para mais peças")
} else {
    console.log("Não há espaço disponível, a capacidade máxima foi atingida")
}

let nomePeca = "Disco de freio" // String utiliza aspas ""

if(nomePeca.length > 3){
    console.log("Nome da peça é válido, pode seguir com o cadastro")
}else{
    console.log("Nome da peça invpalido, o nome deve ter mais que 3 caracteres")
}
