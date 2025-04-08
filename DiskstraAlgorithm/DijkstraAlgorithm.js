const PriorityQueue = require("../PriorityQueue/PriorityQueue");

class DijkstraAlgorithm {
  constructor(V, adj) {
    this.V = V;
    this.adj = adj;
  }

  shortestPath(source) {
    // Create a priority queue to store vertices and their distances
    const pq = new PriorityQueue();
    
    // Distance array to store shortest distances from source
    const dist = new Array(this.V).fill(Infinity);
    
    // Distance to source vertex is 0
    dist[source] = 0;
    pq.push([0, source]); // [distance, vertex]
    
    while (!pq.isEmpty()) {
      const [distance, vertex] = pq.pop();
      
      // If we found a longer path, skip
      if (distance > dist[vertex]) continue;
      
      // Check all adjacent vertices
      for (const [adjVertex, weight] of this.adj[vertex]) {
        const newDist = dist[vertex] + weight;
        
        // If we found a shorter path to adjVertex
        if (newDist < dist[adjVertex]) {
          dist[adjVertex] = newDist;
          pq.push([newDist, adjVertex]);
        }
      }
    }
    
    return dist;
  }
}

module.exports = DijkstraAlgorithm;