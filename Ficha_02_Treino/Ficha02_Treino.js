function output(texto){
    console.log(texto)
    let elemento = document.getElementById("output")
    elemento.innerHTML = texto
}

function funcA() {
    let numeroElementos = parseInt(prompt("Escreva o numero de elementos do array"))
    let arrayNumerico = []
    let soma = 0
    for(let i = 0; i < numeroElementos; i++){
        let adicionar = parseInt(prompt("Escreva o "+ i+1 + "º elemento do array"))
        arrayNumerico.push(adicionar)
        soma += adicionar
    }
    let media = soma/numeroElementos
    output(media)
}

function funcB() {
    let numeroElementos = parseInt(prompt("Escreva o numero de elementos do array"))
    let arrayNumerico = []
    for(let i = 0; i < numeroElementos; i++){
        let adicionar = parseInt(prompt("Escreva o "+ i+1 + "º elemento do array"))
        arrayNumerico.push(adicionar)
    }
    arrayNumerico.sort(function(a, b){return a-b})
    output(arrayNumerico[0])
}

function funcC() {
    let numeroElementos = parseInt(prompt("Escreva o numero de elementos do array"))
    let arrayNumerico = []
    let valorN = parseInt(prompt("Escreva o valor que pretende retirar ao array"))
    for(let i = 0; i < numeroElementos; i++){
        let adicionar = parseInt(prompt("Escreva o "+ i+1 + "º elemento do array"))
        arrayNumerico.push(adicionar)
    }
    for (let i = 0; i < arrayNumerico.length; i++) {
        if (valorN == arrayNumerico[i] ) {
            arrayNumerico.splice(i, 1)
        }
    }
    output(arrayNumerico[0])
}

function funcD() {
    let numeroElementos = parseInt(prompt("Escreva o numero de elementos do array"))
    let arrayNumerico = []
    let string = ""
    for(let i = 0; i < numeroElementos; i++){
        let adicionar = prompt("Escreva o "+ i+1 + "º elemento do array")
        arrayNumerico.push(adicionar)
        string += arrayNumerico[i]
    }
    output(string)
}

function funcE() {
    let numeroElementos = parseInt(prompt("Escreva o numero de elementos do array"))
    let arrayNumerico = []
    for(let i = 0; i < numeroElementos; i++){
        let adicionar = prompt("Escreva o "+ i+1 + "º elemento do array")
        arrayNumerico.push(adicionar)
    }
    arrayNumerico.sort()
    output(arrayNumerico)
}

function funcF() {
    let numeroElementos = parseInt(prompt("Escreva o numero de elementos do array"))
    let arrayNumerico = []
    for(let i = 0; i < numeroElementos; i++){
        let adicionar = prompt("Escreva o "+ i+1 + "º elemento do array")
        arrayNumerico.push(adicionar)
    }
    arrayNumerico.sort()
    arrayNumerico.reverse()
    output(arrayNumerico)
}

function funcG() {
    let numeroElementos = parseInt(prompt("Escreva o numero de elementos do array"))
    let arrayNumerico = []
    let maiorString = ""
    for(let i = 0; i < numeroElementos; i++){
        let adicionar = prompt("Escreva o "+ i+1 + "º elemento do array")
        arrayNumerico.push(adicionar)
        if(arrayNumerico[i].length > maiorString){
            arrayNumerico[i] = maiorString
        }
    }
    output(maiorString)
}

function funcH() {
    let numeroElementos = parseInt(prompt("Escreva o numero de elementos do array"))
    let arrayNumerico = []
    let valorS = prompt("Escreva letra/palavra que pretende saber as ocorrencias no array")
    let ocorrencias = 0
    for(let i = 0; i < numeroElementos; i++){
        let adicionar = prompt("Escreva o "+ i+1 + "º elemento do array")
        arrayNumerico.push(adicionar)
        if(valorS == adicionar){
            ocorrencias ++
        } else{
            ocorrencias = 0
        }
    }
    output(ocorrencias)
}

function funcI() {
    let arrayNumerico = []
    for(let i = 0; i < 2;i++){
        let adicionar = prompt("Escreva a sua palavra passe e confirme")
        arrayNumerico.push(adicionar)
    }
    if(arrayNumerico[0] == arrayNumerico[1]){
        output("1")
    } else{
        output("0")
    }
}

function funcJ() {
    let numeroElementos = parseInt(prompt("Escreva o numero de elementos do array"))
    let arrayNumerico = []
    for(let i = 0; i < numeroElementos; i++){
        let adicionar = prompt("Escreva o "+ i+1 + "º elemento do array")
        arrayNumerico.push(adicionar)
    }
    let valorP = parseInt(prompt("Escreva a posicao onde pretende que esteja o valor P"))
    output(arrayNumerico[valorP])
}

function funcK() {
    let numeroElementos = parseInt(prompt("Escreva o numero de elementos do array"))
    let arrayNumerico = []
    let soma = 0
    let valorN = parseInt(prompt("Escreva ate que numero pretende exibir o array"))
    for(let i = 0; i < (valorN-1); i++){
        soma++
        let adicionar = soma
        arrayNumerico.push(adicionar)
    }
    output(arrayNumerico)
}

function funcL() {
    let numeroElementos = parseInt(prompt("Escreva o numero de elementos do array"))
    let arrayNumerico = []
    let arrayFinal = []
    for(let i = 0; i < numeroElementos; i++){
        let adicionar = prompt("Escreva o "+ i+1 + "º elemento do array")
        arrayNumerico.push(adicionar)
    }
    for(let i = 0; i < arrayNumerico.length; i++){
        if(arrayNumerico[i] % 2 == 0){
            arrayFinal.push(arrayNumerico[i])
        }
    }
    output(arrayFinal)
}

function funcM() {
    let numeroElementos = parseInt(prompt("Escreva o numero de elementos do array"))
    let arrayNumerico = []
    let soma
    for(let i = 0; i < numeroElementos; i++){
        let adicionar = prompt("Escreva o "+ i+1 + "º elemento do array")
        soma = adicionar + 1
        arrayNumerico.push(soma)
    }
    output(arrayNumerico)
}

function funcN() {
    let numeroElementos1 = parseInt(prompt("Escreva o numero de elementos do array"))
    let arrayNumerico1 = []
    for(let i = 0; i < numeroElementos1; i++){
        let adicionar1 = prompt("Escreva o "+ i+1 + "º elemento do array")
        arrayNumerico1.push(adicionar1)
    }
    let numeroElementos2 = parseInt(prompt("Escreva o numero de elementos do array"))
    let arrayNumerico2 = []
    for(let i = 0; i < numeroElementos2; i++){
        let adicionar2 = prompt("Escreva o "+ i+1 + "º elemento do array")
        arrayNumerico2.push(adicionar2)
    }
    let soma = 0
    let arrayFinal = []
    if(numeroElementos1 <= numeroElementos2){
        for (let i = 0; i < numeroElementos1; i++){
            soma = arrayNumerico1[i] + arrayNumerico2[i] 
            arrayFinal.push(soma)
        }
        for(let i = numeroElementos1; i < numeroElementos2; i++){
            arrayFinal.push(arrayNumerico2[i])
        }
    }
    else(numeroElementos1 >= numeroElementos2){
        for (let i = 0; i < numeroElementos2; i++){
            soma = arrayNumerico1[i] + arrayNumerico2[i] 
            arrayFinal.push(soma)
        }
        for(let i = numeroElementos2; i < numeroElementos1; i++){
            arrayFinal.push(arrayNumerico1[i])
        }
    }
    output(arrayFinal)
}