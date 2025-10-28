createCanvas(800, 600);

let backgroundImg;

function preload() {
    backgroundImg = loadImage('assets/Space Background.png');
}


function setup() {
    player.x = width / 2;
    player.y = height - 50;
}


function update() {
    background(backgroundImg);
}
