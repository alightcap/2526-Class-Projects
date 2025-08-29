new Q5();

new Canvas(768, 576);

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

function update() {
	background('skyblue');
}

function createPlayer() {
	let s = new Sprite();
	s.scale = 2;

	s.walkSpeed = 5;  // this is a custom property

	s.addAni('idle', playerIdleAnim);
	s.addAni('walk', playerWalkAnim);

	s.update = () => {
		let inputVector = createVector(0, 0);

		if (kb.pressing('left')) {
			inputVector.x = -1;
		}

		s.vel.x = inputVector.x * s.walkSpeed;
	}

	return s;
}