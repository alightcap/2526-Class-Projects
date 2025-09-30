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
  createWalls();  // no assignment because I won't need references to these

  // player.collides(ground, player.grounded);
  // player.collided(ground, player.notGrounded);
  player.overlaps(basketball, player.getBall);
  player.overlapped(basketball, player.canShoot);
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
  b.mass = 1;

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
  p.mass = 10;

  p.addAni('idle', playerIdle);
  p.addAni('run', playerRun);

  p.moveSpeed = 5;
  p.inputX = 0;
  p.jumpForce = 5000;
  p.shotForce = 500;
  p.bearing = -90;
  p.isGrounded = true;
  p.isShooting = false;

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
    if (kb.presses('space')) {
      if (p.joints[0]) {
        p.isShooting = true;
        let ball = p.joints[0]['spriteB'];
        p.joints[0].delete();

        let bearing = -60;  // assuming the dino is facing to the right
        let torque = -1;
        if (p.scale.x < 0) {  // is the dino facing left?
          bearing = -120;
          torque = 1;
        }

        ball.bearing = bearing;
        ball.applyForce(p.shotForce);
        ball.applyTorque(torque);
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

  p.canShoot = () => {
    p.isShooting = false;
  }

  p.getBall = (player, ball) => {  // data the function needs to use goes in the parenthesis
    if (!p.isShooting) {
      ball.x = p.x;
      ball.y = p.y;
      new GlueJoint(p, ball);
    }
  }

  return p;
}

function createWalls() {
  let left = new Sprite();
  left.x = 0;
  left.y = halfHeight;
  left.width = 20;
  left.height = height;
  left.physics = 'STATIC';
  left.friction = 0;
  left.visible = false;

  let right = new Sprite();
  right.x = width;
  right.y = halfHeight;
  right.width = 20;
  right.height = height;
  right.physics = 'STATIC';
  right.friction = 0;
  right.visible = false;
}