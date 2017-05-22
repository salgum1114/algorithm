// var LinearQueue = require('./02_LinearQueue.js');

// var LQueue = new LinearQueue(3);
// LQueue.enqueue(3);
// LQueue.enqueue(4);
// LQueue.enqueue(5);
// LQueue.enqueue(5);
// LQueue.dequeue();
// LQueue.dequeue();
// LQueue.dequeue();
// LQueue.dequeue();
// LQueue.peek();
// LQueue.enqueue(3);

var CircularQueue = require('./02_CircularQueue.js');

var CQueue = new CircularQueue(5);
CQueue.enqueue(3);
CQueue.enqueue(4);
CQueue.enqueue(5);
CQueue.enqueue(5);
CQueue.enqueue(5);
CQueue.dequeue();
CQueue.clear();
CQueue.enqueue(3);
CQueue.enqueue(3);
CQueue.enqueue(3);
CQueue.enqueue(3);
CQueue.enqueue(3);
// CQueue.enqueue(3);