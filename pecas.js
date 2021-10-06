let peso = 100;   //declaracao de variavel, mais recomendada que o "var"  
// var peso2;  
// nao precisa terminar com ";" a linha

if (peso > 99) {
    console.log("A peca possiu um peso adequado, pode ser cadastada!")

    let listaPecas = ["Disco de freio", "Amortecedor", "Virabrequim", "Vela", "Bateria", "Radiador", "Correia", "Carter", "Ignição", "Embreagem"]
    // console.log("Peças de exemplo " + listaPecas[2])

    if (listaPecas.length < 10) {
        console.log("A lista ainda possui espaço para mais peças")

        let nomePeca = "Disco de Freio" // String utiliza aspas ""

        if (nomePeca.length > 3) {
            console.log("Nome da peça é válido, pode seguir com o cadastro")
        } else {
            console.log("Nome da peça inválido, o nome deve ter mais que 3 caracteres")
        }

    } else {
        console.log("Não há espaço disponível, a capacidade máxima foi atingida")
    }
} else {
    console.log("A peca nao possiu um peso adequado, nao possui peso minimo!")
}

// Utilizar "CRTL+;" para deixar como comentário
// Shift+Alt+F orgniza código




