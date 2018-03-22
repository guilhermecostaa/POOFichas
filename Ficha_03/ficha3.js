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
    while(segundos >=60){
        segundos -= 60 
    }
    let minutos = (numero-segundos)/60
    while(minutos -60 >= 0){
        minutos -= 60
    }
    let horas = (numero-minutos*60 - segundos)/3600
<<<<<<< HEAD
    output(`${numero}s = ${horas}h + ${minutos}m + ${segundos}s`)
=======
    output(`${numero}s = ${horas}h ${minutos}m ${segundos}s`)
}

//Alinea H
{
    let string = prompt("Escreva a sua frase")
    string = string.toLowerCase();
    let numero = parseInt(prompt("Escreva o numero de posicoes a avançar"))
    let stringFinal = ""
    let abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"]
    for(let i = 0; i <string.length; i++){
       for(let j = 0 ; i < abecedario.length;i++)
       {
           if(string[i] == abecedario[i])
           {
               stringFinal = abecedario[i+numero]
           }
       }
    }
    output(stringFinal)
}

//tentativa
function funcH() {
let palavra = prompt("Escreva a palavra a codificar")
let vezes = parseInt(prompt("Quantas vezes"))
let cifra = []
let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]
for (let i = 0; i<palavra.length;i++)
{
    for(let j = 0 ; j<abc.length;i++)
    {
        if(palavra == abc)
        {
            cifra = abc[i+j]
        }
    }
}
output(abc[i])
>>>>>>> a232f5b1cfb2bc9d8fe7599d8ec8810085ee14b5
}