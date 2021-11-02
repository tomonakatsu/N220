let txtString = document.getElementById("txtString");
let message = document.getElementById("message");

function doThing(){
    let input = txtString.value;
    let result = checker(input);
    message.innerHTML = result;
}

function checker(input){
    let char = [];
    let counter = 0;

    for(let i = 0; i < input.length; i++) {
        //check if the letter is vowel
        if(input[i] != "a" && input[i] != "e" && input[i] != "i" && input[i] != "o" && input[i] != "u" && input[i] != "A" && input[i] != "E" && input[i] != "I" && input[i] != "O" && input[i] != "U"){
            //
            char = input[i];
            
            input = input + char;
            //number of stirng that need to be removed from the input
            counter ++;
        }
        else{
            //remove all characters before the first vowel
            input = input.substring(counter);
            input = input + "ay";
            return input;
        }
    }
}
