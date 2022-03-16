window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm(){

    var pass = document.forms["myForm"]["password"];
    var repass = document.forms["myForm"]["repassword"];
    var errormsg = document.getElementById("errormsg") 
    errormsg.innerText = "";
    

    if(pass.value != repass.value)
    {
        alert = errormsg.innerText += "Not pass,";
        return false;
    }
}