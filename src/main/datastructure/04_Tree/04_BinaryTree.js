'use strict';
var Node = require('./04_Node.js');
var Queue = require('../02_Queue/02_CircularQueue.js');

class BinaryTree {
    constructor(params) {
        this.root = null;
    }

    addRoot(rootNode) {
        this.root = rootNode;
    }

    addRightSubTree(rootNode, targetNode) {
        rootNode.rightChild = targetNode;
    }

    addLeftSubTree(rootNode, targetNode) {
        rootNode.leftChild = targetNode;
    }

    addSubTree(targetLeftNode, rootNode, targetRightNode) {
        rootNode.leftChild = targetLeftNode;
        rootNode.rightChild = targetRightNode;
    }

    get root() {
        return this.root;
    }

    getCount(node) {
        let count = 0;
        if(node != null) {
            count = 1 + this.getCount(node.leftChild) + this.getCount(node.rightChild);
        }
        return count;
    }

    getHeight(node) {
        let height = 0;
        if(node != null) {
            height = 1 + Math.max(this.getHeight(node.leftChild), this.getHeight(node.rightChild));
        }
        return height;
    }

    preOrder(node, who) {
        if(node) {
            console.log(node.data);
            this.preOrder(node.leftChild, '1');
            this.preOrder(node.rightChild, '2');
        }
    }

    inOrder(node) {
        if(node) {
            this.inOrder(node.leftChild);
            console.log(node.data);
            this.inOrder(node.rightChild);
        }
    }

    postOrder(node) {
        if(node) {
            this.postOrder(node.leftChild);
            this.postOrder(node.rightChild);
            console.log(node.data);
        }
    }

    levelOrder(node) {
        let queue = new Queue(30);
        queue.enqueue(node);
		while(!queue.isEmpty()) {
			let node = queue.dequeue();
			if (node != null) {
                console.log(node.data);
				queue.enqueue(node.leftChild);
				queue.enqueue(node.rightChild);
			}
		}
    }

    clone() {
        let temp = new BinaryTree();
        temp.addRoot(this.root);
        this.copy(this.root);
        return temp;
    }

    copy(node) {
        // insert code
        let temp;
        if ( node != null ) {
            temp = new Node();
            temp.leftChild = this.copy(node.leftChild);
            temp.rightChild = this.copy(node.rightChild);
            temp.data = node.data;
            return temp;
        }
        return null;
    }

}

module.exports = BinaryTree;