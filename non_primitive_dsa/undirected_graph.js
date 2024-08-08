// Adjacency Matrix

class GraphMatrix {
    constructor(size) {
        this.size = size;
        this.adjMatrix = Array.from({ length: size }, () => Array(size).fill(0));
    }

    addEdge(node1, node2) {
        if (node1 < this.size && node2 < this.size) {
            this.adjMatrix[node1][node2] = 1;
            this.adjMatrix[node2][node1] = 1; // Because the graph is undirected
        }
    }

    removeEdge(node1, node2) {
        if (node1 < this.size && node2 < this.size) {
            this.adjMatrix[node1][node2] = 0;
            this.adjMatrix[node2][node1] = 0; // Because the graph is undirected
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

    addEdge(node1, node2) {
        if (!this.adjList.has(node1)) this.addNode(node1);
        if (!this.adjList.has(node2)) this.addNode(node2);

        this.adjList.get(node1).push(node2);
        this.adjList.get(node2).push(node1); // Because the graph is undirected
    }

    removeEdge(node1, node2) {
        if (this.adjList.has(node1)) {
            this.adjList.set(node1, this.adjList.get(node1).filter(n => n !== node2));
        }
        if (this.adjList.has(node2)) {
            this.adjList.set(node2, this.adjList.get(node2).filter(n => n !== node1));
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
