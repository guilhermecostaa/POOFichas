class Reserva {
    constructor(nome, jogo, horaInicial, horaFinal) {
        this.nome = nome
        this.jogo = jogo
        this.horaInicial = horaInicial
        this.horaFinal = horaFinal
    }

    set nome(valor) {
        this._nome = valor
    }
    get nome() {
        return this._nome
    }

    set jogo(valor) {
        this._jogo = valor
    }
    get jogo() {
        return this._jogo
    }

    set horaInicial(valor) {
        this._horaInicial = valor
    }
    get horaInicial() {
        return this._horaInicial
    }

    set horaFinal(valor) {
        this._horaFinal = valor
    }
    get horaFinal() {
        return this._horaFinal
    }
}

class Jogo {
    constructor(nome, jogo) {
        this.nome = nome
        this.jogo = jogo
    }

    set nome(valor) {
        this._nome = valor
    }
    get nome() {
        return this._nome
    }

    set jogo(valor) {
        this._jogo = valor
    }
    get jogo() {
        return this._jogo
    }
}

let reservas = []
let jogos = []

//Reservas por predefinicao
reservas.push(new Reserva("Gui", "Tenis", 8, 10))
reservas.push(new Reserva("Gui", "Tenis de mesa", 8, 9))
reservas.push(new Reserva("Gui", "Bilhar", 15, 17))
reservas.push(new Reserva("Gui", "Tenis", 10, 12))





window.onload = function () {

    //forms
    let form = document.getElementById("form")
    let form2 = document.getElementById("form2")

    //Form Reservar
    let inputNome = document.getElementById("inputNome")
    let inputJogo = document.getElementById("inputJogo")
    let inputHoraInicial = document.getElementById("inputHoraInicial")
    let inputHoraFinal = document.getElementById("inputHoraFinal")
    let tabela = document.getElementById("tabela")
    let filtrarJogos = document.getElementById("filtrarJogos")

    //Botoes
    let btnReset = document.getElementById("btnReset")
    let btnSubmeter = document.getElementById("btnSubmit")
    let btnRemoverTodos = document.getElementById("btnRemoverTodos")
    let btnsAdicionais = document.getElementById("btnsAdicionais")

    //Criar
    let inputNomeJogador = document.getElementById("inputNomeJogador")
    let inputNovoJogo = document.getElementById("inputNovoJogo")

    //esconde ou mostra os botões adicionais (filtrar e remover todos os jogos)
    if (reservas.length !== 0) {
        btnsAdicionais.style.visibility = "visible"
    } else {
        btnsAdicionais.style.visibility = "hidden"
    }


    //btn remover todos os jogos
    btnRemoverTodos.addEventListener("click", function () {
        reservas = []
        btnsAdicionais.style.visibility = "hidden"

        atualizarTabela(filtrarJogos.value)
        tabela.innerHTML = ""
    })

    form.addEventListener("submit", function (event) {
        let erro = false
        let strErro = "ERRO: "

        if (inputHoraFinal.value <= inputHoraInicial.value) {//nao pode ser menor que a inicial
            erro = true
            strErro += "Hora final não pode ser menor que a hora inicial"
            alert(strErro)
            event.preventDefault()
        } else if ((inputHoraInicial - inputHoraFinal) > 2) {//nao pode jogar mais de duas horas
            erro = true
            strErro += "Não pode estar mais de 2 horas num jogo"
            alert(strErro)
            event.preventDefault()
        } else {
            reservas.push(new Reserva(inputNome.value, jogo.value, inputHoraFinal.value, inputHoraFinal.value))
            localStorage.setItem("reserva", JSON.stringify(reserva))
            atualizarTabela()
        }
    })

    btnReset.addEventListener("click", function () {
        inputNome.focus()
    })


    form2.addEventListener("submit", function () {
        let erro = false
        let strErro = "ERRO: "
        for (let i in jogos) {
            if (inputNovoJogo.value == jogos[i].nome) {
                strErro += "O jogo já existe"
                alert(strErro)
                event.preventDefault();
            } else {
                jogos.push(new Jogo(inputNomeJogador.value, inputNovoJogo.value))
                localStorage.setItem("jogos", JSON.stringify(jogos))
            }

        }

    })
}

function atualizarTabela() {
    let str = ` <thead class="thead-dark">
                    <tr>
                        <th>#</th>
                        <th><i></i> Nome do jogador</th>
                        <th><i></i> Jogo</th>
                        <th><i"></i> Hora Inicial(s)</th>
                        <th><i></i> Hora Final</th>
                    </tr>
                </thead>`
    let count = 1
    for (let i = 0; i < reservas.length; i++) {
        str += `<tbody>
                <tr id="${reservas[i].nome}" class="table-primary">
                    <td scope="row">${count}</td>
                    <td>${reservas[i].nome}</td>
                    <td>${reservas[i].jogo}</td>
                    <td>${reservas[i].horaIncial}</td>
                    <td>${reservas[i].horaFinal}</td>
                </tr>`
        count++
    }
    str += "</tbody>"

    //adiciona os elementos à tabela
    tabela.innerHTML = str

}

function armazenar(viagens) {
    let data = new Date()
    let ano = data.getFullYear()
    let mes = data.getMonth() + 1
    let dia = data.getDate()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let stringData = ano + "-" + mes + "-" + dia + "-" + hora + ":" + minutos
}
