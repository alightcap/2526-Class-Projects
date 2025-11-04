// sketch.js
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
    ball.collides(floor, onGameOver);
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

function onGameOver() {
    gameOverText.onLose();
    ball.setActive(false);
    // other end game stuff...
}

function onHitBrick(brick) {
    bricks.onHit(brick);
    if (brick.deleted) {
        score += brick.pointValue;
    }
    if (bricks.length < 1) {
        onWin();
    }
}

function onWin() {
    gameOverText.onWin();
    ball.setActive(false);
}
