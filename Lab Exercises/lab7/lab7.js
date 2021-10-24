let txtString = document.getElementById("txtString");
let number = document.getElementById("number");

txtString.value = "dog";
number.value = 0;

function doThing(){
    //get the user inputs
    let name = txtString.value;
    let num = number.value;

    //create a string for output
    let log = "";

    for(let i = 0; i <= num - 1; i++){
        log = log + name;
    }

    console.log(log);
}