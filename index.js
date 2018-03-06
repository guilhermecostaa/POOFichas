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
