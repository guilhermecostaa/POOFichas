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

let utilizadores = []

window.onload = function(){
    //Variaveis Login
    let formLogin = document.getElementById("formLogin")
    let emailLogin = document.getElementById("inputEmailLogin")
    let passwordLogin = document.getElementById("inputPasswordLogin")

    //Variaveis Registo
    let formRegisto = document.getElementById("formRegisto")
    let nome = document.getElementById("inputUserRegisto")
    let password = document.getElementById("inputPasswordRegsito")
    let email = document.getElementById("inputEmailRegisto")
    let confirmarPassword = document.getElementById("inputConfrimarPasswordRegisto")
    let validacao = false
    let mensagem = "" 

    //Variaveis Logout
    let logout = document.getElementById("inputLogout")
    logout.style.display = "none"
    let bemVindo = document.getElementById("bemVindo")
    bemVindo.style.display = "none"

}

formRegisto.addEventListener("submit", function(event){
        
    if (password == confirmarPassword) {
        validacao = true
    }

    if (validacao) {
        let newUtilizador = new Utilizador(nome.value, email.value, password.value)
        utilizadores.push(newUtilizador)
    } else{
        event.preventDefault();
    }
    console.log(utilizadores.length)
})


