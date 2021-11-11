let ipnut1 = document.getElementById("input1");
let first_message = document.getElementById("message1");
let input2 = document.getElementById("input2");
let second_message = document.getElementById("message2");

function doThing1(){
    let first = ipnut1.value;
    let result = checker(first);
    if(result){
        first_message.innerHTML = "This letter is a vowel";
    }
    else{
        first_message.innerHTML = "This letter is NOT a vowel";
    }
    
}

function checker(first){
    first = first.toLocaleUpperCase();
    if(first == "A" || first == "E" || first == "I" || first == "O" || first == "U"){
        return true;
    }
    else{
        return false;
    }
}



function doThing2(){
    let second_input = input2.value;
    let result2 = remove(second_input);
    second_message.innerHTML = result2;
}

function remove(second_input){
    second_input = second_input.toLocaleUpperCase();
    let output = "";
    for(let i = 0; i < second_input.length; i++){
        if(second_input[i] != "A" && second_input[i] != "E" && second_input[i] != "I" && second_input[i] != "O" && second_input[i] != "U"){
            output = output + second_input[i];
        }
    }
    return output;
}