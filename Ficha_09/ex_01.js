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

    static getIdByEmail(email) {
        let id = -1
        for (let i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i].email == email) {
                id = utilizadores[i].id
            }
        }

        return id
    }

    static getPasswordById(id) {
        for (let i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i].id == id) {
                return utilizadores[i].password
            }
        }
    }

    static getNomeById(id) {
        for (let i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i].id == id) {
                return utilizadores[i].nome
            }
        }
    }

}

//Criacao da Clasee para as Viagens
class Viagem {
    constructor(titulo, pais, data, foto, pontuacao, descricao, idAutor) {
        this._id = Viagem.getLastId() + 1
        this.titulo = titulo
        this.pais = pais
        this.data = data
        this.foto = foto
        this.pontuacao = pontuacao
        this.descricao = descricao
        this.idAutor = idAutor
    }
    //Propriedade Titulo
    get titulo() {
        return this._titulo
    }
    set titulo(novoTitulo) {
        this._titulo = novoTitulo
    }

    //Propriedade Pais
    get pais() {
        return this._pais
    }
    set pais(novoPais) {
        this._pais = novoPais
    }

    //Propriedade Data
    get data() {
        return this._data
    }
    set data(novoData) {
        this._data = novoData
    }

    //Propriedade Foto
    get foto() {
        return this._foto
    }
    set foto(novoFoto) {
        this._foto = novoFoto
    }

    //Propriedade Pontuacao
    get pontuacao() {
        return this._pontuacao
    }
    set pontuacao(novoPontuacao) {
        this._pontuacao = novoPontuacao
    }

    //Propriedade Descricao
    get descricao() {
        return this._descricao
    }
    set descricao(novoDescricao) {
        this._descricao = novoDescricao
    }

    //Propriedade idAutor
    get idAutor() {
        return this._idAutor
    }
    set idAutor(novoIdAutor) {
        this._idAutor = novoIdAutor
    }

    get id() {
        return this._id
    }

    get idAutor() {
        return this._idAutor
    }

    static getLastId() {
        let id = 0
        if (viagens.length > 0) {
            id = viagens[viagens.length - 1].id
        }
        return id
    }

    static removerViagemById(id) {
        for (let i in viagens) {
            if (viagens[i].id == id) {
                viagens.splice(i, 1)
            }
        }
    }

}


let utilizadores = []
let idUtilizadorLogado = -1
let viagens = []


//Utilizador Teste
utilizadores.push(new Utilizador("Teste", "teste@teste.pt", "123"))
utilizadores.push(new Utilizador("Teste2", "teste2@teste.pt", "123"))

viagens.push(new Viagem("Boi1", "Portugal", "2018-06-13", "http://static.asiawebdirect.com/m/bangkok/portals/bali-indonesia-com/homepage/top10-hotels/pagePropertiesImage/viceroy-bali.jpg.jpg", "Toppen", "10", 1))
viagens.push(new Viagem("Boi2", "Portugal", "2018-06-13", "http://static.asiawebdirect.com/m/bangkok/portals/bali-indonesia-com/homepage/top10-hotels/pagePropertiesImage/viceroy-bali.jpg.jpg", "Toppen", "10", 1))
viagens.push(new Viagem("Boi3", "Portugal", "2018-06-13", "http://static.asiawebdirect.com/m/bangkok/portals/bali-indonesia-com/homepage/top10-hotels/pagePropertiesImage/viceroy-bali.jpg.jpg", "Toppen", "10", 2))
viagens.push(new Viagem("Boi4", "Portugal", "2018-06-13", "http://static.asiawebdirect.com/m/bangkok/portals/bali-indonesia-com/homepage/top10-hotels/pagePropertiesImage/viceroy-bali.jpg.jpg", "Toppen", "10", 1))
viagens.push(new Viagem("Boi5", "Portugal", "2018-06-13", "http://static.asiawebdirect.com/m/bangkok/portals/bali-indonesia-com/homepage/top10-hotels/pagePropertiesImage/viceroy-bali.jpg.jpg", "Toppen", "10", 2))
viagens.push(new Viagem("Boi6", "Portugal", "2018-06-13", "http://static.asiawebdirect.com/m/bangkok/portals/bali-indonesia-com/homepage/top10-hotels/pagePropertiesImage/viceroy-bali.jpg.jpg", "Toppen", "10", 2))
viagens.push(new Viagem("Boi7", "Portugal", "2018-06-13", "http://static.asiawebdirect.com/m/bangkok/portals/bali-indonesia-com/homepage/top10-hotels/pagePropertiesImage/viceroy-bali.jpg.jpg", "Toppen", "10", 1))


viagens.push(new Viagem("Toppen", "Portugal", "2017-05-02", "https://upload.wikimedia.org/wikipedia/commons/3/37/Liberty-statue-from-below.jpg", "10", "OH GUSTAVO OH BOI", 1))
viagens.push(new Viagem("Toppen", "Portugal", "2017-05-02", "https://upload.wikimedia.org/wikipedia/commons/3/37/Liberty-statue-from-below.jpg", "10", "OH GUSTAVO OH BOI", 2))

