let sqSize = 50;
let sqColor = "#FFA500";

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  fill(sqColor);
  x = width - mouseX;
  y = height - mouseY;
  circle(x, y, sqSize);

}