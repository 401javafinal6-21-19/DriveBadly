'use strict';
drawModule.init();

function setupSnake() {
    snake = [
      {x: 1, y: 2},
      {x: 2, y: 2},
      {x: 3, y: 2}

    ];
    snake.length = 3;
    direction = "up";
}

function testCollision() {
  setupSnake()
  var x = 1;
  var y = 1;
  var z = 2;
  var a = 2;
  //unhappy

  if (drawModule.checkCollision(x, y, snake)) {
    throw new Error("Collision detected at {1,1}, wrong!");
  } else {
    console.log("Collision did not happen at {1,1}, correct!");

  }
  //happy
  if (drawModule.checkCollision(z, a, snake)) {
    console.log("Collision detected at {2,2}, correct!");
  } else {
    throw new Error("Collision did not happen at {2,2}, wrong!");
  }
}

function testSnakeMove() {
  let expectedOutput = [  {x: 1, y: 3},
                          {x: 1, y: 2},
                          {x: 2, y: 2}];
  drawModule.paint();
  console.log(snake);
  if(compareSnakeCoordinates(expectedOutput, snake)){
    console.log("Snake moved properly!");
  } else {
    console.log("Snake did not move properly");
  }
}

<<<<<<< HEAD
function compareSnakeCoordinates(a, b){
  if(a.length !== b.length){
    return false;
  }
  for(let i = 0; i < a.length; i++){
    if(!(a.x === b.x && a.y === b.y)){
      return false;
    }
  }

  return true;
}

testSnakeMove();
testCollision();
=======
testCollision();

>>>>>>> 667d6112210697f1a04737139e7ab4c18d687ffd
