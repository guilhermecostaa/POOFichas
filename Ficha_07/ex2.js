window.onload = function () {
    
    let frmRunning = document.getElementById("frmRunning")
    let txtPass = document.getElementById("txtPass")
    let txtConfirmPass = document.getElementById("txtComnfirmPass")
    let isValidate = true
    let msg = ""
    let txtData = this.document.getElementById("txtData")
    txtData.setAttribute("max", formatDate(new Date()))
    
    frmRunning.addEventListener("submit", function (event) {
    if(txtPass.value != txtConfirmPass.value ){
        isValidate = false
        msg = "Os campos de passowrd e confirmar devem ser iguais"
    }
    if(isValidate){
        alert("Registo efetuado com sucesso")
    } else{
        alert("Erro: " + msg)
        event.preventDefault();
    }

    })
    
    frmLogin.addEventListener("reset", function() {
        console.log(true)
        txtNome.focus()
    })
    }

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
    
        return [year, month, day].join('-');
    }