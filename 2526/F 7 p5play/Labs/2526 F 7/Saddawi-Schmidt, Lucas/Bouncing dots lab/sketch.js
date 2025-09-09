new Q5();

new Canvas(800, 600);

let colors = ['#B38A58', '#6F732F', '#3C5233', '#264027'];

let dot = createDot();
let dot2 = createDot();


function update() {
    background('#0D1F22');

    if (dot.collides(dot2)) {
        dot.color = random(colors);
        dot.radius = random(20,30)
        dot.speed = random(5, 10);
        dot2.color = random(colors);
        dot2.radius = random(20,30)
        dot2.speed = random(5, 10);
    }

}


function createDot() {
    let dot = new Sprite();
    dot.color = random(colors);
dot.radius = random(10,100)
    dot.speed = random(5, 10);

dot.x = width / 2;
dot.y = height / 2

dot.direction = random(360);




dot.update = () => {
    if(dot.x < 0 + dot.radius) {
        dot.velocity.x *=-1;
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

}


return dot;
}