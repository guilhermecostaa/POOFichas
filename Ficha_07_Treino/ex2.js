window.onload = function(){
    //Forms
    let frmRuning = document.getElementById("frmRuning")
    let txtPassword = document.getElementById("txtPassword")
    let txtConfirmarPassword = document.getElementById("txtConfirmarPassword")
    let txtData = document.getElementById("txtData")
    let isValidate = true
    let msg = ""
    txtData.setAttribute("max", formatDate(new Date()))

    frmRuning.addEventListener("submit", function(){
        if(txtPassword.value != txtConfirmarPassword.value){
            isValidate = false
            msg = "As passwords devem ser iguais"
        } 
        if(isValidate){
            alert("Registo efetuado com sucesso")
        } else{
            alert("Erro: " + msg)
            event.preventDefault();
        }

    })

    frmRuning.addEventListener("reset", function() {
        console.log(true)
        txtNome.focus()
    })

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
    
        return [year, month, day].join('-');
    }


}

