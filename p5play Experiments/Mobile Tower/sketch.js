let playerTowerImg;
let enemyTowerImg;
let neutralTowerImg;

let playerTower;
let enemyTower;
let neutralTower;

function preload() {
	playerTowerImg = loadImage('assets/Previews/tower-round-build-a.png');
	enemyTowerImg = loadImage('assets/Previews/tower-square-build-a.png');
	neutralTowerImg = loadImage('assets/Previews/tower-round-crystals.png');
}

function setup() {
	new Canvas(800, 600);
	displayMode('centered');

	playerTower = createPlayerTower();
	enemyTower = createEnemyTower();
	neutralTower = createNeutralTower();
}

function draw() {
	background('skyblue');

}

function createTower() {
	let t = new Sprite();
	t.scale = 2;

	return t;
}

function createPlayerTower() {
	let t = createTower();
	t.img = playerTowerImg;
	t.x = 200;
	t.y = height / 2 + 50;

	t.maxSoldiers = 20;
	t.soldierSpawnCooldown = 1000;
	t.soldierSpawnTimer = 0;
	t.numSoldiers = 0;
	t.target = null;
	t.textColor = 'white';
	t.textStroke = 'black';
	t.textSize = 15;
	t.text = t.numSoldiers;
	t.selected = false;

	t.update = () => {
		t.soldierSpawnTimer += deltaTime;
		if (t.soldierSpawnTimer > t.soldierSpawnCooldown) {
			if (t.numSoldiers < t.maxSoldiers) {
				t.soldierSpawnTimer = 0;
				t.numSoldiers += 1;
			}
		}
		t.text = t.numSoldiers;

		if (t.mouse.pressed()) {
			t.selected = !t.selected;
		}

		t.debug = t.selected;
	}

	return t;
}

function createEnemyTower() {
	let t = createTower();
	t.img = enemyTowerImg;
	t.x = width - 200;
	t.y = height / 2 + 50;


	t.maxSoldiers = 20;
	t.soldierSpawnCooldown = 1000;
	t.soldierSpawnTimer = 0;
	t.numSoldiers = 0;
	t.target = null;
	t.textColor = 'white';
	t.textStroke = 'black';
	t.textSize = 15;
	t.text = t.numSoldiers;

	t.update = () => {
		print(t.soldierSpawnTimer);
		t.soldierSpawnTimer += deltaTime;
		if (t.soldierSpawnTimer > t.soldierSpawnCooldown) {
			if (t.numSoldiers < t.maxSoldiers) {
				t.soldierSpawnTimer = 0;
				t.numSoldiers += 1;
			}
		}
		t.text = t.numSoldiers;
	}

	return t;
}

function createNeutralTower() {
	let t = createTower();
	t.img = neutralTowerImg;
	t.x = width / 2;
	t.y = height / 2 - 50;
	t.playerSoldiers = 0;
	t.enemySoldiers = 0;

	t.update = () => {
		if (t.playerSoldiers > 10) {

		}
	}

	return t;
}
