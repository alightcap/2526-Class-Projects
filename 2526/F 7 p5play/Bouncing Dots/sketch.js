new Q5();

new Canvas(800, 600);

let dot = new Sprite();
dot.color = 'red';
dot.radius = 25;
dot.x = width / 2;
dot.y = height / 2;

// dot.direction = random(360);
dot.direction = 90;
dot.speed = 5;

function update() {
	background('skyblue');

	if (dot.y > height) {
		dot.velocity.y *= -1;
	}
}