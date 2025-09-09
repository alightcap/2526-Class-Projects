new Q5();

new Canvas(768, 576);

let maze = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1],
	[1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
	[1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
	[1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1],
	[1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
	[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

let playerIdleAnim = loadAni(
	'assets/idle.png',
	{ frameSize: [24, 24], frames: 3 },
);
playerIdleAnim.frameDelay = 6;

let playerWalkAnim = loadAni(
	'assets/move.png',
	{ frameSize: [24, 24], frames: 6 },
);
playerWalkAnim.frameDelay = 6;

let coinAnim = loadAni(
	'assets/red_coin.png',
	{ frameSize: [16, 16], frames: 5 },
);
coinAnim.frameDelay = 12;

let player = createPlayer();
player.x = 48 + 24;
player.y = halfHeight + 48 + 24;

let coin = createCoin();
coin.x = width - 2 * 48 - 24;
coin.y = 48 + 24;
let coinCount = 1;

let gameOverText = createGameOverText();

player.overlaps(coin, coin.collect);

makeMaze(maze);

function update() {
	background('skyblue');

	if (coinCount == 0) {
		gameOverText.visible = true;
	}
}

function createCoin() {
	let c = new Sprite();
	// c.debug = true;
	c.width = 8;
	c.height = 8;
	c.scale = 1.5;
	c.addAni(coinAnim);

	c.collect = () => {
		coinCount--;  // there's a better way to do this, we will see in a later project.
		coin.delete()
	}

	return c;
}

function createGameOverText() {
	let g = new Sprite();
	g.physics = "NONE";
	g.text = "You Win!";
	g.textSize = 180;
	g.width = 0;
	g.height = 0;
	g.visible = false;
	g.layer = 1;

	return g;
}

function createPlayer() {
	let s = new Sprite();
	// s.debug = true;
	s.width = 9;
	s.height = 9;
	s.scaleValue = 2;
	s.scale = s.scaleValue;
	s.rotationLock = true;

	s.walkSpeed = 5;  // this is a custom property

	s.addAni('idle', playerIdleAnim);
	s.addAni('walk', playerWalkAnim);

	s.update = () => {
		let inputVector = s.getInput();

		s.visuals(inputVector);

		s.vel.x = inputVector.x * s.walkSpeed;
		s.vel.y = inputVector.y * s.walkSpeed;
	}

	s.getInput = () => {
		let inputVector = createVector(0, 0);

		if (kb.pressing('left')) {
			inputVector.x = -1;
		}

		if (kb.pressing('right')) {
			inputVector.x = 1;
		}

		if (kb.pressing('up')) {
			inputVector.y = -1;
		}

		if (kb.pressing('down')) {
			inputVector.y = 1;
		}

		inputVector.normalize();

		return inputVector;
	}

	s.visuals = (inputVector) => {
		if (inputVector.x < 0) {
			s.scale.x = -s.scaleValue;
		}

		if (inputVector.x > 0) {
			s.scale.x = s.scaleValue;
		}

		if (s.isMoving) { // isMoving is true when the velocity is non-zero
			s.changeAni('walk');
		} else {
			s.changeAni('idle');
		}
	}

	return s;
}

function makeMaze(maze) {
	for (let i = 0; i < maze.length; i++) {
		for (let j = 0; j < maze[0].length; j++) {
			if (maze[i][j] == 1) {
				let x = j * 48 + 24;
				let y = i * 48 + 24;

				let wall = new Sprite(x, y);
				wall.physics = "STATIC";
				wall.color = 'green';
				wall.layer = 0;
			}
		}
	}
}