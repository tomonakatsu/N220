let diam = 400;
let sqSize = 25;
//number of circles
let circleNum = 25;

let adjust = sqSize/2;

function setup(){
  createCanvas(1250, 200);
  //counter to count the position of the fifure
  let count = 1;
  for (let i = sqSize; i < width; i = i + (width/circleNum)) {
    if(count % 3 == 0 && count % 5 == 0){
      fill(0,0,255);
      square(i-adjust, 100-adjust, sqSize);
    }
    else if(count % 3 == 0){
      fill(128, 0, 128);
      circle(i, 100, sqSize);
    }
    else if(count % 5 == 0){
      fill(0,255,0);
      square(i - adjust, 100 - adjust, sqSize)
    }
    else{
      fill(0);
      circle(i, 100, sqSize);
    }
    count += 1;
  }
}