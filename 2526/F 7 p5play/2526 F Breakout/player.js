let player = new Sprite();

player.width = 100;
player.height = 20;
player.color = 'orange';
player.rotationLock = true;
player.physics = 'KINEMATIC';

player.update = () => {
    player.moveTowards(mouse.x, player.prevPos.y, 0.1);
}