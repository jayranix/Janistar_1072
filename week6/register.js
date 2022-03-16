window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm
	
}

function validateForm() {

    var spantext = document.getElementById("errormsg");

    var Password = document.forms["myForm"]["Password"];
    var RetypePassword = document.forms["myForm"]["RetypePassword"];

    if(Password.value != RetypePassword.value)
    {
        spantext.innerText = "Not pass";
        alert("Not pass") 
        return false;
    }
}