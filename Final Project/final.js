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

    //first card
    if(counter == 1){
        counter ++;
    }
    //second card
    else{
        //check if the cards match
        if(prevDiv == event.target.dataset.cardnum){
            //remove the card
            event.target.style.backgroundColor = "white";
            counter_complete ++;
            counter_score ++;
            counter = 1;

            //ficnd the first card and remove it as well
            let check = event.target.dataset.cardnum;
            checker(check);
        }
        else{
            counter_score ++;
            counter = 1;
        }
    }

    //remoember the previous card number
    prevDiv = event.target.dataset.cardnum;

    //check if the user finished the game
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

function checker(check){
    var card = document.getElementsByClassName("card");
    for(var i = 0; i < card.length; i++)
    {
        if(card[i].dataset.cardnum == check){
            card[i].style.backgroundColor = "white";
        }
    }
}