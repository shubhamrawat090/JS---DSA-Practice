# Data Structures and Algorithms Implementation

This repository contains implementations of various data structures and algorithms in JavaScript. It includes efficient implementations of Priority Queue, Disjoint Set, Graph, and Dijkstra's Algorithm.

## Data Structures Implemented

### 1. Priority Queue
A binary heap-based implementation of a priority queue that maintains elements in a specific order.

```javascript
const PriorityQueue = require("./PriorityQueue/PriorityQueue");

const pq = new PriorityQueue();
pq.push(1, 3);
pq.push(2, 4);
console.log(pq.front()); // Get the highest priority element
pq.pop(); // Remove the highest priority element
```

### 2. Disjoint Set (Union-Find)
An implementation of the Disjoint Set data structure with both Union by Rank and Union by Size optimizations.

```javascript
const DisjointSet = require("./DisjointSet/DisjointSet");

const ds = new DisjointSet(7); // Create a disjoint set with 7 elements
ds.unionByRank(1, 2); // Unite elements using rank
ds.unionBySize(4, 5); // Unite elements using size
```

### 3. Graph
A weighted graph implementation supporting various graph operations.

```javascript
const Graph = require("./Graph/Graph");

const graph = new Graph(9); // Create a graph with 9 vertices
graph.addEdge(0, 1, 4); // Add edge with weight
graph.addEdge(0, 7, 8);
```

### 4. Dijkstra's Algorithm
An implementation of Dijkstra's shortest path algorithm using the Priority Queue.

```javascript
const DijkstraAlgorithm = require("./DiskstraAlgorithm/DijkstraAlgorithm");

const dijkstra = new DijkstraAlgorithm(graph.getVertices(), graph.getAdjList());
const shortestDistances = dijkstra.shortestPath(0); // Find shortest paths from vertex 0
```

## Usage

1. Clone the repository
2. Each data structure is in its own directory with a dedicated JavaScript file
3. Import the required data structure:
```javascript
const DataStructure = require("./path/to/datastructure");
```

## Testing

The repository includes a `test.js` file with example usage of all implemented data structures. Run it to see the data structures in action:

```bash
node test.js
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.