'use strict';

class LinearQueue {

    constructor(params) {
        this.maxSize = params;
        this.array = new Array(this.maxSize);
        this.rear = -1;
        this.front = -1;
    }

    enqueue(obj) {
        if(this.isFull()) {
            console.log("Queue is Full!!");
            return this;
        }

        this.array[++this.rear] = obj;
        console.log(this.array);
        return this;
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log("Queue is Empty!!");
            return this;
        }

        delete this.array[++this.front];
        console.log(this.array);
        return this;
    }

    isFull() {
        if(this.rear === this.maxSize-1) {
            return true;
        }

        return false;
    }

    isEmpty() {
        if(this.front === this.rear) {
            return true;
        }

        return false;
    }

    peek() {
        if(this.isEmpty()) {
            console.log("Queue is Empty!!")
            return this;
        }
        return this.array[this.front];
    }

    print() {
        console.log(this.array);
    }
}

module.exports = LinearQueue;
