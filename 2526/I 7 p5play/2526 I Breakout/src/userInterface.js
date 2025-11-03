// userInterface.js
let scoreText = new Sprite();

scoreText.physics = 'NONE';
scoreText.text = "Score: ";
scoreText.textColor = 'white';
scoreText.textSize = 30;
scoreText.width = 0;
scoreText.height = 0;

scoreText.update = () => {
    scoreText.text = "Score: " + score;
}

let endGameText = new Sprite();
endGameText.physics = 'NONE';
endGameText.textSize = 30;
endGameText.textColor = 'white';
endGameText.width = 0;
endGameText.height = 0;
endGameText.visible = false;

endGameText.youLose = () => {
    endGameText.text = "You Lose!";
    endGameText.visible = true;
}

endGameText.youWin = () => {
    endGameText.text = "You Win!";
    endGameText.visible = true;
}
