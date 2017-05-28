var BinaryTree = require('./04_BinaryTree.js');
var Node = require('./04_Node.js');

var BTree = new BinaryTree();

var root = new Node('root');
var node1 = new Node('node1');
var node2 = new Node('node2');
var node3 = new Node('node3');
var node4 = new Node('node4');
var node5 = new Node('node5');
var node6 = new Node('node6');
var node7 = new Node('node7');
var node8 = new Node('node8');
var node9 = new Node('node9');
var node10 = new Node('node10');

// Level 1
BTree.addRoot(root);

// Level 2
BTree.addLeftSubTree(root, node1);
BTree.addRightSubTree(root, node4);

// Level 3
BTree.addLeftSubTree(node1, node2);
BTree.addRightSubTree(node1, node3);

BTree.addLeftSubTree(node4, node5);
BTree.addRightSubTree(node4, node6);

// Level 4
BTree.addLeftSubTree(node5, node7);
BTree.addRightSubTree(node5, node8);
BTree.addLeftSubTree(node6, node9);
BTree.addRightSubTree(node6, node10);

// console.log(BTree.getCount(root));
// console.log(BTree.getHeight(root));
// console.log(BTree.preOrder(root));
// console.log(BTree.inOrder(root));
// console.log(BTree.postOrder(root));

var BTree2 = BTree.clone();
// console.log(BTree2.getCount(root));
// console.log(BTree2.getHeight(root));
// BTree2.preOrder(root);
// BTree2.inOrder(root);
// BTree2.postOrder(root);
BTree2.levelOrder(root);