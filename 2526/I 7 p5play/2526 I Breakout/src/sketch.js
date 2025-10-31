createCanvas(800, 600);

let backgroundImg;
let score;

function preload() {
    backgroundImg = loadImage('assets/Space Background.png');
}


function setup() {
    score = 0;
    scoreText.x = 100;
    scoreText.y = 40;

    player.x = width / 2;
    player.y = height - 50;
    resetBall();

    bricks.collides(ball, onHitBrick);
    ball.collides(floor, gameOver);
}


function update() {
    background(backgroundImg);
}


function gameOver() {
    // show a game over message
    ball.setActive(false);
    // we could make the paddle stop as well if we wanted...
}


function onHitBrick(brick, ball) {
    bricks.onHit(brick);
    if (brick.deleted) {
        score += brick.pointValue;
    }
}


async function resetBall() {
    ball.setActive(false);
    ball.x = width / 2;
    ball.y = 3 * height / 4;
    await delay(2000);
    ball.chooseDirection();
    ball.setActive(true);
}
