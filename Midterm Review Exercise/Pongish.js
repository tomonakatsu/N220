let ball = {Size: 75, Color: "#a1eb46", xPos: -10, yPos: -10, x: 400, y: 300};
let paddle = {Width: 30, Height: 100, Color: "#a1eb46", x: 600}

function setup() {
  createCanvas(800, 600);
}

function draw() {
    background(0);
  
    fill(paddle.Color);
    rect(paddle.x, mouseY, paddle.Width, paddle.Height);

    fill(ball.Color);
    circle(ball.x, ball.y, ball.Size);
    ball.x += ball.xPos;
    ball.y += ball.yPos;
  
    //bounces off the LEFT
    if (ball.x < ball.Size/2){
        ball.xPos *= -1;
    }
    //bounces off the TOP and BOTTOM
    if (ball.y < ball.Size / 2 || ball.y > 600 - ball.Size / 2){
        ball.yPos *= -1;
    }

    if (ball.x > 800){
        ball.x = width/2;
        ball.y = height/2;
        ball.xPos *= -1;
        ball.yPos *= -1;
    }

    y = mouseY;
    if(ball.x + ball.Size / 2 >= paddle.x && ball.y > y && ball.y < y + paddle.Width){
        ball.xPos *= -1;
        ball.yPos *= -1;
    }
}
