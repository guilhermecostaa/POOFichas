
//Definir uma class para representar Personality
class Personality{
    constructor(name,year,nacionality,work,photo){
        this.name = name
        this.year = year
        this.nacionality = nacionality
        this.work = work
        this.photo = photo
    }

    //Porperty Name
    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName
    }

    //Porperty Year 
    get year(){
        return this._year
    }
    set year(newYear){
        this._year = newYear
    }

    //Porperty Nacionality
    get nacionality(){
        return this._nacionality
    }
    set nacionality(newNacionality){
        this._nacionality = newNacionality
    }

    //Porperty Work 
    get work(){
        return this._work
    }
    set work(newWork){
        this._work = newWork
    }

    //Porperty Photo 
    get photo(){
        return this._photo
    }
    set photo(newPhoto){
        this._photo = newPhoto
    }
}

//Definir Array com objectos Personality
let personlaties = []


window.onload = function(){

    let form = document.getElementById("form")
    
    //1. Validar o campo Year
    let currentYear = new Date().getFullYear() - 1
    let year = document.getElementById("inputYear")
    let nacionality = document.getElementById("inputNacionality").value
    let work = document.getElementById("inputWork").value
    let photo = document.getElementById("inputPhoto").value

    year.setAttribute("max", currentYear)

    form.addEventListener("reset", function() {
        inputName.focus()
    })

    form.addEventListener("submit", function(event){
        
        console.log(true)
        //2. Criar um objeto Personality
        let name = document.getElementById("inputName").value

        let newPersonality = new Personality(name,year.value,nacionality,work,photo)

        //3. Guardar o objeto num array
        personlaties.push(newPersonality)

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
    
        for (var i = 0; i < personlaties.length; i++) {
            strTable += `<tbody>
                            <tr>
                                <td scope="row">${(i+1)}</td>
                                <td>${personlaties[i].name}</td>
                                <td>${personlaties[i].year}</td>
                                <td>${personlaties[i].nacionality}</td>
                                <td>${personlaties[i].work}</td>
                                <td>${personlaties[i].photo}</td>
                            </tr>`
        }
        strTable += "</tbody>"

        tblPersonalities.innerHTML = strTable
    } 

}