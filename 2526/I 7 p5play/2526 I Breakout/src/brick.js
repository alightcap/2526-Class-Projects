let bricks = new Group();

bricks.color = 'coral';
bricks.physics = 'STATIC';
bricks.width = 40;
bricks.height = 20;
bricks.tile = '-';
bricks.pointValue = 100;

let tiles = new Tiles(
    [
        '---------------',
        '-----.....-----',
        '---.........---',
        '-.............-',
        '---.........---',
        '-----.....-----',
        '---------------',
    ],
    90, 100,
    bricks.width + 4, bricks.height + 4
);

bricks.onHit = (brick) => {
    brick.delete();
}
// let brick = new bricks.Sprite();
