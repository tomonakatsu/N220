let xstart = 10;
let ystart = 70;
  let pol = 70;
  let radius = 15;
  let j = 10;


function setup() {
  createCanvas(400, 400);
  background(220);
  fill(255,0,0);


  //draws a sine curve
    
}

  //For fun : animate it!
function draw() {
 background(220);
 for(let i = 0; i < 50; i++) {
    let zf = Math.sin(i * pol) * radius;
    circle(i * j + xstart, zf + ystart, 10);
 }
}