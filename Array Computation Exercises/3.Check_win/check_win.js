let txtString = document.getElementById("txtString");
let output = document.getElementById("message");

function doThing(){
    let stringVector = txtString.value;
    let arVector = stringVector.split(",");
    let result = checker(arVector);

    if(result){
        output.innerHTML = "winner";
    }
    else{
        output.innerHTML = "not winner";
    }
}

function checker(arVector){
    for(let i = 0; i < arVector.length; i++){
        if(arVector[i] == "1"){
            if(arVector[i+1] == "1"){
                if(arVector[i+2] == "1"){
                    return true;
                }
            }
        }
    }
    return false;
}