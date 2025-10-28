let ball = new Sprite();

ball.radius = 10;
ball.moveSpeed = 5;
ball.color = 'orange';

ball.direction = 0;

ball.update = () => {
    ball.speed = ball.moveSpeed;
}