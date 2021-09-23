let sqSize = 25;
var y = [0];
let yPos = 5;
let count = 0;

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(0);

    for(let i = 0; i < y.length; i++){
        fill(255);
        circle(width/2, y[i], sqSize);
        y[i] += yPos;
    }

    //count 10 frames
    count += 1;
    if(count == 10){
        //every 10 frames, add 1 element to array
        y.push(0);
        //start counting frame again
        count = 0;
    }
}
