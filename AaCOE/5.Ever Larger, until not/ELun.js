let diam = 1;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0);

  fill(255);
  circle(150, 150, diam);
  diam += 1;

  if (diam >= 200){
    diam = 1;
  }
}