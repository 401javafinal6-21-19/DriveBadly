(function (window, document, drawModule) {
  var btn = document.getElementById('btn');
  btn.addEventListener('click', function () {
    drawModule.init();
    drawModule.start();
  })

  document.onkeydown = function (event) {
    keyCode = window.event.keyCode;
    keyCode = event.keyCode;
    direction = getDirection(keyCode, direction);
  }
})(window, document, drawModule);
