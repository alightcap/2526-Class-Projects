// let ball;
let dot;

function setup() {
	new Canvas(800, 600);
	// new Canvas(500, 500);
	// displayMode('centered');

	// ball = new Sprite();
	// ball.diameter = 50;
	dot = new Sprite();
	dot.color = 'red';
	dot.radius = 25;
	dot.x = width / 2;
	dot.y = height / 2;
	dot.direction = 180;
	// dot.direction = random(360);
	dot.speed = 5;
	// dot.speed = random(5, 10);
}

function draw() {
	background('skyblue');

	if (dot.x < 0) {
		dot.velocity.x *= -1;
	}
	// background('skyblue');

	// if (mouse.presses()) {
	// 	ball.speed = 10;
	// 	ball.moveTo(mouse);
	// }
}
