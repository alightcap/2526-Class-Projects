let leftWall = new Sprite();
leftWall.x = 0;
leftWall.y = height / 2;
leftWall.width = 10;
leftWall.height = height;
leftWall.physics = 'STATIC';
leftWall.color = 'black';

let rightWall = new Sprite();
rightWall.x = width;
rightWall.y = height / 2;
rightWall.width = 10;
rightWall.height = height;
rightWall.physics = 'STATIC';
rightWall.color = 'black';

let ceiling = new Sprite();
ceiling.x = width / 2;
ceiling.y = 0;
ceiling.width = width;
ceiling.height = 10;
ceiling.physics = 'STATIC';
ceiling.color = 'black';

let floor = new Sprite();
floor.x = width / 2;
floor.y = height;
floor.width = width;
floor.height = 10;
floor.physics = 'STATIC';
floor.color = 'black';