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
	s.scale = 2;

	s.walkSpeed = 5;  // this is a custom property

	s.update = () => {
		if (kb.pressing('left')) {
			s.vel.x = -1 * s.walkSpeed;
		}
	}

	return s;
}