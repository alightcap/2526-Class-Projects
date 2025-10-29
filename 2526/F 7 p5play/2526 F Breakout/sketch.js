// sketch.js
createCanvas(800, 600);

let backgroundImg;

function preload() {
    backgroundImg = loadImage('assets/Space Background.png');
}

function setup() {
    player.x = width / 2;
    player.y = height - 50;
    resetBall();
}

function update() {
    background(backgroundImg);
}

async function resetBall() {
    ball.x = width / 2;
    ball.y = 3 * height / 4;
    ball.direction = random(-45, -135);
    await delay(2000);  // wait for 2 seconds
    ball.setActive(true);
}