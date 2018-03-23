function output(texto){
    console.log(texto)
    let elemento = document.getElementById("output")
    elemento.innerHTML = texto
}
window.onload = function () {
    bemVindo()
}
function bemVindo() {
    document.getElementsByTagName("p")[0].innerHTML = "Bem-Vindo à minha página"
}

function funcP() {
    let frase =  document.getElementsByTagName("textarea")[0].innerHTML
    frase = "Bem vindo " + nome
}