//Alinea A
function funcA() {
    console.log("Olá Mundo!")
}

//Alinea B
function funcB() {
    let name = prompt("Escreva o seu nome: ")
    console.log("Olá " + name + "!")
}

//Alinea C
function funcC() {
    let a = prompt("Escreva o comprimento: ")
    let b = prompt("Escreva a largura: ")
    let area = areaRetangulo(a, b)
    console.log("Área é igual a " + area)
}

function areaRetangulo(a, b) {
    return a * b;
}

//Alinea D
function funcD() {
    let valor1 = parseInt(prompt("Escreva o 1º valor: "))
    let valor2 = parseInt(prompt("Escreva a 2º valor: "))
    let oper = prompt("Digite o seu operador!")
    let result
    switch(oper) {
        case "+": result = valor1 + valor2; break;
        case "-": result = valor1 - valor2; break;
        case "*": result = valor1 * valor2; break;
        case "/": result = valor1 / valor2; break;
        default: console.log("Operaçao inválida!"); break;
    }
    if (result !=undefined) {
        console.log("O resultado é " + result)
    }
    
}

//Alinea E
function funcE() {
    let peso = parseFloat(prompt("Escreva o seu peso em Kg: "))
    let altura = parseFloat(prompt("Escreva o seu altura em M: "))
    console.log("PESO: " + peso)
    console.log("ALTURA: " + altura)

    let imc = peso / (altura * altura)
    console.log("IMC: " + imc)
    if (imc < 18.5) {
        console.log("Está abaixo do peso!!!")
    }
    else if (imc >= 18.5 && imc < 24.9) {
        console.log("Está com um peso normal!")
    }
    else if (imc >= 24.9 && imc < 29.9) {
        console.log("Está com sobrepeso!")
    }
    else if (imc >= 30 && imc < 34.9) {
        console.log("Está com obesidade grau 1!")
    }
    else if (imc >= 35 && imc < 39.9) {
        console.log("Está com obesidade grau 2!")
    }
    else{
        console.log("Está com obesidade grua 3!")
    }
}

//Alinea F
function funcF() {
    let string = prompt("Ecreva uma palavra")
    let numero = prompt("Escreva um número")
    for (let i=0; i<numero; i++) {
        console.log(string)
    }
}

//Alinea G
function funcG() {
    let valorA = parseInt(prompt("Escreva um número inteiro"))
    let valorB = parseInt(prompt("Escreva outro número inteiro"))
    for (let i = valorA; i<valorB; i++) {
        console.log(i)
    }
}

//Alinea H
function funcH() {
    let numero = parseInt(prompt("Escreva um número inteiro"))
    for (let i = 1; i<=10; i++){
        let resultado = numero*i
        console.log(`${numero} x ${i} = ${resultado}`)
    }
}

//Alinea I
function funcI() {
    let valorA = parseInt(prompt("Escreva o primeiro valor do intervalo"))
    let valorB = parseInt(prompt("Escreva o segundo valor do intervalo"))
    let multiplos = 0
    for (let i = valorA; i<valorB; i++){
        if(i % 3 == 0){
           multiplos = multiplos+i
        }
    }
    console.log(multiplos)
}

//Alinea J
function funcJ() {
    let numero = parseInt(prompt("Escreva um número: "))
    let resultado
    if(numero != 2){
        for (let i = 2; i < numero; i++){
            if(numero % i == 0){
                resultado = "Não"
                break
            }
            else{
                resultado = "Sim"
            }
        }
    }
    else
    {
        resultado = "Sim"
    }
    console.log(resultado)
}

//Alinea K
function funcK() {
    let numero = parseInt(prompt("Escreva um numero inteiro: "))
    let fatorial = 1
    for(let i = 1; i <= numero; i++){
        fatorial *= i
    }
    console.log(fatorial)
}

//Alinia M
function funcM() {
    let valorAno = parseInt(prompt("Escreva um ano: "))
    let resultado
    if ((valorAno % 4 == 0 || valorAno % 400) && valorAno % 100 != 0) {
        resultado = "Bissexto!"
    }
    else {
        resultado = "Não é bissexto!"
    }
    
    console.log(resultado)
}

//Alinea N
function funcN() {
    let numero = prompt("Escreva um número entre 100 a 999")
    if(numero.charAt(0) == numero.charAt(2)){
        console.log("Sim")
    }
    else{
        console.log("Não")
    }
}

//Alinea O
function funcO() {
    let aleatorio = parseInt(Math.random() * 99) + 1
    console.log(aleatorio)
    for(let i = 1; i <= 5; i++){
        let numero = parseInt(prompt("Tente adivinhar o número: "))
        if (numero == aleatorio) {
            console.log("Parabens!! Acertou!!")
        }
        else if(numero < aleatorio){
            console.log("Mais acima!!")
        }
        else if(numero > aleatorio){
            console.log("Mais abaixo!!")
        }
    }
    console.log("Game Over!! Esgotaste as tentativas!!!")
}