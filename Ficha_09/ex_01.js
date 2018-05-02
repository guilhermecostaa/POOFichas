//Criacao da Classe para o utilizador
class Utilizador {
    constructor(nome, email, password) {
        this._id = Utilizador.getLastId() + 1
        this.nome = nome
        this.email = email
        this.password = password
    }

    //Propriedade Nome
    get nome() {
        return this._nome
    }
    set nome(novoNome) {
        this._nome = novoNome
    }

<<<<<<< HEAD
=======

>>>>>>> 0a08dcfc31d77ca499c5484a142f1b0becb9c5ee
    //Propriedade Email
    get email() {
        return this._email
    }
    set email(novoEmail) {
        this._email = novoEmail
    }

    //Propriedade Password
    get password() {
        return this._password
    }
    set password(novoPassword) {
        this._password = novoPassword
    }

    get id() {
        return this._id
    }

    static getLastId() {
        let id = 0
        if (utilizadores.length > 0) {
            id = utilizadores[utilizadores.length - 1].id
        }
        return id
    }
    
    static getIdByEmail(email){
        let id = -1
        for (let i = 0; i < utilizadores.length; i++) {
            if(utilizadores[i].email == email){
                id = utilizadores[i].id
            }
        }

        return id
    }

    static getPasswordById(id){
        for (let i = 0; i < utilizadores.length; i++) {
            if(utilizadores[i].id == id){
                return utilizadores[i].password
            }
        }
    }

    static getNomeById(id){
        for (let i = 0; i < utilizadores.length; i++) {
            if(utilizadores[i].id == id){
                return utilizadores[i].nome
            }
        }
    }

}

let utilizadores = []

<<<<<<< HEAD
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


=======
let utilizadores = []
let idUtilizadorLogado = -1


//Utilizador Teste
utilizadores.push(new Utilizador("Teste", "teste@teste.pt", "123"))


window.onload = function () {
    //Forms
    let formLogin = document.getElementById("formLogin")
    let formRegisto = document.getElementById("formRegisto")

    //Registo
    let btnRegisto = document.getElementById("btnRegisto")
    let utilizadorRegisto = document.getElementById("inputUserRegisto")
    let emailRegisto = document.getElementById("inputEmailRegisto")
    let passwordRegisto = document.getElementById("inputPasswordRegisto")
    let confirmarPasswordRegisto = document.getElementById("inputConfirmarPasswordRegisto")

    //Login 
    let btnLogin = document.getElementById("btnLogin")
    let emailLogin = document.getElementById("inputEmailLogin")
    let passwordLogin = document.getElementById("inputPasswordLogin")

    //area user
    let btnLogout = document.getElementById("btnLogout")
    let bemVindo = document.getElementById("bemVindo")
    bemVindo.style.visibility = "hidden"

    formRegisto.addEventListener("submit", function (event) {
        if (passwordRegisto.value == confirmarPasswordRegisto.value) {
            let newUtilizadores = new Utilizador(utilizadorRegisto.value, emailRegisto.value, passwordRegisto.value)
            utilizadores.push(newUtilizadores)
            alert("Registo efetuado com sucesso!")
            $("#registoModal").modal("hide")

        } else {
            alert("As palavras passwords nao coincidem!")
        }
        event.preventDefault();

    })

    formLogin.addEventListener("submit", function (event) {
        let erro = false
        let id = Utilizador.getIdByEmail(emailLogin.value)
        if (id != -1 && Utilizador.getPasswordById(id) == passwordLogin.value) {
            alert("Login efetuado com sucesso")
            $('#loginModal').modal("hide")

            btnLogin.style.visibility = "hidden"
            btnRegisto.style.visibility = "hidden"
            bemVindo.style.visibility = "visible"

            let nome = Utilizador.getNomeById(id)
            //Obtem o primeiro nome
            if(nome.indexOf(" ") != -1){
                nome = nome.substr(0, nome.indexOf(" "))
            }
            bemVindo.innerHTML = `Olá, ${nome}`

            idUtilizadorLogado = id

        } else {
            alert("Email ou password invalido!")
        }
        
        event.preventDefault();

    })

    btnLogout.addEventListener("click", function(){
        idUtilizadorLogado = -1
        btnLogin.style.visibility = "visible"
        btnRegisto.style.visibility = "visible"
        bemVindo.style.visibility = "hidden"
        bemVindo.innerHTML = ""
    })

    



}
>>>>>>> 0a08dcfc31d77ca499c5484a142f1b0becb9c5ee
