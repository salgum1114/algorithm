class AdjacencyMatrix {
    constructor(params) {
        if(params === null || typeof params === 'undefined') {
            console.log('The size of the matrix is required');
            return;
        }
        this.vertex = 0;
        this.matrixSize = params;
        this.matrix = this.createMatrix(this.matrixSize);
    }

    createMatrix(matrixSize) {
        const tempArray = new Array(matrixSize);
        for (var i = 0; i < 4; i++) {
            tempArray[i] = new Array(matrixSize);
            for (var j = 0; j < 4; j++) {
                tempArray[i][j] = 0;
            }
        }

        return tempArray;
    }

    /**
     * @description 정점 삽입
     * @param {node} vertex 
     */
    insertVertex(vertex) {
        if ((this.vertex + 1) > this.matrixSize) {
            console.log('The size of the matrix is exceeded');
            return;
        }

        this.vertex++;
    }

    /**
     * @description u는 꼬리(tail), v는 머리(head)를 지칭함. weight는 가중치
     * @param {node} u 
     * @param {node} v 
     * @param {variable} weight 
     */
    insertEdge(u, v, weight) {
        if (this.vertex <= u || this.vertex <= v) {
            console.log('The vertex does not exist in graph');
        }
        if (weight === null || typeof weight === 'undefined') {
            weight = 1;
        }
        this.matrix[u][v] = weight;
    }

    printMatrix() {
        console.log(this.matrix);
    }
}

module.exports = AdjacencyMatrix;