let message = document.getElementById("message");
let hands_CPU = ["rock", "paper", "scissors"];

function doThing(event){
    //get the attribute
    let player = event.target.getAttribute("data-response");

    //randomly select a move for the computer
    let CPU = hands_CPU[Math.floor(Math.random() * hands_CPU.length)];
    console.log(CPU, player);

    if(player == "rock"){
        if(CPU == "rock"){
            message.innerHTML = "Computer: " + CPU + ", You: " + player + ", It's a tie!";
        }
        else if(CPU == "paper"){
            message.innerHTML = "Computer: " + CPU + ", You: " + player + ", CPU won!";
        }
        else{
            message.innerHTML = "Computer: " + CPU + ", You: " + player + ", You won!";
        }
    }
    else if(player == "paper"){
        if(CPU == "paper"){
            message.innerHTML = "Computer: " + CPU + ", You: " + player + ", It's a tie!";
        }
        else if(CPU == "scissors"){
            message.innerHTML = "Computer: " + CPU + ", You: " + player + ", CPU won!";
        }
        else{
            message.innerHTML = "Computer: " + CPU + ", You: " + player + ", You won!";
        }
    }
    else{
        if(CPU == "scissors"){
            message.innerHTML = "Computer: " + CPU + ", You: " + player + ", It's a tie!";
        }
        else if(CPU == "rock"){
            message.innerHTML = "Computer: " + CPU + ", You: " + player + ", CPU won!";
        }
        else{
            message.innerHTML = "Computer: " + CPU + ", You: " + player + ", You won!";
        }
    }
}