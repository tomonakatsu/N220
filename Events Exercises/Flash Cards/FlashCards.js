let message = document.getElementById("message");

function doThing(event){
    let answer = event.target.getAttribute("data-answer");
    if(answer == "correct"){
        message.innerHTML = "Correct! The capital of Indiana is Indianapolis";
    }
    else{
        message.innerHTML = "Incorrect! The capital of Indiana is Indianapolis";
    }
}