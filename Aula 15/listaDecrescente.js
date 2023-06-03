function listaDescrescente (numPositivo){
    var resposta = ''
    while (numPositivo >=0){
        resposta = resposta + `<p>-> ${numPositivo}</p>`
        numPositivo--
    }
    return resposta
}

/*document.write(
    `${listaDescrescente(10)}`
);*/

function fizz(numero){
    var control = 0
    var livre = ''
    while (control <= numero){
        if (control % 3 == 0){
            livre = livre + '\nfizz'
        }else {
            livre = livre + `\n${control}`
        }
        control++
    }

    return livre
}

console.log(fizz(10))
