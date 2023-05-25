var nome = prompt("Insira o nome do alimento:")

if (nome == 'laranja' || nome == 'tomate' || nome == 'abacaxi' || nome == 'limão'){

    var valoratual = Number(prompt("Insira o valor do alimento na semana atual:")) 
    var valoranterior = Number(prompt("Insira o valor do alimento na semana passada:")) 
    var aumentou = valoratual - valoranterior
    if (valoranterior < valoratual){
    console.log('O ' + nome + ' aumentou: R$' + aumentou)

    }else if (valoranterior > valoratual)

        var diminuiu = valoranterior - valoratual
        console.log('O ' + nome + ' diminuiu: R$' + diminuiu)

}else {
    alert(nome + " não disponível na feira!")
}