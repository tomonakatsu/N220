let AO = {x: 0, y: 0, diam: 0};

function setup() {
    createCanvas(400, 400);
}

function draw() {
  background(0);

  fill(255);
  AO.x ++;
  AO.y ++;
  AO.diam ++;
  circle(AO.x, AO.y, AO.diam);

}