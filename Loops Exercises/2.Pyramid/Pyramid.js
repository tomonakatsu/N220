let sqSize = 50;
let rowNum = 3;

function setup(){
    createCanvas(400, 400);

    fill("red");
    for (let row = 0; row <= rowNum; row++){
        for (let column = 0; column <= row ; column ++){
           square(column * sqSize, row * sqSize, sqSize);
        }
    }
}