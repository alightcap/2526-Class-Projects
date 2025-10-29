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
    ball.setActive(false);
    ball.x = width / 2;
    ball.y = 3 * height / 4;
    await delay(2000);
    ball.chooseDirection();
    ball.setActive(true);
}