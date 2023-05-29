
function dirigirEBeber (){
    var idade = prompt('Insira a idade:')
    if (idade >= 18){
        return 'Já pode dirigir e beber!';
    }else {
        return 'Não pode dirigir nem beber!';
    }
}

console.log(dirigirEBeber())



function previsaoRodagem (){
    var qtdLitros = prompt('Insira a quantidade de litros de gasolina no tanque do carro:')
    var quilometragemMedia = prompt('Insira a quilometragem média por litro:')
    var estimativa = null
    estimativa = qtdLitros * quilometragemMedia
    return 'Podem ser rodados ' + estimativa + ' km nas circunstâncias fornecidas!'
}

console.log(previsaoRodagem())