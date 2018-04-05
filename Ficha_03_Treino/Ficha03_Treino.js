function output(texto){
    console.log(texto)
    let elemento = document.getElementById("output")
    elemento.innerHTML = texto
}

function funcA() {
    let string = prompt("Escreva a sua string!")
    output(string.length)
}

function funcB() {
    let nome = prompt("Escreve o seu nome")
    let apelido = prompt("Escreva o seu apelido")
    output(apelido + ", " + nome)
}

function funcC() {
    let string = prompt("Escreva a sua frase")
    string.toLowerCase()
    let vogais = 0
    for(let i = 0; i < string.length; i++){
        if(string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u"){
            vogais ++
        }
    }
    output(vogais)
}

function funcD() {
    let string = prompt("Escreva a sua frase")
    let palavras = 1
    for(let i = 0; i < string.length; i ++){
        if(string[i] = " "){
            palavras ++
        }
    }
    output(palavras)
}

function funcE() {
    let string = prompt("Escreva a sua frase")
    for (let i = string.length; i >= 0; i++) {
        output(string.charAt(i))
    }
}

function funcF() {
    let string = prompt("Escreva a sua frase")
    let caracter = prompt("Qual o caracter que pretende retirar?")
    let stringFinal = string
    for (let i = string.length; i >= 0; i--) {
        if (string[i] == caracter) {
            stringFinal = stringFinal.replace(caracter, "")
        }
    } 
    output(stringFinal)
}

function funcI() {
    
}