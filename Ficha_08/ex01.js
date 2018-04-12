
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
    set name(newYear){
        this._year = newYear
    }

    //Porperty Nacionality
    get nacionality(){
        return this._nacionality
    }
    set name(newNacionality){
        this._nacionality = newNacionality
    }

    //Porperty Work 
    get work(){
        return this._work
    }
    set name(newWork){
        this._work = newWork
    }

    //Porperty Photo 
    get photo(){
        return this._photo
    }
    set name(newPhoto){
        this._photo = newPhoto
    }
}

//Definir Array com objectos Personality
let personlaties = []


windom.onload = function(){

    let frmPersonality = document.getElementById("form")
    
    //1. Validar o campo Year
    let currentYear = new Date().getFullYear() - 1
    let inputYaer = document.getElementById("inputYear")
    inputYear.setAttribute("max", currentYear)

    form.addEventListener("Reset", function() {
        inputName.focus()
    })

    form.addEventListener("submit", function(event){
        

        //2. Criar um objeto Personality
        let inputName = document.getElementById("inputName").nameValue

        let newPersonality = new Personality(name,year,nacionality,work,photo)

        //3. Guardar o objeto num array
        personlaties.push(newPersonality)

        //4. Renderizar a tabela com todos os objectos Personalty 
        renderTable()

        event.preventDefault();
    })

    // Function to render the Personality object in the table
    function renderTable(){
        let tblPersonalities = document.getElementById("tblPersonalities")
        let strTable =""
    
        for (var i = 0; i < personlaties.length; i++) {
            strHtml += `<tr>
                            <td>(i+1)</td>
                            <td>${personlaties[i].name}</td>
                            <td>${personlaties[i].year}</td>
                            <td>${personlaties[i].nacionality}</td>
                            <td>${personlaties[i].work}</td>
                            <td>${personlaties[i].photo}</td>
                        </tr>`
        }
        strHtml += "</tbody"

        tblPersonalities.innerHTML = strHtml
    } 

}