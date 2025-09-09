new Q5();

new Canvas(800,600);

let colors = [ '#F7EBEC', '3DDBDD5', '#AC9FBB', '59656F']
let dot = createDot () ;
createDot();
createDot();

function update() {
    background ('#a06161ff');
   }  
function createDot () {
   let dot = new Sprite();
dot.color = random(colors)
dot.radius = 25;
dot.x = width / 2;
dot.y = height /2
// dot.direction = random(360);
dot.direction = random(360);
let speed = random(5,10);
dot.speed = speed;
   dot.update = () => {
if (dot.x < 0 +dot.radius) {
        dot.velocity.x *= -1;
     }

     if (dot.x > width - dot.radius) {
        dot.velocity.x *= -1
     } 
    
    if (dot.y < 0 + dot.radius) {
      dot.velocity.y *= -1;
    }

     if (dot.y > height- dot.radius)  {
        dot.velocity.y *= -1
     }

dot.speed = speed;  
   }

return dot;
}
function createbox() {

	world.gravity.y = 0;
	
	box = new Sprite (30, 60, 30, 20, STATIC)
   box.h = 80;box.w = 120

}

createbox();box.y = 120; box.x = 520
createbox(); box.y = 500; box.x = 400
