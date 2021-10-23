let userName = document.getElementById("Username");
let passWord = document.getElementById("Password");
let message = document.getElementById("result");


function doThing(){
    //check if the inputs are correct
    if(userName.value == "Username" && passWord.value == "Password"){
        message.innerHTML = "Success";
    }

    //if they are not show a message
    else{
        message.innerHTML = "Wrong information";
    }
}
