// var Node = require('./04_Node.js');
// var Queue = require('../02_Queue/02_CircularQueue.js');

// class BianarySearchTree {
//     constructor(params) {
//         this.root = null;
//         this.size = 0;
//     }

//     searchNode(data) {

//     }

//     insertNode(data) {
//         if (this.size === 0) {
//             this.root = new Node(data);
//             this.size++;
//             return this;
//         }
//         let parent = this.root;
//         while (true) {
//             if (parent.data === data) {
//                 console.log('Do not enter the same value');
//                 break;
//             }
//             if (parent.data < data) {
//                 if (parent.rightChild === null) {
//                     parent.rightChild = new Node(data);
//                     this.size++;
//                     break;
//                 } else {
//                     parent = parent.rightChild;
//                 }
//             } else {
//                 if (parent.leftChild === null) {
//                     parent.leftChild = new Node(data);
//                     this.size++;
//                     break;
//                 } else {
//                     parent = parent.leftChild;
//                 }
//             }
//         }
//     }

//     removeNode(data) {
//         if (this.size === 0) {
//             this.root = null;
//             console.log('No data');
//             return this;
//         }

//         let parent = this.root;
//         let tempNode = null;
//         let current;
//         while (true) {
//             if (parent.data < data) {
//                 tempNode = parent;
//                 current = parent.rightChild;
//                 if (current !== null) {
//                     parent = current;
//                 } else {
//                     break;
//                 }
//             } else if (parent.data > data) {
//                 tempNode = parent;
//                 current = parent.leftChild;
//                 if (current !== null) {
//                     parent = current;
//                 } else {
//                     break;
//                 }
//             } else {
//                 // console.log(1, current);
//                 if (parent.leftChild === null && parent.rightChild === null) {
//                     // console.log(parent);
//                     tempNode = parent;
//                     this.root.rightChild = null;
//                     console.log(3, parent);
//                     break;
//                 } 

//                 if (parent.leftChild === null) {
//                     tempNode.rightChild = parent.rightChild;
//                     console.log(this.root);
//                     break;
//                 } else if (parent.rightChild === null) {
//                     tempNode = parent;
//                     parent = parent.leftChild;
//                     console.log(2, parent);
//                     break;
//                 } else {
//                     break;
//                 }
//             }
//         }

//         if (tempNode === null) {
//             console.log('No data');
//             return this;
//         }
//         return tempNode;
//     }

//     getRoot() {
//         return this.root;
//     }

//     getCount(node) {
//         let count = 0;
//         if(node != null) {
//             count = 1 + this.getCount(node.leftChild) + this.getCount(node.rightChild);
//         }
//         return count;
//     }

//     getHeight(node) {
//         let height = 0;
//         if(node != null) {
//             height = 1 + Math.max(this.getHeight(node.leftChild), this.getHeight(node.rightChild));
//         }
//         return height;
//     }

//     preOrder(node, who) {
//         if(node) {
//             console.log(node.data);
//             this.preOrder(node.leftChild, '1');
//             this.preOrder(node.rightChild, '2');
//         }
//     }

//     inOrder(node) {
//         if(node) {
//             this.inOrder(node.leftChild);
//             console.log(node.data);
//             this.inOrder(node.rightChild);
//         }
//     }

//     postOrder(node) {
//         if(node) {
//             this.postOrder(node.leftChild);
//             this.postOrder(node.rightChild);
//             console.log(node.data);
//         }
//     }

//     levelOrder(node) {
//         let queue = new Queue(30);
//         queue.enqueue(node);
// 		while(!queue.isEmpty()) {
// 			let node = queue.dequeue();
// 			if (node != null) {
//                 console.log(node.data);
// 				queue.enqueue(node.leftChild);
// 				queue.enqueue(node.rightChild);
// 			}
// 		}
//     }

//     clone() {
//         let temp = new BinaryTree();
//         temp.addRoot(this.root);
//         this.copy(this.root);
//         return temp;
//     }

//     copy(node) {
//         // insert code
//         let temp;
//         if ( node != null ) {
//             temp = new Node();
//             temp.leftChild = this.copy(node.leftChild);
//             temp.rightChild = this.copy(node.rightChild);
//             temp.data = node.data;
//             return temp;
//         }
//         return null;
//     }
// }

export default class BinarySearchTree {

    constructor(_data) {
        this.root = new Node(_data);
    }
    
    // 탐색
    search(data, node = this.root) {
        if (data === node.data) {
            return node;
        } else {
            return this.search(data, data > node.data ? node.rightChild : node.leftChild);
        }
    }
    
    // 노드 추가
    add(data, node = this.root) {
        if (data > node.data) {
            if (!node.rightChild) {
                node.rightChild = new Node(data);
            } else {
                this.add(data, node.rightChild);
            }
        } else if (data < node.data) {
            if (!node.leftChild) {
                node.leftChild = new Node(data);
            } else {
                this.add(data, node.leftChild);
            }
        }
    }
    
    // 노드 삭제
    remove(data) {
        /*
         successor 노드는 대상 노드의 왼쪽 서브 트리의 가장 큰 노드
         또는 오른쪽 서브트리의 가장 작은 노드이다.
         여기서는 오른쪽 서브트리의 가장 작은 노드를 선택하도록 하였다.
          */
        const getSuccessorNode = (targetNode) => {
            let successor = targetNode.rightChild;
            let successorParent = null;
            if (successor) {
                while (successor.leftChild) {
                    successorParent = successor;
                    successor = successor.leftChild;
                }
            }

            successorParent.leftChild = successor.rightChild ? successor.rightChild : null;

            return successor;
        };

        let parent = null;
        let current = this.root;
        
        while (data !== current.data) {
            parent = current;
            if (data < current.data) {
                current = current.leftChild;
            } else if (current.data < data) {
                current = current.rightChild;
            }
        }
        
        if (!current.leftChild && !current.rightChild) { // 자식이 없을 경우
            parent.leftChild.data === current.data ? parent.leftChild = null : parent.rightChild = null;
        } else if (current.leftChild && !current.rightChild) { // 왼쪽 자식만 있을 경우
            current = current.leftChild;
            parent.leftChild.data === current.data ? parent.leftChild = current : parent.rightChild = current;
        } else if (!current.leftChild && current.rightChild) { // 오른쪽 자식만 있을 경우
            current = current.rightChild;
            parent.leftChild.data === current.data ? parent.leftChild = current : parent.rightChild = current;
        } else if (current.leftChild && current.rightChild) { // 양쪽 자식 모두 있을 경우
            const successorNode = getSuccessorNode(current);
            const currentLeftChildTemp = current.leftChild;
            const currentRightChildTemp = current.rightChild;
            current = successorNode;
            current.leftChild = currentLeftChildTemp;
            current.rightChild = currentRightChildTemp;
            if (!parent) {
                this.root = current;
            } else {
                console.log(parent)
            }
        }
    };

    // 전위 순회(TLR)
    preOrder(node = this.root) {
        if (node) {
            console.log(node.data);
            this.preOrder(node.leftChild);
            this.preOrder(node.rightChild);
        }
    }

    // 중위 순회(LTR)
    inOrder(node = this.root) {
        if (node) {
            this.inOrder(node.leftChild);
            console.log(node.data);
            this.inOrder(node.rightChild);
        }
    }

    // 후위 순회(LRT)
    postOrder(node = this.root) {
        if (node) {
            this.postOrder(node.leftChild);
            this.postOrder(node.rightChild);
            console.log(node.data);
        }
    }
}

module.exports = BianarySearchTree;