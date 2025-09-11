new Q5();

new Canvas(800, 600);

let colors = ['#BAF2E9','#BAD7F2','#F2BAC9','#9297C4' ];

let dot = createDot();
createDot();
createDot();
createDot();

function update()  {
    background('#F2E2BA')
}

function createDot () {

let dot = new Sprite();
dot.color = random(colors);
dot.radius = 25;
dot.x = width / 2;
dot.y = height / 2;

// dot.direction = random(360);
dot.direction = random(360);
dot.speed = random (5, 10);

dot.overlaps(allSprites)

dot.update = () => {
if(dot.x < 0 + dot.radius) {
    dot.velocity.x *= -1;
 }

if(dot.x > width - dot.radius) {
    dot.velocity.x *= -1;
}

if(dot.y < 0 + dot.radius) {
    dot.velocity.y *= -1;
}

if(dot.y > height - dot.radius) {
    dot.velocity.y *= -1;
}
}

return dot;
}
