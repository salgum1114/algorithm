'use strict';

class CircularQueue {
    constructor(params) {
        this.maxSize = params+1;
        this.rear = 0;
        this.front = 0;
        this.array = new Array(this.maxSize);
    }

    enqueue(obj) {
        if(this.isFull()) {
            console.log("Queue is Full!!");
            return this;
        }

        this.rear++;
        this.array[(this.rear) % this.maxSize] = obj;
        return this;
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log("Queue is Empty!!");
            return this;
        }
        this.front++;
        let delObj = this.array[(this.front) % this.maxSize];
        delete this.array[(this.front) % this.maxSize];
        return delObj;
    }

    isFull() {
        if(this.front % this.maxSize == (this.rear+1) % this.maxSize) {
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

    clear() {
        for(var index in this.array) {
            delete this.array[index];
        }
        this.front = 0;
        this.rear = 0;
    }

    print() {
        console.log(this.array);
    }

}

module.exports = CircularQueue;
