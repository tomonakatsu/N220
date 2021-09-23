let length = 350;
let angle = Math.PI * 45 / 180;
let sx = 500;
let sy = 1000;

function setup() {
    createCanvas(1000, 1000);

    line(sx, sy, sx, sy - length);
    let rsx = sx;
    let rsy = sy - length;
    let lsx = sx;
    let lsy = sy -length;
    length = length * 2/3;

    for(let i = 0; i <5; i++){
        line(lsx, lsy, lsx + Math.sin(angle) * length, lsy - Math.cos(angle) * length);
        line(rsx, rsy, rsx - Math.sin(angle) * length, rsy - Math.cos(angle) * length);
        console.log(Math.sin(angle) * length * 2/3);

        lsx = lsx + Math.sin(angle) * length;
        lsy = lsy - Math.cos(angle) * length;
        rsx = rsx - Math.sin(angle) * length;
        rsy = rsy - Math.cos(angle) * length;

        angle = angle * 2;

        length = length * 2/3;
    }
  }
  

  