new Q5();

new Canvas(800, 600);

let player;  // define a variable to reference the sprite
let playerIdle;
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
	player = createPlayer();  // assign a reference to the sprite
}

function update() {
	background('skyblue');
}

function createPlayer() {  // define a function to handle the player sprite
	let p = new Sprite();
	p.size = 5;
	p.scale = p.size;

	p.addAni('idle', playerIdle);
	p.addAni('run', playerRun);

	p.moveSpeed = 5;
	p.inputX = 0;

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

		if (p.vel.x < 0) {
			p.scale.x = -p.size;
		}
		if (p.vel.x > 0) {
			p.scale.x = p.size;
		}
	}

	return p;
}