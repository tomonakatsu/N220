let txtString = document.getElementById("txtString");
let result = document.getElementById("message1");
let result_number = document.getElementById("message2");

function doThing(){
    let stringVector = txtString.value;
    let arVector = stringVector.split(" ");
    let num = checker(arVector);

    if(num == 0){
        result.innerHTML = "There were no bad word";
        result_number.innerHTML = "The number of bad words: " + num;
    }
    else{
        result.innerHTML = "Bad words were found";
        result_number.innerHTML = "The number of bad words: " + num;
    }
    txtString.value = "";
}

function checker(arVector){
    let bad_words = ["clear", "water", "tires"];
    let counter = 0;
    for(let i = 0; i < arVector.length; i++){
        for(let j = 0; j < bad_words.length; j++){
            if(arVector[i].toLocaleUpperCase() == bad_words[j].toLocaleUpperCase()){
                counter += 1;
            }
        }
    }
    return counter;
}