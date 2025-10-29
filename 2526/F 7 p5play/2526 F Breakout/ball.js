// ball.js
let ball = new Sprite();

ball.color = 'orange';
ball.diameter = 20;
ball.moveSpeed = 5;
ball.bounciness = 1;
ball.friction = 0;
ball.isActive = false;

ball.update = () => {
    if (ball.isActive) {
        ball.speed = ball.moveSpeed;
    }
}

ball.setActive = (isActive) => {
    ball.isActive = isActive;
}