window.onload = function () {
    gerarCards()

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

    //Adiconar Viagens
    let formAdicionar = document.getElementById("formAdicionar")
    let tituloAdicionar = document.getElementById("inputTituloAdicionar")
    let paisAdicionar = document.getElementById("inputPaisAdicionar")
    let dataAdicionar = document.getElementById("inputDataAdicionar")
    let urlFotoAdicionar = document.getElementById("inputUrlFotoAdicionar")
    let pontuacaoAdicionar = document.getElementById("inputPontuacaoAdicionar")
    let descricaoAdicionar = document.getElementById("inputDescricaoAdicionar")

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
            if (nome.indexOf(" ") != -1) {
                nome = nome.substr(0, nome.indexOf(" "))
            }
            bemVindo.innerHTML = `Olá, ${nome}`

            idUtilizadorLogado = id
            gerarCards(idUtilizadorLogado)
        } else {
            alert("Email ou password invalido!")
        }

        event.preventDefault();

    })

    btnLogout.addEventListener("click", function () {
        idUtilizadorLogado = -1
        btnLogin.style.visibility = "visible"
        btnRegisto.style.visibility = "visible"
        bemVindo.style.visibility = "hidden"
        bemVindo.innerHTML = ""
        gerarCards()
    })

    formAdicionar.addEventListener("submit", function (event) {
        let dataAtual = new Date()
        let dataInput = new Date(dataAdicionar.value)
        if (dataAtual < dataInput) {
            alert("Data Inválida!!")
        } else {
            let newViagem = new Viagem(tituloAdicionar.value, paisAdicionar.value, dataAdicionar.value, urlFotoAdicionar.value, pontuacaoAdicionar.value, descricaoAdicionar.value)
            viagens.push(newViagem)
            localStorage.setItem("viagens", JSON.stringify(viagens))
            alert("Viagem adicionada com sucesso")
            $("#adicionarModal").modal("hide")
        }

        event.preventDefault();
    })

    gerarCards()
}

function gerarCards(idUtilizadorLogado = -1) {
    let cards = document.getElementById("cards")
    let str = ""

    //Caso o utilizador nao esteja logado
    if (idUtilizadorLogado == -1) {
        for (let i in viagens) {
            let desc = viagens[i].descricao
            //Caso a descricao tenha mais de 50 car corta-a
            if (desc.length > 50) {
                desc = desc.substr(0, desc.indexOf(" ", 50)) + "..."
            }
            str += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
                        <div class="card" id="${viagens[i].id}">
                            <img class="card-img-top" src="${viagens[i].foto}" alt="">
                            <div class="card-body">
                                <h4 class="card-title">${viagens[i].titulo}</h4>
                                <p class="card-text">${viagens[i].descricao}</p>
                            </div>
                            <div class="card-footer">Por ${Utilizador.getNomeById(viagens[i].idAutor)}</div>
                        </div>
                    </div>`
        }
    } else {//Caso o utilizador estiver logado
        for (let i in viagens) {
            if (viagens[i].idAutor == idUtilizadorLogado) {
                let desc = viagens[i].descricao
                //Caso a descricao tenha mais de 50 car corta-a
                if (desc.length > 50) {
                    desc = desc.substr(0, desc.indexOf(" ", 50)) + "..."
                }
                str += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
                            <div class="card">
                                <img class="card-img-top" src="${viagens[i].foto}" alt="">
                                <div class="card-body">
                                    <h4 class="card-title">${viagens[i].titulo}</h4>
                                    <p class="card-text">${viagens[i].descricao}</p>
                                    <div class="pull-right" id="${viagens[i].id}">
                                        <button type="button" class="btn btn-danger remover" data-toggle="modal" data-target="#modal"><i class="fa fa-times-circle"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>`

            }

        }
    }

    cards.innerHTML = str

    let btnRemover = document.getElementsByClassName("remover")
    for (let i = 0; i < btnRemover.length; i++) {
        btnRemover[i].addEventListener("click", function () {
            let modalCorpo = document.getElementById("modalCorpo")
            let idViagem = parseInt(btnRemover[i].parentNode.id)
            for (let j in viagens) {
                if (idViagem == viagens[j].id) {
                    modalCorpo.innerHTML = "A viagem " + viagens[i].titulo + " será removida para sempre"

                }
            }
            $("#removerModal").modal("show")
            document.getElementById("confirmarRemover").addEventListener("click", function () {
                for (let j in viagens) {
                    if (viagens[j].id == idViagem) {
                        viagens.splice(j, 1)
                        $("#removerModal").modal("hide")
                        gerarCards(idUtilizadorLogado)
                    }
                }
            })
        })
    }

}

function armazenar(viagens) {
    let data = new Date()
    let ano = data.getFullYear()
    let mes = data.getMonth() + 1
    let dia = data.getDate()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let stringData = ano + "-" + mes + "-" + dia + "-" + hora + ":" + minutos
    localStorage.setItem(stringData, JSON.stringify(viagens))
}