function output(texto) {
    console.log(texto)
    let elemento = document.getElementById("output")
    elemento.innerHTML = texto
}

//Alinea A
let student = {
    name: "David Silva",
    course: "POO",
    grade: 12,
    propriedades: function () {
        return "Name: " + this.name + ", course:" + this.course + ", grade: " + this.grade
    }
}

function funcA() {
    output(student.propriedades())
    delete student.grade
    output(student.propriedades())
}



//Alinea B
class Pessoa {

    constructor(name, grade) {
        this.name = name
        this.grade = grade
    }

    //Propriedade name
    get name() {
        return this._name
    }
    set name(newName) {
        this._name = newName

    }

    //Propriedade grade
    get grade() {
        return this._grade
    }
    set grade(newGrade) {
        this._grade = newGrade
    }

}


function funcB() {
    let grades = [
        {
            name: 'Rui',
            grade: 8
        },
        {
            name: 'Ana',
            grade: 12
        },
        {
            name: 'Carla',
            grade: 14
        }]
    let numeroObjetos = parseInt(prompt("Quantos objetos pretende adicionar?"))
    for (let i = 0; i < numeroObjetos; i++) {
        name = prompt("Escreva o nome da pessoa")
        grade = prompt("Escreva a nota dessa pessoa")
        let object = new Pessoa(name, grade)
        grades.push(object)
    }
    for (let i = 0; i < grades.length; i++) {
        console.log(grades[i])
    }
}




//Alinea C
let cores = ["vermelho", "verde", "preto", "amarelo", "azul"]
class Carro {

    constructor(marca, matricula, cor, deposito, tipo) {

        this.marca = marca
        this.matricula = matricula
        this.cor = cor
        this.deposito = deposito
        this.tipo = tipo
    }


    get marca() {
        return this._marca
    }
    set marca(newMarca) {
        this._marca = newMarca
    }

    get matricula() {
        return this._matricula
    }
    set matricula(newMatricula) {
        this._matricula = newMatricula
    }

    get cor() {
        return this._cor
    }
    set cor(newCor) {

        if (cores.indexOf(newCor != -1)) {
            this._cor = newCor
        }
        else {
            console.log("Cor Inválida")
            this._cor = "sem cor"
        }
        this._cor = newCor
    }

    get deposito() {
        return this._deposito
    }
    set deposito(newDeposito) {
        this._deposito = newDeposito
    }


    //Consumir
    consumir(nKms) {
        let litrosConsumidos = (nKms * 5) / 100
        if (litrosConsumidos > this.deposito) {
            console.log("Combustível insuficiente. Se quiser percorrer " + nKms + " terá de abastecer " + Math.abs(this.deposito - litrosConsumidos) + "L")
        }
        else {
            this.deposito -= litrosConsumidos
        }
    }
}

let meuCarro1 = new Carro("Ford", "91-GH-15", "verde", "40", "Gasolina")
let meuCarro2 = new Carro("Fiat", "15-FD-15", "branco", "50", "Gasóleo")

function funcC() {
    meuCarro1.consumir(801)
}

//Alinea D
class Cilindro {
    constructor(raio, altura) {
        this.raio = raio
        this.altura = altura
    }

    //Propriedade raio
    get raio() {
        return this._raio
    }
    set raio(novoRaio) {
        this._raio = novoRaio
    }

    //Propriedade altura
    get altura() {
        return this._altura
    }
    set altura(novoAltura) {
        this._altura = novoAltura
    }

    //Formula calcular o volume
    volume() {
        return (3.14 * this.raio * this.raio * this.altura).toFixed(4)
    }
}

function funcD() {
    let cyl = new Cilindro(7, 4)
    console.log('volume =', cyl.volume())
}

//Alinea E
class Circulo {
    constructor(raio) {
        this.raio = raio
    }

    //Propriedade raio
    get raio() {
        return this._raio
    }
    set raio(novoRaio) {
        this._raio = novoRaio
    }

    //Formula Area
    area() {
        return (3.14 * this.raio * this.raio).toFixed(2)

    }

    //Formula Perimetro
    perimetro() {
        return ((2 * 3.14) * this.raio).toFixed(2)
    }
}

function funcE() {
    let raiodocirculo = parseInt(prompt("Escreva o raio do circulo"))
    let c = new Circulo(raiodocirculo)
    console.log('Area =', c.area())
    console.log('perimeter =', c.perimetro())
}

//Alinea F
function funcF() {
    let string = prompt("Escreva a sua frase")

}