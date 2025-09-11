new Q5();

new Canvas(800,600);

let colors = ['#022B3A', '#1F7A8C', '#E1E5F2', '#FFFFFF'];

let dot = createDot();
createDot();
createDot();
createDot();
createDot();
createDot();
createDot();
createDot();
createDot();
createDot();
createDot();
createDot();

function update() {
	background('#BFDBF7')
}

function createDot() {
let dot = new Sprite();
dot.color = random(colors);
dot.radius = random(12,25);
dot.x = width/2
dot.y = height/2;


dot.direction = random(360);
dot.speed = random(3,7.5);

dot.overlaps(allSprites)

dot.update = () => {
if(dot.x < 0 + dot.radius) {
		dot.velocity.x *= -1;
	}

	if(dot.x > width - dot.radius) {
		dot.velocity.x *= -1;
	}

	if (dot.y < 0 + dot.radius) {
		dot.velocity.y *= -1;

	}

	if (dot.y > height - dot.radius) {
		dot.velocity.y *= -1;

	}

	if (dot.mouse.presses()) {
    	dot.remove();
	}

	if (dot.radius <= 15) {
    dot.speed = 5;
	}
	

  	
}



return dot;
}