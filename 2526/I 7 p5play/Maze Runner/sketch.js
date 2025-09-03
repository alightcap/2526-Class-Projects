new Q5();

new Canvas(768, 576);

let maze = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

let playerIdleAnim = loadAni(
	'assets/idle.png',
	{ frameSize: [24, 24], frames: 3 },
)
playerIdleAnim.frameDelay = 6;

let playerWalkAnim = loadAni(
	'assets/move.png',
	{ frameSize: [24, 24], frames: 6 },
)
playerWalkAnim.frameDelay = 6;

let player = createPlayer();
makeMaze(maze);

function update() {
	background('skyblue');
}

function createPlayer() {
	let s = new Sprite();
	s.scaleValue = 2;
	s.scale = s.scaleValue;

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

		}
	}
}