let txtString = document.getElementById("txtString");
let message = document.getElementById("message");

function doThing(){
    let num = txtString.value; 
    let result = calculte(num);
    
    //display the result based on the return
    if(num.length == 0){
        message.innerHTML = "Please enter a number";
    }
    else if(result){
        message.innerHTML = "This number is divisible by 7";
    }
    else{
        message.innerHTML = "This number is not divisible by 7";
    }
}

function calculte(num){
    //check if it is devisible by 7
    if(num % 7 == 0){
        return true
    }
    else{
        return false
    }
}
