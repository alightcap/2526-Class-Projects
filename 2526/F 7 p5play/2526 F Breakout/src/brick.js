let bricks = new Group();
// properties set on the group will apply to all instances
// creating a group does not automatically create a sprite.

bricks.color = 'coral';
bricks.physics = 'STATIC';
bricks.width = 40;
bricks.height = 20;
bricks.pointValue = 100;
bricks.tile = '-';

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
    90, 100,  // where the pattern of tiles starts on the canvas
    bricks.width + 4, bricks.height + 4,  // offset between tiles
);

// when a member of the group bricks is hit
// this function will do something
// to the brick that got hit
bricks.onHit = (brick) => {
    brick.delete();
}