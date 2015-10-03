icon-arrow-up
var yo = "AutoDub - Načten!";
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
var num = getRandomArbitrary(3000,6000);
API.sendChat(yo);
$("#icon-arrow-up").click();
API.on(API.ADVANCE, autowoot);
setInterval(function() { API.sendChat(yo); }, 1800000);
function autowoot(){ setTimeout(function() {$("#icon-arrow-up").click();}, num);  }
