function validaEmail(email){
    if (email.indexOf('@') != -1){
        return true
    }else{
        return false
    }
}

var recebeEmail = prompt('Digite seu email:')

function ExibeResultadoValidacao(){
    if(validaEmail(recebeEmail) == true){
        document.write(`
            <p>email validado</p>
        `);

    }else{
        document.write(`
            <p>email fornecido INVALIDO</p>
        `);
    }
}

ExibeResultadoValidacao()