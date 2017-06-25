// const AdjacencyMatrix = require('./05_AdjacencyMatrix.js');

// const Graph = new AdjacencyMatrix(4);
// for (var i = 0; i < 4; i++) {
//     Graph.insertVertex(i);
// }
// Graph.insertEdge(0, 1);
// Graph.insertEdge(0, 3);
// Graph.insertEdge(1, 0);
// Graph.insertEdge(1, 2);
// Graph.insertEdge(1, 3);
// Graph.insertEdge(2, 1);
// Graph.insertEdge(2, 3);
// Graph.insertEdge(3, 0);
// Graph.insertEdge(3, 1);
// Graph.insertEdge(3, 2);
// Graph.printMatrix();

const AdjacencyList = require('./05_AdjacencyList.js');

const Graph = new AdjacencyList();
Graph.insertVertex('a');
Graph.insertVertex('b');
Graph.insertVertex('c');

Graph.insertEdge('b', 'a', 1);
Graph.insertEdge('b', 'a', 4);
Graph.insertEdge('a', 'b', 2);
Graph.insertEdge('b', 'c', 3);
Graph.insertEdge('c', 'c', 5);
Graph.insertEdge('c', 'b', 6);

Graph.deleteEdge('b', 'a');
Graph.printGraph();