let oos = [ 15, 22, 10, 5 ];
let ahs = [ "#ed1a80", "#fcba03", "#ed1a80", "#fcba03" ]

function setup() {
  createCanvas(400, 400);
  
  translate(200,200);
  background(50);
  
  for( let i = 0; i < oos.length; i++) {
    fill(ahs[i]);
    circle(sin(i) * 40, cos(i)* 40, oos[i]);
    console.log("i = ", i)
    console.log("sini =", sin(i));
    console.log("cos(i) = ",cos(i));
  }
}
