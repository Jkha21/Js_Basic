class GraphMatrix {
    constructor(size) {
        this.size = size;
        this.adjMatrix = Array.from({ length: size }, () => Array(size).fill(0));
    }

    addEdge(from, to) {
        if (from < this.size && to < this.size) {
            this.adjMatrix[from][to] = 1;
        }
    }

    removeEdge(from, to) {
        if (from < this.size && to < this.size) {
            this.adjMatrix[from][to] = 0;
        }
    }

    print() {
        console.log(this.adjMatrix.map(row => row.join(' ')).join('\n'));
    }
}

const graph = new GraphMatrix(4);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.print();


class GraphList {
    constructor() {
        this.adjList = new Map();
    }

    addNode(node) {
        if (!this.adjList.has(node)) {
            this.adjList.set(node, []);
        }
    }

    addEdge(from, to) {
        if (!this.adjList.has(from)) this.addNode(from);
        if (!this.adjList.has(to)) this.addNode(to);

        this.adjList.get(from).push(to);
    }

    removeEdge(from, to) {
        if (this.adjList.has(from)) {
            this.adjList.set(from, this.adjList.get(from).filter(n => n !== to));
        }
    }

    print() {
        for (const [node, edges] of this.adjList.entries()) {
            console.log(`${node} -> ${edges.join(', ')}`);
        }
    }
}

const graph1 = new GraphList();
graph1.addEdge('A', 'B');
graph1.addEdge('A', 'C');
graph1.addEdge('B', 'D');
graph1.print();
