window.onload = loginLoad;
function loginLoad(){
    var form = document.getElementById("mylogin")
    form.onsubmit = checkLogin;
}
function checkLogin();{
    const queryString = window.location.search;
    const ulParams = new
URLSearchParams(queryString);
    const username = urlParams.get("username");
    const passwoord = urlParams.get("password");

    var cusername = document.forms["mylogin"]["username"];
    var cpassword = document.forms["mylogin"]["mylogin"];

    if(username != cusername.value){
        alert("WrongUsername"); 
        return false;
    }
    else if(passwoord != cpassword.value){
        alert("Unpass");
        return false;
    }
    else{alert("pass")}

}