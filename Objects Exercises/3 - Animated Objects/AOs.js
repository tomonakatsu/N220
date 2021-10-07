let objects = [];

for(let i = 1; i < 8; i++) {
    objects.push( { x: -200 + (50*i), y: 0 , diam: 50} );
}


function setup() {
    createCanvas(400, 400);
}

function draw() {
  background(0);

  fill(255);
  for(let i = 0; i < objects.length; i++){
      objects[i].x ++;
      objects[i].y ++;
      circle(objects[i].x, objects[i].y , objects[i].diam)
  }

}