'use strict';
function testLeftButtonPress () {
    if (getDirection (37) != 'left' ){
        throw new Error("left failed");
    }
}

function testRightButtonPress () {
    if (getDirection (39) != 'right' ){
        throw new Error("right failed");
    }
}

function testUpButtonPress () {
    if (getDirection (38) != 'up' ){
        throw new Error("up failed");
    }
}

function testDownButtonPress () {
    if (getDirection (40) != 'down' ){
        throw new Error("down failed");
    }
}

testRightButtonPress();
testUpButtonPress();
testDownButtonPress();
testLeftButtonPress();
