let sqSize = 75;
let sqColor = "#a1eb46";
let xPos = 5;
let yPos = 5;
let x = 400;
let y = 300;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  fill(sqColor);
  circle(x, y, sqSize);
  x += xPos;
  y += yPos;

  if (x < 0 || x > 800){
    xPos *= -1;
  }
  if (y < 0 || y > 600){
    yPos *= -1;
  }
}