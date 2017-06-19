var Node = require('./04_Node.js');
var Queue = require('../02_Queue/02_CircularQueue.js');

class BianarySearchTree {
    constructor(params) {
        this.root = null;
        this.size = 0;
    }

    searchNode(data) {

    }

    insertNode(data) {
        if (this.size === 0) {
            this.root = new Node(data);
            this.size++;
            return this;
        }
        let parent = this.root;
        while (true) {
            if (parent.data === data) {
                console.log('Do not enter the same value');
                break;
            }
            if (parent.data < data) {
                if (parent.rightChild === null) {
                    parent.rightChild = new Node(data);
                    this.size++;
                    break;
                } else {
                    parent = parent.rightChild;
                }
            } else {
                if (parent.leftChild === null) {
                    parent.leftChild = new Node(data);
                    this.size++;
                    break;
                } else {
                    parent = parent.leftChild;
                }
            }
        }
    }

    removeNode(data) {
        if (this.size === 0) {
            this.root = null;
            console.log('No data');
            return this;
        }

        let parent = this.root;
        let tempNode = null;
        let current;
        while (true) {
            if (parent.data < data) {
                tempNode = parent;
                current = parent.rightChild;
                if (current !== null) {
                    parent = current;
                } else {
                    break;
                }
            } else if (parent.data > data) {
                tempNode = parent;
                current = parent.leftChild;
                if (current !== null) {
                    parent = current;
                } else {
                    break;
                }
            } else {
                // console.log(1, current);
                if (parent.leftChild === null && parent.rightChild === null) {
                    // console.log(parent);
                    tempNode = parent;
                    this.root.rightChild = null;
                    console.log(3, parent);
                    break;
                } 

                if (parent.leftChild === null) {
                    tempNode.rightChild = parent.rightChild;
                    console.log(this.root);
                    break;
                } else if (parent.rightChild === null) {
                    tempNode = parent;
                    parent = parent.leftChild;
                    console.log(2, parent);
                    break;
                } else {
                    break;
                }
            }
        }

        if (tempNode === null) {
            console.log('No data');
            return this;
        }
        return tempNode;
    }

    getRoot() {
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

module.exports = BianarySearchTree;