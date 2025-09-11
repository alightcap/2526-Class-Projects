new Q5();

new Canvas(800, 600);
let colors = ['#2081C3', '#EFCA08','#34E4EA','#F08700' ]

let MaxDots=50

Sprites=1

{if (Sprites<MaxDots); 
	let dot = createDot();
}

createDot();
createDot();

function update() {
	background('#E8E1EF');
}
 


function createDot() {
	Sprites + 1
	let dot = new Sprite();
	dot.color = random(colors);
	dot.radius=25;
	dot.x=width/ 2;
	dot.y=height/ 2;

	// dot.direction = random(360);
	dot.direction = random(360);
	dot.speed = random(5,10);

	dot.overlaps (allSprites)



	dot.update = () => {
		if (dot.x < 0 + dot.radius) {
			dot.velocity.x *= -1;
			createDot(); 
		}

		if (dot.x >  width - dot.radius) {
			dot.velocity.x *= -1;
			createDot();
		}

		if (dot.y < 0 + dot.radius) {
			dot.velocity.y *= -1;
			createDot();
		}

		if (dot.y > height - dot.radius) {
			dot.velocity.y *= -1;
			createDot();
		}
	}	
	
	return dot
}

