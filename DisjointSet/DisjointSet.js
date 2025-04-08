class DisjointSet {
  #rank;
  #parent;
  #size;

  constructor(n) {
    // n + 1 will work for 1 based indexing as well
    this.#rank = new Array(n + 1).fill(0);
    this.#size = new Array(n + 1);
    this.#parent = new Array(n + 1);
    for (let i = 0; i < n; i++) {
      this.#parent[i] = i;
      this.#size[i] = 1;
    }
  }

  findUltimateParent(node) {
    if (node == this.#parent[node]) {
      return node;
    }

    // Path compression happens when we get each parent and put it in its ultimate parent
    return (this.#parent[node] = this.findUltimateParent(this.#parent[node]));
  }

  // TC: 4 alpha ==> nearly constant
  unionByRank(u, v) {
    const ultimateParent_U = this.findUltimateParent(u);
    const ultimateParent_V = this.findUltimateParent(v);

    if (ultimateParent_U === ultimateParent_V) {
      // Both u and v are already joined together
      return;
    }

    // Smaller size/rank one gets attached to big one.
    if (this.#rank[ultimateParent_U] > this.#rank[ultimateParent_V]) {
      this.#parent[ultimateParent_V] = ultimateParent_U;
    } else if (this.#rank[ultimateParent_U] < this.#rank[ultimateParent_V]) {
      this.#parent[ultimateParent_U] = ultimateParent_V;
    } else {
      // same size/rank add any one and increase rank of the parent added to
      this.#parent[ultimateParent_V] = ultimateParent_U;
      this.#rank[ultimateParent_V]++;
    }
  }

  unionBySize(u, v) {
    const ultimateParent_U = this.findUltimateParent(u);
    const ultimateParent_V = this.findUltimateParent(v);

    if (ultimateParent_U === ultimateParent_V) {
      return;
    }

    if (this.#size[ultimateParent_U] < this.#size[ultimateParent_V]) {
      // Join U in V
      this.#parent[ultimateParent_U] = ultimateParent_V;
      this.#size[ultimateParent_V] += this.#size[ultimateParent_U];
    } else {
      // Join V in U
      this.#parent[ultimateParent_V] = ultimateParent_U;
      this.#size[ultimateParent_U] += this.#size[ultimateParent_V];
    }
  }
}

module.exports = DisjointSet;
