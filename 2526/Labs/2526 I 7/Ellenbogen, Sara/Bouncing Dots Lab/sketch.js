new Q5();

new Canvas(800, 600);

let colors = ['#8cbeccff', '#005C69', '#386276ff', '#2e363cff', '#61A0AF'];
dot_random_color = ['#C92C34', '#DE1A1A']
createDot();
createDot();
createDot();
createDot();
createDot();
createDot();
createDot();
createDot();
createDot();
let box = createBox();

let backgroundColor = random(['#384C71', '#ACEDFF'])

function update() {
	background(backgroundColor);
}

function createDot() {
	let dot = new Sprite();
	dot.color = random(colors) ;
	dot.radius = 25;
	dot.x = halfWidth
	dot.y = halfHeight;

	dot.direction = random(360);
	dot.speed = (3)

	dot.overlaps(allSprites)

	function colliding() {
	}

	dot.update = () => {
	if (dot.mouse.pressing()) {
		 dot.delete()
		// want to turn invisible
	}
		if (dot.colliding(box)) {
		createDot();
		// want to make a new dot
	}

		// dot bounces off wall
		
		if (dot.x < 0 + dot.radius) {
			dot.vel.x *= -1;
			dot.color = random(dot_random_color)
	}

		if (dot.x > width - dot.radius) {
			dot.vel.x *= -1;
			dot.color = random(dot_random_color)
	}

		if (dot.y < 0 + dot.radius) {
			dot.vel.y *= -1;
			dot.color = random(dot_random_color)
	}

		if (dot.y > height - dot.radius) {
			dot.vel.y *= -1;
			dot.color = random(dot_random_color)
}

	}

	return dot;
		
}





function createBox() {
	let box = new Sprite(30, 300, 60, 5, STATIC);
	box.color = ('yellow') ;
	box.width = 50
	box.height = 450
	box.x = 0
	box.y = 300

	return box;
	}


