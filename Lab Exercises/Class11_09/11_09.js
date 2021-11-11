let myArray = [5, 3, 5, 7];

let sum = 0;
for(let i = 0; i < myArray.length; i++){
    sum += myArray[i];
}

let sum2 = myArray.reduce(doSum);
console.log(sum2);

function doSum(sum, val){
    console.log(sum, val);
    return sum + val;
}

let sum3 = myArray.reduce((sum, val) => {
    return sum + val;
});

let sum4 = myArray.reduce((sum, val) => sum + val);

myArray.map(function (value) {console.log(value)});