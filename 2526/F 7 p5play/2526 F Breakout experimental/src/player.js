let player = new Sprite();

player.width = 100;
player.height = 20;
player.color = 'orange';
player.rotationLock = true;
player.physics = 'KINEMATIC';

player.moveSpeed = 5;

player.update = () => {
    let dist = mouse.x - player.x
    let direction = dist / abs(dist)
    if (abs(dist) < 5) {
        direction = 0;
    }
    player.vel.x = direction * player.moveSpeed;
    // player.moveTowards(mouse.x, player.prevPos.y, 0.1);
}