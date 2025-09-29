new Q5();

new Canvas(800, 600);
world.gravity.y = 10;

let player;  // define a variable to hold the player sprite
let playerIdle;  // define a variable to hold the idle animation
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
    player = createPlayer();  // call the function that creates the player sprite, and store the sprite here.
    ground = createGround();
    basketball = createBasketball();
    createWalls();

    player.overlaps(basketball, player.getBall);
    player.overlapped(basketball, player.canShoot);
}


function update() {
    background('skyblue');
}


function createBasketball() {
    let b = new Sprite();
    // b.debug = true;
    b.img = basketballImg;
    b.radius = 5;
    b.scale = 2;
    b.bounciness = 0.5;
    b.mass = 1;

    return b;
}


function createGround() {
    let g = new Sprite();

    g.width = width;
    g.height = 40;
    g.x = halfWidth;
    g.y = height;
    g.color = 'green';
    g.physics = 'STATIC';
    g.bounciness = 0;

    return g;
}


function createPlayer() {  // set up and return the player sprite
    let p = new Sprite();
    // p.debug = true;
    p.width = 5;
    p.height = 8;
    p.mass = 10;

    p.size = 5;
    p.scale = p.size;
    p.bounciness = 0;
    p.rotationLock = true;

    p.jumpForce = 5000;
    p.shootForce = 500;
    p.bearing = -90;
    p.isShooting = false;

    p.moveSpeed = 5;

    p.addAni('idle', playerIdle);
    p.addAni('run', playerRun);

    p.update = () => {
        let inputX = 0;

        if (kb.pressing('left')) {
            inputX = -1;
        }
        if (kb.pressing('right')) {
            inputX = 1;
        }
        if (kb.presses('up')) {
            if (p.colliding(ground)) {
                p.applyForce(p.jumpForce);
            }
        }
        if (kb.presses('space')) {  // factor this out into a function
            // print(p.joints[0]['spriteB']);
            if (p.joints[0]) {  // is there a joint here?
                p.isShooting = true;
                let ball = p.joints[0]['spriteB'];
                let bearing = -60;
                let torque = -1;
                if (p.scale.x < 0) {
                    bearing = -120;
                    torque = 1;
                }

                p.joints[0].delete();
                ball.bearing = bearing;
                ball.applyForce(p.shootForce);
                ball.applyTorque(torque);
            }
        }

        p.vel.x = inputX * p.moveSpeed;

        if (p.vel.x < 0) {
            p.scale.x = -p.size;
        }
        if (p.vel.x > 0) {
            p.scale.x = p.size;
        }

        if (p.isMoving) {
            p.changeAni('run');
        } else {
            p.changeAni('idle');
        }
    }

    p.canShoot = () => {
        p.isShooting = false;
    }

    p.getBall = (player, basketball) => {
        if (!p.isShooting) {
            basketball.x = p.x;
            basketball.y = p.y;
            new GlueJoint(p, basketball);
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