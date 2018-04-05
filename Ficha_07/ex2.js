window.onload = function () {
    
    let frmRunning = document.getElementById("frmRunning")
    let txtPass = document.getElementById("txtPass")
    let txtConfirmPass = document.getElementById("txtComnfirmPass")
    let isValidate = true
    let msg = ""
    
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