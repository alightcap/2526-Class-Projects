new Q5();

new Canvas(800, 600);

let colors = ['#5BC0EB', '#FDE74C', '#9BC53D', '#C3423F']

createrectangle();
createdot();
createplayer();

function update() {
	background('#DAD2D8');
}

function createdot() {
	let dot = new Sprite();
dot.color = random(colors);
dot.radius = 25;
dot.x = halfWidth;
dot.y = halfHeight;

dot.direction = (160);


dot.update = () => {
	// bounce off the left side of the canvas
	if (dot.x < 0 + dot.radius) {
	 textSize(32);
      text('you win!', 400, 300);
    }

	if (dot.x > width - dot.radius) { 
		textSize(32);
         text('you lose', 400, 300);
	}
	
	if (dot.y < 0 + dot.radius) {
	 dot.vel.y *= -1; 
    }

	if (dot.y > height - dot.radius) { 
		dot.vel.y *= -1;
	}

dot.speed = 10


	
}

return dot;

}

	
function createrectangle() {
   let rectangle = new Sprite ();
rectangle.color = random(colors);
rectangle.height = 250;
rectangle.width = 25;
rectangle.x = 50;
rectangle.y = 300;

rectangle.direction = (90)
rectangle.speed = 10

rectangle.update = () => {
	
	if (rectangle.y < -150 + rectangle.height) {
	 rectangle.vel.y *= -1; 
    }

	if (rectangle.y > height - 50) { 
		rectangle.vel.y *= -1;
	}

	rectangle.physics = KINEMATIC

return rectangle;

}


}

function createplayer() {
	let player = new Sprite ();
player.color = random(colors);
player.height = 250;
player.width = 25;
player.x = 750;
player.y = 300;

player.update = () => {
if (kb.presses('s')) {
	player.move(40, 'down' ,2)
	
}
if (kb.presses('w')) {
	player.move(40, 'up' ,2)
}

}

player.physics = KINEMATIC


return player;
	
} 