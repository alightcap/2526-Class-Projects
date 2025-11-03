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
    endGameText.youLose();
    ball.setActive(false);
    // we could make the paddle stop as well if we wanted...
}


function gameWon() {
    endGameText.youWin();
    ball.setActive(false);
}


function onHitBrick(brick, ball) {
    bricks.onHit(brick);
    if (brick.deleted) {
        score += brick.pointValue;
    }
    if (bricks.length < 1) {
        gameWon();
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
