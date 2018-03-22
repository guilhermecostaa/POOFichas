function output(texto){
    console.log(texto)
    let elemento = document.getElementById("output")
    elemento.innerHTML = texto
}

//Alinea A
function funcA() {
    let frase = prompt("Escreva a sua string")
    output(frase.length)
}

//Alinea B
function funcB() {
    let nomeProprio = prompt("Escreva o seu nome")
    let apelido = prompt("Escreva o seu apelido")
    output(apelido + ", " + nomeProprio)
}

//Alinea C
function funcC() {
    let frase = prompt("Escreva a sua frase")
    let fraseMinuscula = frase.toLowerCase();
    let vogais = 0
    for (let i = 0; i < fraseMinuscula.length; i++){
        if (fraseMinuscula[i] == "a" ||fraseMinuscula[i] == "e" ||fraseMinuscula[i] == "i" ||fraseMinuscula[i] == "o" ||fraseMinuscula[i] == "u" ) {
            vogais++;
        }
    }
    output(vogais)
}

//Alinea D
function funcD(){
    let frase = prompt("Escreva a sua frase")
    let palavras = 0
    let espaco = " "
    for(let i = 0; i < frase.length; i++){
        if (frase[i] == espaco) {
            palavras++;
        }
    }
    output(palavras + 1)
}

//Alinea E
function funcE(){
    let frase = prompt("Escreva a sua frase")
    let invertido = ""
    for(let i = frase.length; i >= 0; i--){
        invertido += frase.charAt(i)
    }
    output(invertido)
}

//Alinea F
function funcF() {
    let frase = prompt("Escreva a sua frase")
    let caracter = prompt("Escreva o caracter que pretende retirar")
    let fraseFinal = frase
    for(let i = frase.length; i >= 0; i--){
        if(frase[i] == caracter){
            fraseFinal = fraseFinal.replace(caracter, "")
        }
    }
    output(fraseFinal)
}

//Alinea G
function funcG() {
    let numero = parseInt(prompt("Escreva o seu número em segundos"))
    let segundos = numero
    while(numero >=60){
        segundos -= 60 
    }
    let minutos = (numero-segundos)/60
    while(minutos -60 >= 0){
        minutos -= 60
    }
    let horas = (numero-minutos*60 - segundos)/3600
    output(`${numero}s = ${horas}h + ${minutos}m + ${segundos}s`)
}