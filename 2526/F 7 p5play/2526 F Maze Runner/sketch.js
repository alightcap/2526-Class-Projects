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

let playerIdle = loadAni(
	'assets/idle.png',
	{ frameSize: [24, 24], frames: 3 }
);
playerIdle.frameDelay = 6;

let playerWalk = loadAni(
	'assets/move.png',
	{ frameSize: [24, 24], frames: 6 }
);
playerWalk.frameDelay = 6;

let coinSpin = loadAni(
	'assets/red_coin.png',
	{ frameSize: [16, 16], frames: 5 }
);
coinSpin.frameDelay = 12;


let player = createPlayer();
let coin = createCoin();
createMaze(maze);
let gameOverText = createGameOverText();
let coinCount = 1;

player.overlaps(coin, coin.collect);


function update() {
	background('skyblue');

	if (coinCount == 0) { // if game over...
		gameOverText.visible = true;
	}
}

function createCoin() {
	let coin = new Sprite();
	// coin.debug = true;
	coin.w = 12;
	coin.h = 12;
	coin.addAni(coinSpin);
	coin.rotationLock = true;
	coin.scale = 1.5;
	coin.x = width - 2 * 48 - 24;
	coin.y = 48 + 24;

	coin.collect = () => {
		coinCount--;
		coin.delete();
	}

	return coin;
}

function createGameOverText() {
	let s = new Sprite();
	s.physics = 'NONE';
	s.text = 'You Win!';
	s.textSize = 180;
	s.width = 0;
	s.height = 0;
	s.visible = false;

	return s;
}

function createPlayer() {
	let s = new Sprite();
	// s.debug = true;
	s.width = 8;
	s.height = 8;
	s.rotationLock = true;

	s.addAni('idle', playerIdle);
	s.addAni('walk', playerWalk);

	s.scaleValue = 2;
	s.walkSpeed = 5;  // this is a custom property

	s.scale = s.scaleValue;

	s.x = 48 + 24;
	s.y = halfHeight + 48 + 24;

	s.update = () => {
		let inputVector = s.getInput();

		s.visuals();

		s.vel.x = inputVector.x * s.walkSpeed;
		s.vel.y = inputVector.y * s.walkSpeed;
	}

	s.visuals = () => {
		if (s.vel.x < 0) {
			s.scale.x = -s.scaleValue;
		}

		if (s.vel.x > 0) {
			s.scale.x = s.scaleValue;
		}

		if (s.isMoving) {
			s.changeAni('walk');
		} else {
			s.changeAni('idle');
		}
	}

	s.getInput = () => {
		let inputVector = createVector(0, 0);

		if (kb.pressing('left')) { // both a and the left arrow work.
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

	return s;
}

function createMaze(maze) {
	for (let i = 0; i < maze.length; i++) {
		for (let j = 0; j < maze[0].length; j++) {
			if (maze[i][j] == 1) {
				let x = j * 48 + 24;
				let y = i * 48 + 24;

				let wall = new Sprite(x, y);
				wall.color = 'green';
				wall.physics = 'STATIC';
			}
		}
	}
}