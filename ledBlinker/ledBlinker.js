exec    = require('child_process').exec;
var temp = 0;
var state = 0;
console.log("LED Blinker on GPIO18!");
function intervalFunc() {
  	if (state === 0) {
  		state = 1;
  		exec('fast-gpio set 18 1');
  	} else {
  		state = 0;
  		exec('fast-gpio set 18 0');
  	}
  	if (temp === 11) {
  		clearInterval(timer);
  		exec('fast-gpio set 18 0');
  	}
  	console.log('blink '+temp+' '+state);
  	temp++;
}

var child = exec('fast-gpio set-output 18');

var timer = setInterval(intervalFunc, 500);