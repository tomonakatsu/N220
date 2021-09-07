let sqSize = 75;
let sqColor = "#a1eb46";
let xvelocity = 5;
let yvelocity = 5;
let x = 400;
let y = 300;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  fill(sqColor);
  circle(x, y, sqSize);
  x += xvelocity;
  y += yvelocity;

  if (x < 0 || x > 800){
    xvelocity *= -1;
  }
  if (y < 0 || y > 600){
    yvelocity *= -1;
  }
}