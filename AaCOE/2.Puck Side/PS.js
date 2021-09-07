let sqSize = 50;
let sqColor = 0;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(0);

  fill(sqColor);
  circle(mouseX, mouseY, sqSize);
  if(mouseX <= width/2){
      sqColor = "#0000FF";
  }
  else{
      sqColor = "#ff0000";
  }
}