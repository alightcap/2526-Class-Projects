new Q5();

new Canvas(800, 600);

let colors = ['#9597fbff', '#68b0ab', '#7cd1e8ff', '#795959ff', '#ffc78bff', '#775977', '#586F7C'];

createDot();
createDot();
createDot();
createDot();
createDot();
createDot();
createDot();
createDot();


function update() {
	background('#f8f1e7ff');
}

// dot.overlaps(allSprites);

function createDot() {
	let dot = new Sprite();
	dot.color = random(colors);
	dot.radius = 25;
	dot.x = halfWidth;
	dot.y = halfHeight;

	dot.direction = random(360);
	dotSpeed = random(5, 10);


	dot.update = () => {
		dot.speed = dotSpeed;
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

		if (kb.pressing(' ')) {
			dot.direction = (90);
		}

		if (kb.presses('shift')) {
			dot.direction = random(360);
		}

		if (dot.collides(allSprites)) {
			dot.delete()
		}
	}

	// function collect()

	return dot;
}







