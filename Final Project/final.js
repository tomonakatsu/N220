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
    
    //delete the number in 2 seconds
    setTimeout(function(){
        event.target.innerHTML = "";
    }, 2000);

    //check if it is first card
    if(counter == 1){
        counter ++;
    }
    //check if it second card
    else{
        //if two revealed cards match
        if(prevDiv == event.target.dataset.cardnum){
            //remove the card
            setTimeout(function(){
                event.target.style.backgroundColor = "white";
            }, 1500);

            counter_complete ++;
            counter_score ++;
            counter = 1;

            //find the first card and remove it as well
            let check = event.target.dataset.cardnum;
            setTimeout(function(){
                checker(check);
            }, 1500);
        }
        //if two reveal cards do not mcuh
        else{
            counter_score ++;
            counter = 1;
        }
    }

    //remoember the previous card number
    prevDiv = event.target.dataset.cardnum;

    //check if the user finished the game
    if(counter_complete == 8){
        setTimeout(function(){
            message.innerHTML = "Congratulations!! You took " + counter_score + " turns!"; 
        }, 1500);
    }
}

//huffle the numbers
function shuffle(array){
    for(let i = 0; i < array.length; i++){
        let j = Math.floor(Math.random() * i);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//find the first card which has the same number as the second card
function checker(check){
    var card = document.getElementsByClassName("card");
    for(var i = 0; i < card.length; i++)
    {
        if(card[i].dataset.cardnum == check){
            card[i].style.backgroundColor = "white";
        }
    }
}