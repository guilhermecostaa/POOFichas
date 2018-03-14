function output(texto){
    console.log(texto)
    let elemento = document.getElementById("output")
    elemento.innerHTML = texto
}

//Alinea A
function funcA() {
    let numeroElementos = parseInt(prompt("Escreva o número de elementos do array:"))
    let arrayNumerico = []
    let soma = 0 
    for (let i = 0; i < numeroElementos; i++) {
        let adicionar = parseInt(prompt("Escreva o " + (i+1) + "º número que pretende adicionar ao array: "))
        arrayNumerico.push(adicionar)
        soma += adicionar
    }
    let media = soma/numeroElementos;
    console.log(media)
}

//Alinea B
function funcB() {
    let numeroElementos = parseInt(prompt("Escreva o número de elementos do array:"))
    let arrayNumerico = []
    for (let i = 0; i < numeroElementos; i++) {
        let adicionar = parseInt(prompt("Escreva o " + (i+1) + "º número que pretende adicionar ao array: "))
        arrayNumerico.push(adicionar)
    }
    arrayNumerico.sort(function(a, b){return a-b})
    console.log(arrayNumerico[0])
}

//Alinea C
function funcC() {
    let numeroElementos = parseInt(prompt("Escreva o número de elementos do array:"))
    let arrayNumerico = []
    let valorN = parseInt(prompt("Escreva o valor que nao pretende ter no array: "))
    for (let i = 0; i < numeroElementos; i++) {
        let adicionar = parseInt(prompt("Escreva o " + (i+1) + "º número que pretende adicionar ao array: "))
        arrayNumerico.push(adicionar)
    }
    for (let i = 0; i < arrayNumerico.length; i++) {
        if (valorN == arrayNumerico[i] ) {
            arrayNumerico.splice(i, 1)
        }
    }
    console.log(arrayNumerico)
}

//Alinea D
function funcD() {
    let numeroElementos = parseInt(prompt("Escreva o número de elementos do array:"))
    let arrayNumerico = []
    let string = ""
    for (let i = 0; i < numeroElementos; i++) {
        let adicionar = prompt("Escreva o que pretende adicionar ao array: ")
        arrayNumerico.push(adicionar)
        string += arrayNumerico[i]
    }
    output(string)
}

//Alinea E
function funcE() {
    let numeroElementos = parseInt(prompt("Escreva o número de elementos do array:"))
    let arrayNumerico = []
    for (let i= 0; i < numeroElementos; i++) {
        let adicionar = prompt("Escreva o que pretende adicionar ao array: ")
        arrayNumerico.push(adicionar)
    }
    arrayNumerico.sort()
    output(arrayNumerico)
}

//Alinea F
function funcF() {
    let numeroElementos = parseInt(prompt("Escreva o número de elementos do array:"))
    let arrayNumerico = []
    for (let i = 0; i < numeroElementos; i++) {
        let adicionar = prompt("Escreva o número que pretende adicionar ao array: ")
        arrayNumerico.push(adicionar)
    }
    arrayNumerico.sort()
    arrayNumerico.reverse()
    output(arrayNumerico)
}

//Alinea G
function funcG() {
    let numeroElementos = parseInt(prompt("Escreva o número de elementos do array:"))
    let arrayNumerico = []
    let maiorString = ""
    for (let i = 0; i < numeroElementos; i++) {
        let adicionar = prompt("Escreva o que pretende adicionar ao array: ")
        arrayNumerico.push(adicionar)
        if (adicionar.length > maiorString.length){
            maiorString = adicionar
        }
    }
    output(maiorString)
}

//Alinea H
function funcH() {
    let numeroElementos = parseInt(prompt("Escreva o número de elementos do array:"))
    let arrayNumerico = []
    let valorS = prompt("Escreva o valor da String que pretende contar")
    let ocorrencias = 0
    for (let i = 0; i < numeroElementos; i++) {
        let adicionar = prompt("Escreva o que pretende adicionar ao array: ")
        arrayNumerico.push(adicionar)
        if (valorS == adicionar){
            ocorrencias++
        }
    }
    output(ocorrencias)
}

//Alinea I
function funcI() {
    let arrayNumerico = []
    let resultado 
    for (let i = 0; i < 2; i++) {
        let adicionar = prompt("Escreva a sua palavra passe e confirme!")
        arrayNumerico.push(adicionar)
    }
    if(arrayNumerico[0] == arrayNumerico[1]){
        resultado = "Sim"
    }
    else{
        resultado = "Não"
    }
    output(resultado)
}

//Alinea J
function funcJ(params) {
    let numeroElementos = parseInt(prompt("Escreva o número de elementos do array:"))
    let arrayNumerico = []
    let valorP = prompt("Escreva a posição que pretende colocar a String")
    for (let i = 0; i < numeroElementos; i++) {
        let adicionar = prompt("Escreva o que pretende adicionar ao array: ")
        arrayNumerico.push(adicionar)
    }
    output(arrayNumerico[valorP])
}

//Alinea K
function funcK() {
    let arrayNumerico = []
    soma = 0
    let valorN = prompt("Escreva um valor númerico")
    for (let i = 0; i < (valorN-1); i++) {
        soma++;
        adicionar = soma
        arrayNumerico.push(adicionar)
    }
    output(arrayNumerico)
}

//Alinea L
function funcL(){
    let numeroElementos = parseInt(prompt("Escreva o número de elementos do array:"))
    let arrayNumerico = []
    let arrayFinal = []
    for (let i = 0; i < numeroElementos; i++) {
        let adicionar = prompt("Escreva o que pretende adicionar ao array: ")
        arrayNumerico.push(adicionar)
        if (adicionar % 2 == 0){
            arrayFinal.push(adicionar)
        }
    }
    output(arrayFinal)
}

//Alinea M
function funcM() {
    let numeroElementos = parseInt(prompt("Escreva o número de elementos do array:"))
    let arrayNumerico = []
    let soma1 
    for (let i = 0; i < numeroElementos; i++) {
        let adicionar = parseInt(prompt("Escreva o que pretende adicionar ao array: "))
        soma1 = adicionar + 1
        arrayNumerico.push(soma1)
    }
    output(arrayNumerico)
}

//Alinea N
function funcN() {
    let numeroElementos1 = parseInt(prompt("Escreva o número de elementos do array 1:"))
    let arrayNumerico1 = [] 
    for (let i = 0; i < numeroElementos1; i++) {
        let adicionar = parseInt(prompt("Escreva o que pretende adicionar ao array 1: "))
        arrayNumerico1.push(adicionar)
    }
    let numeroElementos2 = parseInt(prompt("Escreva o número de elementos do array 2:"))
    let arrayNumerico2 = []
    for (let i = 0; i < numeroElementos2; i++) {
        let adicionar = parseInt(prompt("Escreva o que pretende adicionar ao array 2: "))
        arrayNumerico2.push(adicionar)
    }
    let arrayFinal = []
    if(numeroElementos1 >= numeroElementos2){
        for(let i in arrayNumerico2){
            arrayFinal[i] = arrayNumerico1[i] + arrayNumerico2[i]
        }
        for(let i = arrayNumerico2.length; i < arrayNumerico1.length; i++){
            arrayFinal.push(arrayNumerico1[i])
        }
    }
    else{
        for(let i in arrayNumerico1){
            arrayFinal[i] = arrayNumerico1[i] + arrayNumerico2[i]
        }
        for(let i = arrayNumerico1.length; i < arrayNumerico2.length; i++){
            arrayFinal.push(arrayNumerico2[i])
        }
    }
    output(arrayFinal)
}