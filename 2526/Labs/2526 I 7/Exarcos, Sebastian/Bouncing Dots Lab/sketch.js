new Q5();

new Canvas(800,600);
let colors = ['#56828bff','#e2b4bd','#945b5dff'];
createDot();
createDot();
createDot();
createDot();
createDot();





function update() {
	background('#7a9cc6');
    // bounce off the left of the screen smoothly
}
	
function createDot(){
	let dot = new Sprite();
	dot.color = random(colors);
	dot.radius = 25;
	dot.x = halfWidth
	dot.y = halfHeight
	dot.direction = random(360);
    dot.speed = random(5,10);
	dot.overlaps(allSprites)
	
    dot.update = () => {
		if (mouse.pressing()) {
		world.timeScale = 0.25;
	} else {
		
		world.timeScale = 1;
	}
		if (dot.mouse.pressing()) dot.delete();

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

