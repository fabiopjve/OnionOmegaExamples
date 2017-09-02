exec    = require('child_process').exec;
var temp = 0;
var state = 0;
console.log("Omega2 LED Blinker!");
function intervalFunc() {
  	if (state === 0) {
  		state = 1;
  		exec('fast-gpio set 44 1');
  	} else {
  		state = 0;
  		exec('fast-gpio set 44 0');
  	}
  	if (temp === 11) {
  		clearInterval(timer);
  		exec('fast-gpio set 44 0');
  	}
  	console.log('blink '+temp+' '+state);
  	temp++;
}

var timer = setInterval(intervalFunc, 500);