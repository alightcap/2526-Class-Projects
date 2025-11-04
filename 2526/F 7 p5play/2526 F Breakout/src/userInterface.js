let scoreText = new Sprite();

scoreText.physics = 'NONE';
scoreText.text = 'Score: ';
scoreText.textColor = 'white';
scoreText.textSize = 30;
scoreText.width = 0;
scoreText.height = 0;

scoreText.update = () => {
    scoreText.text = 'Score: ' + score;
}

let gameOverText = new Sprite();

gameOverText.physics = 'NONE';
gameOverText.textColor = 'white';
gameOverText.textSize = 30;
gameOverText.width = 0;
gameOverText.height = 0;
gameOverText.visible = false;

gameOverText.onLose = () => {
    gameOverText.text = 'You Lose!';
    gameOverText.visible = true;
}

gameOverText.onWin = () => {
    gameOverText.text = 'You Win!';
    gameOverText.visible = true;
}