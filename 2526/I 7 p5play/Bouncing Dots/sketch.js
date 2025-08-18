new Q5();

new Canvas(800, 600);

let dot = new Sprite();
dot.color = 'red';
dot.radius = 25;
dot.x = halfWidth;
dot.y = halfHeight;

dot.direction = 180;
dot.speed = 5;

function update() {
	background('skyblue');

	// bounce off the left side of the canvas
	if (dot.x < 0 + dot.radius) {
		dot.vel.x *= -1;
	}

	if (dot.x > width - dot.radius) {
		dot.vel.x *= -1;
	}
}
