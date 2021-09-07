function setup(){
    let whitebarNum = 7;
    createCanvas(1500,1000)
    background(255);

    //red rectangle
    fill(2187, 19, 61);
    rect(50,50,1235, 650);

    //white lines
    fill(255);
    for (let i = 1; i < whitebarNum; i++) {
        rect(50,i*100,1235, 50);
    }

    //blue rectangle
    fill(0, 33, 71);
    rect(50,50,494, 350);

    //4 black lines as a flame
    stroke(0);
    strokeWeight(10);
    line(50,50,1285,50);
    line(50,50,50,700);
    line(50,700,1285,700);
    line(1285,50,1285,700);
}

//create circles in a specific range
function draw(){
    stroke(2187, 19, 61);
    strokeWeight(5);
    fill(255);
    let xc = constrain(mouseX, 85, 515);
    let yc = constrain(mouseY, 85, 370);
    circle(xc, yc, 50);
}