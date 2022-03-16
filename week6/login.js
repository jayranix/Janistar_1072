window.onload = loginLoad;

const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlusername = urlParams.get("username");
    const password = urlParams.get("Password");

function loginLoad(){
	var form = document.getElementById("myLogin")
    form.onsubmit = checkLogin;
}

function checkLogin(){

    var cusername = document.forms["myLogin"]["username"];
    var cpassword = document.forms["myLogin"]["Password"];

	if(urlusername != cusername.value){
        alert("Wrong Username"); 
        return false;
    }
    else if(password != cpassword.value){
        alert("Unpass");
        return false;
    }
    else{alert("pass")}
}		