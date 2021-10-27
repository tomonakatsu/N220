let txtNumber = document.getElementById("txtNumber");


function doThing(){
    //get the user inputs and convert it to integer
    let num = parseInt(txtNumber.value);

    //calculate the tip when it is 10%
    let tenTip = num * .1;
    //total
    let tenTotal = num + tenTip;
    //show the result
    console.log("10% Tip: $" + tenTip + ". Total: $" + tenTotal);

    //calculate the tip when it is 15%
    let fifteenTip = num * .15;
    //total
    let fifTotal = num + fifteenTip;
    //show the result
    console.log("15% Tip: $" + fifteenTip + ". Total: $" + fifTotal);

    //calculate the tip when it is 20%
    let twentyTip = num * .2;
    //total
    let twentyTotal = num + twentyTip;

    console.log("20% Tip: $" + twentyTip + ". Total: $" + twentyTotal);
    console.log("");

}