let txtNumber = document.getElementById("txtNumber");


function doThing(){
    //get the user inputs
    let num = parseInt(txtNumber.value);

    //calculate the tip when it is 10%
    let ten = num * .1;
    //total
    let tenTotal = num + ten;
    //show the result
    console.log("10% Tip: $" + ten + ". Total: $" + tenTotal);

    //calculate the tip when it is 15%
    let fifteen = num * .15;
    //total
    let fifTotal = num + fifteen;
    //show the result
    console.log("15% Tip: $" + fifteen + ". Total: $" + fifTotal);

    //calculate the tip when it is 20%
    let twenty = num * .2;
    //total
    let twentyTotal = num +twenty;
    //show the result
    console.log("20% Tip: $" + twenty + ". Total: $" + twentyTotal);

}
