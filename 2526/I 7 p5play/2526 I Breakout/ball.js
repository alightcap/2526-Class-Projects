let ball = new Sprite();

ball.radius = 10;
ball.moveSpeed = 5;
ball.color = 'orange';

ball.friction = 0;
ball.bounciness = 1;

ball.speed = 0;
ball.isActive = false;

ball.update = () => {
    if (ball.isActive) {
        ball.speed = ball.moveSpeed;
    } else {
        ball.speed = 0;
    }
}

ball.setActive = (isActive) => {
    ball.isActive = isActive;
}

ball.chooseDirection = () => {
    ball.direction = random(-45, -135);
}