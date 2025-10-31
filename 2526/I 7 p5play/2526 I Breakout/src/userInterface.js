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