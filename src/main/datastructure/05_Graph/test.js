const AdjacencyMatrix = require('./05_AdjacencyMatrix.js');

const Graph = new AdjacencyMatrix(4);
for (var i = 0; i < 4; i++) {
    Graph.insertVertex(i);
}
Graph.insertEdge(0, 1);
Graph.insertEdge(0, 3);
Graph.insertEdge(1, 0);
Graph.insertEdge(1, 2);
Graph.insertEdge(1, 3);
Graph.insertEdge(2, 1);
Graph.insertEdge(2, 3);
Graph.insertEdge(3, 0);
Graph.insertEdge(3, 1);
Graph.insertEdge(3, 2);
Graph.printMatrix();