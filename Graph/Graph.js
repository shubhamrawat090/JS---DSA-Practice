class Graph {
    constructor(vertices) {
        this.V = vertices;
        this.adj = Array(vertices).fill().map(() => []);
    }

    addEdge(from, to, weight) {
        // Adding edges to the adjacency list
        this.adj[from].push([to, weight]);
        // For undirected graph, uncomment the line below
        // this.adj[to].push([from, weight]);
    }

    getAdjList() {
        return this.adj;
    }

    getVertices() {
        return this.V;
    }
}

module.exports = Graph;