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

    player.overlaps(basketball, player.getBall);
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

    p.size = 5;
    p.scale = p.size;
    p.bounciness = 0;
    p.rotationLock = true;

    p.jumpForce = 30;
    p.bearing = -90;

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

    p.getBall = (player, basketball) => {
        basketball.x = p.x;
        basketball.y = p.y;
        new GlueJoint(p, basketball);
    }

    return p;
}