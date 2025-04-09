//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {

    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let V = parseInt(readLine());
        let E = parseInt(readLine());
        const adj = Array.from({length : V}, () => []);
        for (let i = 1; i <= E; i++) {
            const [u, v, w] = readLine().split(' ').map(x => parseInt(x));
            adj[u].push([ v, w ]);
            adj[v].push([ u, w ]);
        }
        let obj = new Solution();
        let ans = obj.spanningTree(V, adj);
        console.log(ans);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

class DisjointSet {
    constructor(n) {
        this.parent = new Array(n).fill(0).map((_, i) => i);
        this.rank = new Array(n).fill(1);
        this.size = new Array(n).fill(1);
    }

    findUltParent(node) {
        if (this.parent[node] === node) return node;
        return this.parent[node] = this.findUltParent(this.parent[node]); // Path compression
    }

    unionByRank(u, v) {
        const pu = this.findUltParent(u);
        const pv = this.findUltParent(v);
        if (pu === pv) return;

        if (this.rank[pu] < this.rank[pv]) {
            this.parent[pu] = pv;
        } else if (this.rank[pu] > this.rank[pv]) {
            this.parent[pv] = pu;
        } else {
            this.parent[pv] = pu;
            this.rank[pu]++;
        }
    }

    unionBySize(u, v) {
        const pu = this.findUltParent(u);
        const pv = this.findUltParent(v);
        if (pu === pv) return;

        if (this.size[pu] < this.size[pv]) {
            this.parent[pu] = pv;
            this.size[pv] += this.size[pu];
        } else {
            this.parent[pv] = pu;
            this.size[pu] += this.size[pv];
        }
    }
}

/**
 * @param {number[][]} adj
 * @param {number} v
 * @param {number} e
 * @returns {number}
 */
class Solution {
    spanningTree(v, adj) {
        // code here
        const ds = new DisjointSet(v);
        
        const edges = [];
        for(let node = 0; node < v; node++) {
            for(let [nbr, wt] of adj[node]) {
                edges.push([wt, node, nbr]);
            }
        }
        edges.sort((a, b) => a[0] - b[0]);
        
        let sum = 0;
        for(let [wt, node, nbr] of edges) {
            if(ds.findUltParent(node) !== ds.findUltParent(nbr)) {
                ds.unionByRank(node, nbr);
                sum += wt;
            }
        }
        
        return sum;
    }
}