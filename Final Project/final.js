let message = document.getElementById("message");
var array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let counter_complete = 0;   //to check if the user finished the game
let counter = 1;            //to check if it is the first or second card
let counter_score = 0;      //to check how many paires of hands the user fliped

shuffle(array);

function flip(event){
    //assign numbers to cards
    for(let i = 0; i < array.length; i++){
        event.target.dataset.cardnum = array[event.target.dataset.number - 1];
    }
    //show the number
    event.target.innerHTML = event.target.dataset.cardnum;
    

    setTimeout(function(){
        event.target.innerHTML = "";
    }, 2000);

    if(counter == 1){
        counter ++;
    }
    else{
        console.log("precolor" + preColor + " preDiv" + prevDiv);
        if(prevDiv == event.target.dataset.cardnum){
            event.target.style.backgroundColor = "white";

            counter_complete ++;
            counter_score ++;
            counter = 1;
        }
        else{
            counter_score ++;
            counter = 1;
        }
    }

    prevDiv = event.target.dataset.cardnum;
    preColor = event.target.style.backgroundColor;

    if(counter_complete == 8){
        message.innerHTML = "Congratulations!! You took " + counter_score + " turns!"; 
    }
}


function shuffle(array){
    for(let i = 0; i < array.length; i++){
        let j = Math.floor(Math.random() * i);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}