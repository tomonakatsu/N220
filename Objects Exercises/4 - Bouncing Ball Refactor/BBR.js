let BBR = {sqSize: 75, sqColor: "#a1eb46", xPos: 5, yPos: 5, x: 400, y: 300};

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  fill(BBR.sqColor);
  circle(BBR.x, BBR.y, BBR.sqSize);
  BBR.x += BBR.xPos;
  BBR.y += BBR.yPos;

  if (BBR.x < 0 || BBR.x > 800){
    BBR.xPos *= -1;
  }
  if (BBR.y < 0 || BBR.y > 600){
    BBR.yPos *= -1;
  }
}