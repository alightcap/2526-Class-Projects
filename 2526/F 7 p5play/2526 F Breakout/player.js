let player;

player = new Sprite();
player.w = 100;
player.h = 20;
player.color = 'orange';
player.rotationLock = true;
player.physics = 'KINEMATIC';

player.update = () => {
    player.moveTowards(mouse.x, player.prevPos.y, 0.1);
}