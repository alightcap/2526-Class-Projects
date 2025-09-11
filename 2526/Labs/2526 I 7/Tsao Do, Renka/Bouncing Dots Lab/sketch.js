new Q5();

new Canvas(800, 600);

let colors = ['#9AD1D4', '#80CED7', '#007EA7', '#003249'];
let wall_collision_color = ['#A30B37', '#8D2525', '#B2A27C', '#BBB6DF', '#C6C8EE', '#86aeef', '#9AD1D4', '#80CED7', '#007EA7', '#003249']


createDot()
createDot()
createDot()
createDot()
createDot()
createDot()
createDot()
createDot()
createDot()
createDot()
create_dotEater();


function update() {
	background('#AED4E6')
	
	

}




function createDot() {
	let dot = new Sprite();
	dot.color = random(colors);
	dot.radius = 25;
	dot.x = halfWidth;
	dot.y = halfHeight;
	dot.layer = 1;

	dot.overlap(allSprites);

	dot.direction = random(360);
	dot.speed = random(1,5);

	

	

	dot.update = () => {

	
		
		
		if(dot.mouse.pressed()) {
			dot.speed = random(1, 8)
			dot.direction = random(0, 360)
			dot.color = random(wall_collision_color)
			create_dotEater()
			
		

		}
		
		

		


		//makes dot bounce off wall

		if (dot.x < 0 + dot.radius){
			dot.vel.x *= -1
			dot.color = random(wall_collision_color)
		}

		if (dot.x > width - dot.radius){
			dot.vel.x *= -1
			dot.color = random(wall_collision_color)
		}

		if (dot.y < 0 + dot.radius){
			dot.vel.y *= -1
			dot.color = random(wall_collision_color)
		}

		if (dot.y > height - dot.radius){
			dot.vel.y *= -1
			dot.color = random(wall_collision_color)
		}

		

	}
	
	return dot;
}

function create_dotEater(){

	let dot_eater = new Sprite();
	dot_eater.color = random(colors);
	dot_eater.width = 65;
	dot_eater.height = 55;
	dot_eater.x = halfWidth - 100;
	dot_eater.y = halfHeight - 100;
	dot_eater.layer = 2;

	dot_eater.direction = random(360);
	dot_eater.speed = random(2, 4)


	dot_eater.update = () => {

		


		//makes dot bounce off wall

		if (dot_eater.x < 0 + dot_eater.radius){
			dot_eater.vel.x *= -1
			
		}

		if (dot_eater.x > width - dot_eater.radius){
			dot_eater.vel.x *= -1
			
		}

		if (dot_eater.y < 0 + dot_eater.radius){
			dot_eater.vel.y *= -1
			
		}

		if (dot_eater.y > height - dot_eater.radius){
			dot_eater.vel.y *= -1
			
		}

	}

	return dot_eater



}


function eatingTheDot(){

	dot_eater.overlaps(dot)

	let dot_number = 4
	while (dot_number !== 0) {
		if (dot_eater.overlap(dot))  {
			dot.delete()
			dot_number -= 1

	}

	


	}
}


