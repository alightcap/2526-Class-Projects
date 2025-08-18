new Q5();

new Canvas(800, 600);

let colors = ['red', 'green', 'blue'];

createDot();
createDot();
createDot();

function update() {
	background('skyblue');
}

function createDot() {
	let dot = new Sprite();
	dot.color = random(colors);
	dot.radius = 25;
	dot.x = halfWidth;
	dot.y = halfHeight;

	dot.direction = random(360);
	dot.speed = random(5, 10);

	dot.overlaps(allSprites);

	dot.update = () => {
		// bounce off the left side of the canvas
		if (dot.x < 0 + dot.radius) {
			dot.vel.x *= -1;
		}

		if (dot.x > width - dot.radius) {
			dot.vel.x *= -1;
		}

		if (dot.y < 0 + dot.radius) {
			dot.vel.y *= -1;
		}

		if (dot.y > height - dot.radius) {
			dot.vel.y *= -1;
		}
	}

	return dot;
}
