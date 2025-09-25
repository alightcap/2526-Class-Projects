new Q5();

new Canvas(800, 600);
world.gravity.y = 10;  // add gravity to the world

// define variables to hold references to the sprites
let player;
let playerIdle;
let playerRun;
let ground;
let basketball;
let basketballImg;

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

	basketballImg = loadImage('assets/basketball.png');
}

function setup() {
	player = createPlayer();  // assign a reference to the sprite
	ground = createGround();
	basketball = createBasketball();
}

function update() {
	background('skyblue');
}

function createBasketball() {
	let b = new Sprite();
	b.img = basketballImg;
	b.diameter = 9;
	b.scale = 2;
	b.bounciness = 0.67;

	return b;
}

function createGround() {
	let g = new Sprite();

	g.x = halfWidth;
	g.y = height;
	g.width = width;
	g.height = 40;
	g.color = 'green';
	g.physics = "STATIC";
	g.bounciness = 0;

	return g;
}

function createPlayer() {  // define a function to handle the player sprite
	let p = new Sprite();
	// p.debug = true;
	p.height = 9;
	p.width = 6;
	p.bounciness = 0;
	p.rotationLock = true;

	p.size = 5;
	p.scale = p.size;

	p.addAni('idle', playerIdle);
	p.addAni('run', playerRun);

	p.moveSpeed = 5;
	p.inputX = 0;
	p.jumpForce = 40;
	p.bearing = -90;
	p.isGrounded = true;

	p.update = () => {
		p.inputX = 0;

		if (kb.pressing('left')) {
			p.inputX = -1;
		}
		if (kb.pressing('right')) {
			p.inputX = 1;
		}
		if (kb.presses('up')) {
			if (p.isGrounded) {
				p.applyForce(p.jumpForce);
				p.isGrounded = false;
			}
		}
		if (p.collides(ground)) {
			p.isGrounded = true;
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