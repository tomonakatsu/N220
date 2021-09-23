let brWidth = 100;
let brHeight = 50;
var x = [];
var y = [];
let yPos = 5;
let color = "#DC5539"

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(0);
    for(let i = 0; i < x.length; i++){
        fill(color);
        rect(x[i] - brWidth/2, y[i] - brHeight/2, brWidth, brHeight)
        y[i]+= yPos;
    }
}

function mousePressed(){
    x.push(mouseX);
    y.push(mouseY);
}