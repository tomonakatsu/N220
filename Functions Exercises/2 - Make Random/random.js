let message = document.getElementById("message");

function doThing(){
    let result = randomNumber();
    message.innerHTML = result;
}

function randomNumber(){
    
    return Math.floor(Math.random() * 11);
}
