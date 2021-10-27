let txtString = document.getElementById("txtString");


function doThing(){
    let stringVector = txtString.value; //"10,15"
    let objVector = makeVector(stringVector); //{ x: 10, y: 15}
    console.log(objVector);
    //let normaalizeVector = normaalizeVector(objVector);
    //updateUI();
}

function makeVector(stringVector){
    let arVector = stringVector.split(","); //["10", "15"]
    let objVector = {};
    objVector.x = Number(arVector[0]);
    objVector.y = Number(arVector[1]);

    return objVector;
}

function normaalizeVector(objVector){

}