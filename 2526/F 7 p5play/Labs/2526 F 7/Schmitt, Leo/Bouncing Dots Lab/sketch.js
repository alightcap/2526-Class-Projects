new Q5();

new Canvas(600,600);

let colors = ['#BDFFFD','#9FFFF5','#7CFFC4','#7CFFC4'];

let dot = createDot();
createDot();
createSquare();

function update() {
	background('#5E6973');
}	

function createDot(){

}

function createDot(){


	let dot = new Sprite();
	dot.color = random(colors);
	dot.radius = 25;
	dot.x = width / 2;
	dot.y = height / 2;

	// dot.direction = random(360);
	dot.direction = random(360);
	dot.speed = random(5,10);

	dot.overlaps(allSprites);

	dot.update = () => {

		if (dot.x < 0 + dot.radius) {
			dot.velocity.x *= -1;
		}

		if (dot.x > width - dot.radius) {
			dot.velocity.x *= -1;
		}

		if (dot.y < 0 + dot.radius) {
			dot.velocity.y *= -1;
		}

		if (dot.y > height - dot.radius) {
			dot.velocity.y *= -1;
		}

	}
	return dot
}
	


function createSquare(){


	let dot = new Sprite();
	dot.color = random(colors);
	dot.x = width / 2;
	dot.y = height / 2;

	// dot.direction = random(360);
	dot.direction = (45);
	dot.speed = random(5,10);

	dot.overlaps(allSprites);

	dot.update = () => {

		if (dot.x < 0 + dot.radius) {
			dot.velocity.x *= -1;
		}

		if (dot.x > width - dot.radius) {
			dot.velocity.x *= -1;
		}

		if (dot.y < 0 + dot.radius) {
			dot.velocity.y *= -1;
		}

		if (dot.y > height - dot.radius) {
			dot.velocity.y *= -1;
		}

	}
	return dot
}
	

	


