function validaEmail (){ 
    var email = prompt('Insira um email:')

    while(true){
        if(email.indexOf('@') != -1){
            alert(`Valor ${email} para ${typeof email} validado com sucesso!`)
            break
        }else{
            email = prompt(`Valor fornecido para ${typeof email} inválido!Insira novamente:`)
        }
    }
}