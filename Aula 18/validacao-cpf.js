function validaCPF (){ 
    var cpf = prompt ('Insira um cpf somente com números:')

    while(true){
        if(cpf.length == 11){
            alert(`Valor ${cpf} para ${typeof cpf} validado com sucesso!`)
            break
        }else{
            cpf = prompt(`Valor fornecido para ${typeof cpf} inválido!Insira novamente:`)
        }
        }
    }
