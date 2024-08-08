class WeightedGraphMatrix {
    constructor(size) {
        this.size = size;
        this.adjMatrix = Array.from({ length: size }, () => Array(size).fill(Infinity));
        for (let i = 0; i < size; i++) {
            this.adjMatrix[i][i] = 0; // Distance to itself is zero
        }
    }

    addEdge(from, to, weight) {
        if (from < this.size && to < this.size) {
            this.adjMatrix[from][to] = weight;
            this.adjMatrix[to][from] = weight; // For undirected graphs
        }
    }

    removeEdge(from, to) {
        if (from < this.size && to < this.size) {
            this.adjMatrix[from][to] = Infinity;
            this.adjMatrix[to][from] = Infinity; // For undirected graphs
        }
    }

    print() {
        console.log(this.adjMatrix.map(row => row.join(' ')).join('\n'));
    }
}

const graph = new WeightedGraphMatrix(4);
graph.addEdge(0, 1, 10);
graph.addEdge(1, 2, 20);
graph.addEdge(2, 3, 30);
graph.print();



class WeightedGraphList {
    constructor() {
        this.adjList = new Map();
    }

    addNode(node) {
        if (!this.adjList.has(node)) {
            this.adjList.set(node, []);
        }
    }

    addEdge(from, to, weight) {
        if (!this.adjList.has(from)) this.addNode(from);
        if (!this.adjList.has(to)) this.addNode(to);

        this.adjList.get(from).push({ node: to, weight });
        this.adjList.get(to).push({ node: from, weight }); // For undirected graphs
    }

    removeEdge(from, to) {
        if (this.adjList.has(from)) {
            this.adjList.set(from, this.adjList.get(from).filter(edge => edge.node !== to));
        }
        if (this.adjList.has(to)) {
            this.adjList.set(to, this.adjList.get(to).filter(edge => edge.node !== from));
        }
    }

    print() {
        for (const [node, edges] of this.adjList.entries()) {
            console.log(`${node} -> ${edges.map(edge => `${edge.node} (${edge.weight})`).join(', ')}`);
        }
    }
}

const graph1 = new WeightedGraphList();
graph1.addEdge('A', 'B', 10);
graph1.addEdge('A', 'C', 20);
graph1.addEdge('B', 'D', 30);
graph1.print();
