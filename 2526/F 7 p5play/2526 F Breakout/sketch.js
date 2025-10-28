new Q5();

new Canvas(800, 600);

let backgroundImg;

function preload() {
    backgroundImg = loadImage('assets/Space Background.png');
}

function update() {
    background(backgroundImg);
}
