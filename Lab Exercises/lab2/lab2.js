let sqSize = 50;

function setup() {
  createCanvas(400, 400);
  circle(200, 200, 40);
}

function draw() {
  background(0);

  fill(100, 82, 138);
  circle(mouseX, mouseY, sqSize);
}

function mousePressed() {
  if (sqSize <= 100){
    sqSize += 5;
  }
  else{
      sqSize=0;
  }
}