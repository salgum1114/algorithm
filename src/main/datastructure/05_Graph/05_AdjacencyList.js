class AdjacencyList {
    constructor(params) {
        this.obj = {};
        this.length = 0;
    }

    insertVertex(vertex) {
        const obj = {
            [vertex]: [],
        }
        this.obj = Object.assign(this.obj, obj);
        return;
    }

    insertEdge(u, v, weight) {
        if (weight === null || typeof weight === 'undefined') {
            return ;
        }

        const uIndex = Object.keys(this.obj).indexOf(u);
        const vIndex = Object.keys(this.obj).indexOf(v);
        
        if (uIndex === -1) {
            console.log(`Tail vertex does not exist in Graph. u: ${u}, v: ${v}, weight: ${weight}`);
            return;
        }

        if (vIndex === -1) {
            console.log(`Head vertex does not exist in Graph. u: ${u}, v: ${v}, weight: ${weight}`);
            return;
        }

        const obj = {
            [v]: weight,
        }

        this.obj[u].push(obj);
        return;
    }

    deleteEdge(u, v) {
        const uIndex = Object.keys(this.obj).indexOf(u);
        const vIndex = Object.keys(this.obj).indexOf(v);
        
        if (uIndex === -1) {
            console.log(`Tail vertex does not exist in Graph. u: ${u}, v: ${v}, weight: ${weight}`);
            return;
        }

        if (vIndex === -1) {
            console.log(`Head vertex does not exist in Graph. u: ${u}, v: ${v}, weight: ${weight}`);
            return;
        }
        // console.log(this.obj[u]);
        const newArray = this.obj[u].filter((obj) => {
            if (obj[v]) {
                return false;
            }
            return true;
        })
        this.obj = Object.assign(this.obj, { [u]: newArray });
    }

    deleteVertex(vertex) {
        const index = Object.keys(this.obj).indexOf(vertex);
        if (index === -1) {
            console.log(`The vertex dose not exist in Graph. vertex: ${vertex}`);
            return;
        }

        delete this.obj[vertex];

        Object.keys(this.obj).map((key) => {
            const tempArray = this.obj[key].filter((obj) => {
                if (obj[vertex]) {
                    return false;
                }
                return true;
            });
            this.obj = Object.assign(this.obj, { [key]: tempArray });
        });

        return;
    }

    printGraph() {
        console.log(this.obj);
    }
}

module.exports = AdjacencyList;