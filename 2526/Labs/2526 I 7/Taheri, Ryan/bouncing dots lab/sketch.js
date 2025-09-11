new Q5();

new Canvas(800, 600);

let colors = ['#40E0D0', '#00B2CA', '#D81159', '#000000', '#FFFECB'];

createDot();
createDot();
createDot();
createDot();
createDot();

function update() {
	background('#32DE8A');
}

function createDot() {
	let dot = new Sprite();
	dot.color = random(colors);
	dot.radius = 25;
	dot.x = halfWidth;
	dot.y = halfHeight;

	dot.direction = random(360);
	dot.speed = random(5, 7);

	dot.overlaps(allSprites);
	
	
	

	dot.update = ()=> {
		if (dot.mouse.pressing()) dot.color = random(colors);
		if (dot.mouse.pressing()) dot.direction = random(360);
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
