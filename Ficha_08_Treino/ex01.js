//Definir Obejtos Pessoa
class Pessoa{
    constructor(nome, data, nacionalidade, obra, foto){
        this.nome = nome
        this.nacionalidade = nacionalidade
        this.data = data
        this.foto = foto
        this.obra = obra
    }
    //Propriedade Nome
    get nome() {
        return this._nome
    }
    set nome(novoNome) {
        this._nome = novoNome
    }

    //Propriedade data
    get data() {
        return this._data
    }
    set data(novoData) {
        this._data = novoData
    }

    //Propriedade nacionalidade
    get nacionalidade() {
        return this._nacionalidade
    }
    set nacionalidade(novoNacionalidade) {
        this._nacionalidade = novoNacionalidade
    } 

    //Propriedade obra
    get obra() {
        return this._obra
    }
    set obra(novoObra) {
        this._obra = novoObra
    }

    //Propriedade foto
    get foto() {
        return this._foto
    }
    set foto(novoFoto) {
        this._foto = novoFoto
    }
}

//Definir array para guardar as pessoas
let pessoas = []


window.onload = function(){
    //Forms
    let form = document.getElementById("form")
    let nome = document.getElementById("inputName").value
    let data = document.getElementById("inputYear")
    let nacionalidade = document.getElementById("inputNacionality").value
    let obra = document.getElementById("inputWork").value
    let foto = document.getElementById("inputPhoto").value
    let ano = new Date().getFullYear() - 1

    data.setAttribute("max", ano)

    form.addEventListener("reset", function(){
        nome.focus()
    })

    form.addEventListener("submit",function(){
        console.log(true)
        //2. Criar um objeto Personality
        

        let newPessoa = new Pessoa(nome,data.value,nacionalidade,obra,foto)

        //3. Guardar o objeto num array
        pessoas.push(newPessoa)

        //4. Renderizar a tabela com todos os objectos Personalty 
        renderTable()

        event.preventDefault();
    })


    // Function to render the Personality object in the table
    function renderTable(){
        let tblPersonalities = document.getElementById("tblPersonalities")
        let strTable =`<thead><tr><th>#</th>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Nacionality</th>
                    <th>Work</th>
                    <th>Photo</th>
                    <tr>
                    <thead>`

        for (var i = 0; i < pessoas.length; i++) {
            strTable += `<tbody>
                            <tr>
                                <td scope="row">${(i+1)}</td>
                                <td>${pessoas[i].nome}</td>
                                <td>${pessoas[i].data}</td>
                                <td>${pessoas[i].nacionalidade}</td>
                                <td>${pessoas[i].obra}</td>
                                <td>${pessoas[i].foto}</td>
                            </tr>`
        }
        strTable += "</tbody>"

        tblPersonalities.innerHTML = strTable
    } 


}