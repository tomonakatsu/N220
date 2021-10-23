let txtString = document.getElementById("txtString");

txtString.value = "Hello World";

function doThing(){
    //get the user input
    let name = txtString.value;

    //create a new array
    let backone = [];

    //create a　new string
    let backtwo = "";

    //loop backwards
    for(let i = name.length - 1; i >= 0; i--){
        //copy out each element
        let char = name[i];
        //add that character to the start of the arrray
        backone.push(char)

        //add that character to the start of the string
        backtwo = backtwo + char;
;    }

    console.log(backone);
    console.log(backtwo);
}
