'use strict';
// var Fibonacci = require('./03_Fibonacci.js');

// var fibonacci = new Fibonacci();
// console.log(fibonacci.execute(5));
// console.log(fibonacci.memoization(80));
// console.log(fibonacci.loopExecute(80));

var Hanoi = require('./03_Hanoi.js');

var hanoi = new Hanoi();
// 1. 기둥 1에서 N-1개의 원반을 기둥 2로 옮긴다.
// 2. 기둥 1에서 1개의 원반을 기둥 3으로 옮긴다.
// 3. 기둥 2에서 N-1개의 원반을 기둥 3으로 옮긴다.
hanoi.execute(3, 1, 2, 3);
console.log();
hanoi.stackExceute(3, 1, 2, 3);