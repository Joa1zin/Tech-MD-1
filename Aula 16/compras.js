var auxiliar = 0
var lista = []
var maximo = prompt('Quantos elementos terá a lista?')
var elemento = null
var controle = 0

function valida(palavra){
    auxiliar = palavra.length
    if (auxiliar % 2 == 0 ){
        alert("Elemento inválido!")
        controle--
    }else{
        lista.push(palavra)
    }
}


function completaLista (){
    while (controle < maximo){
        elemento = prompt('Insira o alimento:')
        valida(elemento)
        controle++
    }
    return console.log(lista)
}

completaLista()

