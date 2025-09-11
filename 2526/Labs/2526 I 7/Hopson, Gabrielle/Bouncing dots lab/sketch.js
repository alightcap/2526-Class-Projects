new Q5();

new Canvas(800,600);

let colors = ['#F7E8A4', '#2A1E5C', '#E8998D','#B8D0EB','#86BBD8']
let dot= createDot();
 
 createDot();
 createDot();
 createDot();
 function update() {
       background ('skyblue');
 }
   

function createDot() {
let dot = new Sprite() 
dot.color = random(colors);
dot.radius = 25;
dot.x = width / 2;
dot.y = height / 2;

dot.direction = random (360);
dot.speed = (5,10);

dot.overlaps(allSprites);
dot.update =() => {
  // bounce off the left side of canvas
	  if (dot.x < 0 + dot.radius) {
       dot.vel.x *= -1;
	  }

	   if (dot.x > width - dot.radius) {
       dot.vel.x *= -1;
	   }

	   if (dot.y > height - dot.radius) {
       dot.vel.y *= -1;
   }
    if (dot.y < 0 + dot.radius) {
       dot.vel.y *= -1;
	  }
}
return dot;
}

