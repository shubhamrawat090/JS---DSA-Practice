class DisjointSet {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((_, i) => i);
    this.rank = new Array(n).fill(1);
    this.size = new Array(n).fill(1);
  }

  findUltParent(node) {
    if (this.parent[node] === node) return node;
    return (this.parent[node] = this.findUltParent(this.parent[node])); // Path compression
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
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const n = accounts.length;
  const ds = new DisjointSet(n);
  const emailToIndex = {};

  // Step 1: Map emails to their account indices and union the accounts
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < accounts[i].length; j++) {
      const email = accounts[i][j];
      if (emailToIndex[email] !== undefined) {
        // ds.unionByRank(i, emailToIndex[email]);
        ds.unionBySize(i, emailToIndex[email]);
      } else {
        emailToIndex[email] = i;
      }
    }
  }

  // Step 2: Group emails by their ultimate parent
  const groupedEmails = {};
  for (const email in emailToIndex) {
    ///// KEEP IN MIND: NEED ULTIMATE PARENT
    const parentIndex = ds.findUltParent(emailToIndex[email]);
    if (!groupedEmails[parentIndex]) {
      groupedEmails[parentIndex] = new Set();
    }
    groupedEmails[parentIndex].add(email);
  }

  // Step 3: Construct the result
  const result = [];
  for (const parentIndex in groupedEmails) {
    const name = accounts[parentIndex][0];
    const emails = Array.from(groupedEmails[parentIndex]).sort();
    result.push([name, ...emails]);
  }

  return result;
};
