

var getDirection = function (keyCode, direction) {
  switch (keyCode) {
    case 37:
      if (direction != 'right') {
        return 'left';
      } else {
        return direction
      }

    case 39:
      if (direction != 'left') {
        return 'right';
      } else {
        return direction
      }

    case 38:
      if (direction != 'down') {
        return 'up'
      } else {
        return direction
      }

    case 40:
      if (direction != 'up') {
        return 'down'
      } else {
        return direction
      }
  }
}
