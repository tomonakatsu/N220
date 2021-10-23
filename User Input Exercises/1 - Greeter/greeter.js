let txtString = document.getElementById("txtString");

txtString.value = "";

function doThing(){
    //get the user inputs
    let name = txtString.value;

    //output the greeting
    console.log("Hello, " + name);
}