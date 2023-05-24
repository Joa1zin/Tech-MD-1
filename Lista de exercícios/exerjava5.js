var peso = 80
var altura = 1.70
var IMC = peso/(altura*altura)

if (IMC < 18.5) {
    console.log("Abaixo do peso")

}else if (IMC >= 18.5 && IMC <= 24.9){
    console.log("Peso normal")

}else if (IMC >=25.0 && IMC <= 29.9){
    console.log("Sobrepeso")

}else {
    console.log("Obeso")
}

console.log("IMC: " + IMC)
