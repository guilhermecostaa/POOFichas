//Criacao da Classe para o utilizador
class Utilizador{
    constructor(nome, email, password){
        this.nome = nome
        this.email = email
        this.password = password
    }

    //Propriedade Nome
    get nome(){
        return this._nome
    }
    set nome(novoNome){
        this._nome = novoNome
    }

    //Propriedade Email
    get email(){
        return this._email
    }
    set email(novoEmail){
        this._email = novoEmail
    }

    //Propriedade Password
    get password(){
        return this._password
    }
    set password(novoPassword){
        this._password = novoPassword
    }
}


window.onload = function(){
    let logout = document.getElementById("inputLogout")
    logout.style.display = "none"
    let bemVindo = document.getElementById("bemVindo")
    bemVindo.style.display = "none"
}