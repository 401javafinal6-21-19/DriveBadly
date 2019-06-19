'use strict';
var testSnake = [
  {x: 1, y: 2}, 
  {x: 2, y: 2}
];
testSnake.length = 2;

function testCollision() {
  var x = 1;
  var y = 1;
  var z = 2;
  var a = 2;
  //unhappy
  if (drawModule.checkCollision(x, y, testSnake)) {
    throw new Error("Collision detected at {1,1}, wrong!");
  } else {
    console.log("Collision did not happen at {1,1}, correct!");
  }
  //happy
  if (drawModule.checkCollision(z, a, testSnake)) {
    console.log("Collision detected at {2,2}, correct!");
  } else {
    throw new Error("Collision did not happen at {2,2}, wrong!");
  }
}

function test

testCollision();