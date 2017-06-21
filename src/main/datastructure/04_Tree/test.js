// var BinarySearchTree = require('./04_BinarySearchTree.js');
// var BinaryTree = require('./04_BinaryTree.js');
// var Heap = require('./04_Heap.js');
// var Node = require('./04_Node.js');

// var BST = new BinarySearchTree();
// BST.insertNode(5);
// BST.insertNode(8);
// BST.insertNode(10);
// BST.insertNode(12);
// BST.insertNode(4);
// BST.insertNode(3);
// BST.insertNode(6);
// BST.removeNode(5);
// console.log(BST.root);
// BST.levelOrder(BST.root);

// var BTree = new BinaryTree();

// var root = new Node('root');
// var node1 = new Node('node1');
// var node2 = new Node('node2');
// var node3 = new Node('node3');
// var node4 = new Node('node4');
// var node5 = new Node('node5');
// var node6 = new Node('node6');
// var node7 = new Node('node7');
// var node8 = new Node('node8');
// var node9 = new Node('node9');
// var node10 = new Node('node10');

// Level 1
// BTree.addRoot(root);

// Level 2
// BTree.addLeftSubTree(root, node1);
// BTree.addRightSubTree(root, node4);

// Level 3
// BTree.addLeftSubTree(node1, node2);
// BTree.addRightSubTree(node1, node3);

// BTree.addLeftSubTree(node4, node5);
// BTree.addRightSubTree(node4, node6);

// Level 4
// BTree.addLeftSubTree(node5, node7);
// BTree.addRightSubTree(node5, node8);
// BTree.addLeftSubTree(node6, node9);
// BTree.addRightSubTree(node6, node10);

// console.log(BTree.getCount(root));
// console.log(BTree.getHeight(root));
// BTree.preOrder(root);
// BTree.inOrder(root);
// BTree.postOrder(root);
// BTree.levelOrder(root);

// var BTree2 = BTree.clone();
// console.log(BTree2.getCount(root));
// console.log(BTree2.getHeight(root));
// BTree2.preOrder(root);
// BTree2.inOrder(root);
// BTree2.postOrder(root);
// BTree2.levelOrder(root);

// var heap = new Heap();

// heap.insert(4);
// heap.insert(2);
// heap.insert(3);
// heap.insert(1);
// heap.insert(5);

// heap.print();

// heap.delete();
// heap.delete();

// heap.print();

// console.log(heap.size);