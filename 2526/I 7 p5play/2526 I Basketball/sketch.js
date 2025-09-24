new Q5();

new Canvas(800, 600);

let player;  // define a variable to hold the player sprite
let playerIdle;  // define a variable to hold the idle animation
let playerRun;

function preload() {
	playerIdle = loadAni(
		'assets/idle.png',
		{ frameSize: [24, 24], frames: 3 }
	);
	playerIdle.frameDelay = 6;

	playerRun = loadAni(
		'assets/move.png',
		{ frameSize: [24, 24], frames: 6 }
	);
	playerRun.frameDelay = 6;
}

function setup() {
	player = createPlayer();  // call the function that creates the player sprite, and store the sprite here.
}

function update() {
	background('skyblue');
}

function createPlayer() {  // set up and return the player sprite
	let p = new Sprite();
	p.scale = 5;

	p.moveSpeed = 5;
	p.inputX = 0;

	p.addAni('idle', playerIdle);
	p.addAni('run', playerRun);

	p.update = () => {
		p.inputX = 0;

		if (kb.pressing('left')) {
			p.inputX = -1;
		}
		if (kb.pressing('right')) {
			p.inputX = 1;
		}

		p.vel.x = p.inputX * p.moveSpeed;

		if (p.isMoving) {
			p.changeAni('run');
		} else {
			p.changeAni('idle');
		}
	}

	return p;
}