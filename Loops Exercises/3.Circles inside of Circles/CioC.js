let diam =400;
let sqSize = 50;
let sqColor = "#FFA500";

function setup() {
    createCanvas(400, 400);

    for (let i = 0; i <= width; i = i+8) {
        circle(200, 200, diam - i);
    }
}
