class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.isEmpty()) return null;

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.bubbleDown();
    }

    return root;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const currentNode = this.heap[index];
      const parentNode = this.heap[parentIndex];

      // For max heap, use <= (we want larger values to bubble up)
      if (currentNode[0] <= parentNode[0]) {
        break;
      }

      this.heap[index] = parentNode;
      this.heap[parentIndex] = currentNode;
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const currentNode = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild[0] > currentNode[0]) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild[0] > currentNode[0]) ||
          (swap !== null && rightChild[0] > leftChild[0])
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = currentNode;
      index = swap;
    }
  }

  size() {
    return this.heap.length;
  }

  front() {
    return this.heap[0];
  }

  print() {
    console.log(this.heap);
  }
}
