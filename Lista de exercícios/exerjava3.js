var temperatura = 33
var baixa = "baixa!"
var normal = "normal!"
var alta = "alta!"

if (temperatura<10) {
    temperatura = baixa
    
}else if (temperatura >= 10 && temperatura <=30) {
    temperatura = normal
    
}else {
    temperatura = alta
}
var mensagem = "A temperatura está "

console.log(mensagem + temperatura)
