new Q5();

new Canvas(768, 576);

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

let player = createPlayer();

function update() {
	background('skyblue');
}

function createPlayer() {
	let s = new Sprite();
	s.addAni('idle', playerIdle);
	s.addAni('walk', playerWalk);

	s.scaleValue = 2;
	s.walkSpeed = 5;  // this is a custom property

	s.scale = s.scaleValue;

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