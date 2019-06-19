'use strict';
// button press tests
function testLeftButtonPress () {
    if (getDirection (37) != 'left', direction ){
        throw new Error("left failed");
    }
}

function testRightButtonPress () {
    if (getDirection (39) != 'right', direction ){
        throw new Error("right failed");
    }
}

function testUpButtonPress () {
    if (getDirection (38) != 'up', direction ){
        throw new Error("up failed");
    }
}

function testDownButtonPress () {
    if (getDirection (40) != 'down', direction ){
        throw new Error("down failed");
    }
}

testRightButtonPress();
testUpButtonPress();
testDownButtonPress();
testLeftButtonPress();
