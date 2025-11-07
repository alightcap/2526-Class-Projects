let bricks = new Group();

bricks.color = 'coral';
bricks.physics = 'STATIC';
bricks.width = 40;
bricks.height = 20;
bricks.tile = '-';
bricks.pointValue = 100;

let explodingBricks = new bricks.Group();  // subgroup
explodingBricks.color = 'red';
explodingBricks.canExplode = true;
explodingBricks.explosionRadius = 60;
explodingBricks.tile = 'x';

let tiles = new Tiles(
    [
        '--x---------x--',
        '-----.....-----',
        '---.........---',
        '-.............-',
        '---.........---',
        '-----.....-----',
        '--x---------x--',
    ],
    90, 100,
    bricks.width + 4, bricks.height + 4
);

bricks.onHit = async (brick) => {
    brick.delete();
    if (brick.canExplode) {
        explodingBricks.onHit(brick);
    }
}

explodingBricks.onHit = async (brick) => {
    let explosion = new Sprite();
    explosion.radius = brick.explosionRadius;
    explosion.color = 'red';
    explosion.x = brick.x;
    explosion.y = brick.y;
    explosion.physics = 'NONE';

    bricks.overlaps(explosion, bricks.onHit);

    await delay(50);
    explosion.delete();
}