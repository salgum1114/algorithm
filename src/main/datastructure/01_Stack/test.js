'use strict';

var Stack = require('./01_Stack.js');

var stack = new Stack(3);
stack.push(5);
stack.push(2);
stack.peek(); // ?
stack.pop(); // ?
stack.pop(); // ?
stack.pop(); // ?
stack.push(1);
stack.push(3); 
stack.push(5); 
stack.print();
stack.push(6); // ?
stack.peek(); // ?
stack.clear();
stack.peek(); // ?