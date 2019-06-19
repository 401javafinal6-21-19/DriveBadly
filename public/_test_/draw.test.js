'use strict';
var testSnake = [
  {x: 1, y: 2}, 
  {x: 2, y: 2}
];
testSnake.length = 7;

function testCollision() {
  var x = 1;
  var y = 1;
  var z = 2;
  var a = 2;
  //unhappy
  if (!drawModule.checkCollision(testSnake.x, testSnake.y, testSnake)) {
    throw new Error("Collision happened")
  }
  //happy
  if (checkCollision(z, a, testSnake)) {
    console.log("Collision avoided")
  }
}

testCollision();

