// const DisjointSet = require("./DisjointSet/DisjointSet");

const DijkstraAlgorithm = require("./DiskstraAlgorithm/DijkstraAlgorithm");
const Graph = require("./Graph/Graph");
const PriorityQueue = require("./PriorityQueue/PriorityQueue");

// console.log("Union by Rank")
// const ds1 = new DisjointSet(7);
// ds1.unionByRank(1, 2);
// ds1.unionByRank(2, 3);
// ds1.unionByRank(4, 5);
// ds1.unionByRank(6, 7);
// ds1.unionByRank(5, 6);
// checkSameComponent(3, 7, ds1); // Not same
// ds1.unionByRank(3, 7);
// checkSameComponent(3, 7, ds1); // Same

// console.log("\nUnion by Size")
// const ds2 = new DisjointSet(7);
// ds2.unionBySize(1, 2);
// ds2.unionBySize(2, 3);
// ds2.unionBySize(4, 5);
// ds2.unionBySize(6, 7);
// ds2.unionBySize(5, 6);
// checkSameComponent(3, 7, ds2); // Not same
// ds2.unionBySize(3, 7);
// checkSameComponent(3, 7, ds2); // Same

// // If 3, 7 are in the same component or not
// function checkSameComponent(u, v, ds) {
//     if(ds.findUltimateParent(u) === ds.findUltimateParent(v)) {
//         console.log(`${u} and ${v} : SAME`);
//     } else {
//         console.log(`${u} and ${v} : NOT  SAME`);
//     }
// }

// const pq = new PriorityQueue();
// pq.push(1, 3);
// pq.push(2, 4);
// pq.push(3, 5);
// pq.push(4, 6);
// pq.push(5, 7);
// pq.push(6, 8);
// console.log(pq.front());
// pq.pop();
// console.log(pq.front());
// pq.pop();

// Create a graph with 9 vertices (0 to 8)
const graph = new Graph(9);

// Adding edges to create a sample graph
graph.addEdge(0, 1, 4);
graph.addEdge(0, 7, 8);
graph.addEdge(1, 2, 8);
graph.addEdge(1, 7, 11);
graph.addEdge(2, 3, 7);
graph.addEdge(2, 8, 2);
graph.addEdge(2, 5, 4);
graph.addEdge(3, 4, 9);
graph.addEdge(3, 5, 14);
graph.addEdge(4, 5, 10);
graph.addEdge(5, 6, 2);
graph.addEdge(6, 7, 1);
graph.addEdge(6, 8, 6);
graph.addEdge(7, 8, 7);

// Create Dijkstra's algorithm instance with the graph
const dijkstra = new DijkstraAlgorithm(graph.getVertices(), graph.getAdjList());

// Find shortest paths from source vertex 0
const shortestDistances = dijkstra.shortestPath(0);

// Print the results
console.log("Shortest distances from vertex 0:");
shortestDistances.forEach((distance, vertex) => {
    console.log(`To vertex ${vertex}: ${distance}`);
});