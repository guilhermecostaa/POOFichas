class User {
    constructor(nome, email, password){
        this.nome = nome
        this.email = email
        this.password = password
    }
    
    //Propriedade Nome
    get nome (){
        return this._nome
    }
    set nome (novoNome){
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
    set email(novoPassword){
        this._password = novoPassword
    }
}




window.onload = function(){
    let logout = document.getElementById("inputLogout")
    logout.style.display = "none"
    let boasVindas = document.getElementById("boasVindas")
    boasVindas.style.display ="none"

}