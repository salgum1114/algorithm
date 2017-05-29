'use strict';

class Node {
    constructor(_prev, _data, _next) {
        this.prev = _prev;
        this.data = _data;
        this.next = _next;
    }
}

module.exports = Node;