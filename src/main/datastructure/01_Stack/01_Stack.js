'use strict';

class Stack {

    constructor(params) {
        this.maxSize = params;
        if(isNaN(params)) {
            this.array = [];
        } else {
            this.array = new Array(params);
        }

        this.top = -1;
    }

    push(obj) {
        // insert code
        this.top++;
        if(this.isFull()) {
            this.top--;
            console.log('Stack Overflow!!');
            return this;
        }
        this.array[this.top] = obj;
    }
    
    pop() {
        // insert code
        if(this.isEmpty()) {
            console.log('Stack Underflow!!');
            return this;
        }
        let delObj;
        if(!this.maxSize) {
            delObj = this.array.splice(this.top, 1);
        } else {
            delObj = delete this.array[this.top];
        }
        this.top--;
        return delObj;
    }
    
    peek() {
        // insert code
        if(this.isEmpty()) {
            console.log('Stack Empty!!');
            return;
        }
        console.log(this.array[this.top]);
        return this.array[this.top];
    }
    
    isEmpty() {
        // insert code (Stack Underflow!)
        if(this.top === -1) {
            return true;
        }
        return false;
    }
    
    isFull() { 
        // insert code (Stack Overflow!)
        if(this.top === this.maxSize) {
            return true;
        }
        return false;
    }
    
    clear() {
        // insert code
        if(this.isEmpty()) {
            console.log('Stack Empty!!');
            return;
        }
        this.top = -1;
        if(!this.maxSize) {
            this.array.splice(0, this.array.length);
        } else {
            delete this.array;
        }
    }
    
    print() {
        // insert code
        console.log(this.array);
        return this;
    }
};

module.exports = Stack;