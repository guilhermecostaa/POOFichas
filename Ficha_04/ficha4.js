function output(texto){
    console.log(texto)
    let elemento = document.getElementById("output")
    elemento.innerHTML = texto
}

//Alinea A
function funcA() {
    let student = {
        name : "David Silva",
        course : "POO",
        grade: 12,
        propriedades: function () {
            "Name: " + this.name + ", course:" + this.course + ", grade: " + this.grade
        } 
    }
    console.log(student.propriedades())
}