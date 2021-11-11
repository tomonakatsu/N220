let txtString = document.getElementById("txtString");
let average_message = document.getElementById("message1");
let sum_message = document.getElementById("message2");


function doThing(){
    let stringVector = txtString.value; //"10,15"
    let arVector = stringVector.split(",");
    let output_sum = sum(arVector);
    let output_average = average(output_sum, arVector);

    average_message.innerHTML = "1. The average: " + output_average;
    sum_message.innerHTML = "2. The sum: " + output_sum;

    txtString.value = "";
}

function sum(arVector){
    let result_sum = 0;
    for(let i = 0; i < arVector.length; i++){
        result_sum += Number(arVector[i]);
    }
    return result_sum;
}

function average(output_sum, arVector){
    let result_average = output_sum / arVector.length;

    return result_average;
}