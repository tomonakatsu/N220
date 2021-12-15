let sqColor = "#2f528a";
let sqColorR = 0;
let sqSize = 50;

function setup() {
    createCanvas(400, 400);
    circle(200, 100, 40);
}

function draw() {
    fill(sqColorR, 82, 138);
    rect(30, 30, sqSize, sqSize);
    sqSize = sqSize + 1;
    sqColorR += 1;
}
