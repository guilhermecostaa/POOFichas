function output(texto){
    console.log(texto)
    let elemento = document.getElementById("output")
    elemento.innerHTML = texto
}

//Exercicio 1
class Retangulo {

    constructor(largura = 1, altura = 1){
        this.largura = largura
        this.altura = altura
        this.cor = "branco"
    }

    get getLargura(){
        return this._largura
    }

    set setLargura(newValue){
        if (typeof newValue === "number" && newValue > 1) {
            this._largura = newValue
        }
    }

    get getAltura(){
        return this._altura
    }

    set setAltura(newValue){
        if (typeof newValue === "number" && newValue > 1) {
            this._altura = newValue
        }
    }

    get cor(){
        return this._cor
    }

    getArea(){
        return this.largura * this.altura
    }

    getPerimetro(){
        return 2 * this.largura + 2 * this.altura
    }
}
function funcA() {
    let myRet = new Retangulo (2,3)
    console.log(myRet.largura)
    myRet.largura = 5
    console.log(myRet.largura)
    console.log(myRet.getArea())
    console.log(myRet.getPerimetro())
    let myRet2 = new Retangulo ()
    console.log(myRet2.getArea())    
}


//Exercicio 5
class Pais{

    constructor(nome, area, populacao){
        this.nome = nome
        this.area = area
        this.populacao = populacao
    }

    // propriedade Nome
    get nome(){
        return this._nome
    }
    set nome(newNome){
        this._nome = newNome
    }

    //Propriedade area
    get area(){
        return this._area
    }
    set area(newValue){
        this._area = newValue
    }

    //Propiedade População
    get populacao(){
        return this._populacao
    }
    set populacao(newPopulacao){
        this._populacao = newPopulacao
    }

    //Funçao densidade
    densidade() {
        return (this._populacao/this._area).toFixed(1)
    }

    static getNomePaisMaiorArea(array){
        let maior = 0
        let nome = ""
        for(let i in array){
            if (array[i].area > maior) {
                maior = array[i].area
                nome = array[i].nome
            }
        }
        return nome
    }

    static getNomePaisMaiorPopulacao(array){
        let maior = 0
        let nome = ""
        for(let i in array){
            if (array[i].populacao > maior) {
                maior = array[i].populacao
                nome =array[i].nome
            }
        }
        return nome
    }

    static getNomePaisMaiorDensidadePopulacional(array){
        let maior = 0
        let nome = ""
        for(let i in array){
            if (array[i].densidade() > maior) {
                maior = array[i].densidade()
                nome =array[i].nome
            }
        }
        return nome
    }
}

function funcD() {
    
    let paises = []

    let meuPais1 = new Pais ("Portugal", 2049495605605986,10000000)
    let meuPais2 = new Pais ("Espanha", 20494956,20000000)
    let meuPais3 = new Pais ("Itália", 204945864,13000000)
    let meuPais4 = new Pais ("Egito", 2049204525986,15000000)
    let meuPais5 = new Pais ("Timor", 20496,60000)

    paises.push(meuPais1, meuPais2, meuPais3, meuPais4, meuPais5)
    console.log(`Maior Area é de ${Pais.getNomePaisMaiorArea(paises)}`)
    console.log(`Maior População é de ${Pais.getNomePaisMaiorPopulacao(paises)}`)
    console.log(`Maior Densidade Populacional é de ${Pais.getNomePaisMaiorDensidadePopulacional(paises)}`)
}

//Exercicio 2
class Circulo{
    constructor(raio){
        this.raio = raio
    }
    
    //Propriedade raio
    get raio(){
        return this._raio 
    }
    set raio(novoRaio){
        this._raio = novoRaio
    }

    //Area do Circulo
    getArea(){
        return (3.14*this._raio*this._raio)
    }

    //Perimetro do Circulo
    getCircunferencia(){
        return (3.14* (2*this._raio))
    }

    //Aumentar Raio
    aumentarRaio(){
        let numero = parseInt(prompt("Escreva a percentagem que pretende aumentar o raio do circulo"))
        let valorAumentar = this._raio*(numero/100)
        let valorFinal = this._raio + valorAumentar
        console.log(valorFinal)
        console.log(Circulo.getArea(circulo1))
        console.log(Circulo.getCircunferencia(circulo1))
    }
}

function funcB() {
    let raioUtilizador = parseInt(prompt("Escreva o raio do seu circulo"))
    let circulo1 = new Circulo (raioUtilizador)
    console.log(raioUtilizador)
    console.log(Circulo.getArea())
    console.log(Circulo.getCircunferencia())
    console.log(Circulo.aumentarRaio())
}