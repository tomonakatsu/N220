let reqWidths = 300;
let reqHeight = 50;
let strawberry = "#f7b2cf";
let vanilla = "#fbf4e1";
let chocolate = "#8D5531";

var colors = [strawberry, chocolate, vanilla]

function setup(){
    createCanvas(400, 400);
}

function draw(){
    var colors = [strawberry, vanilla, chocolate]
    for (let i = 0; i < 3; i++){
        fill(colors[i]);
        rect(50, (i+1)*reqHeight, reqWidths, reqHeight)
    }
}