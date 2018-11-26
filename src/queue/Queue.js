/**
 * Queue
 *
 * Functions
 *   enqueue, dequeue, front, rear, size, isEmpty, toArray
 */

class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(value) {
    this.data.push(value);
    return this;
  }

  dequeue() {
    return this.data.shift();
  }

  front() {
    return this.data[0];
  }

  rear() {
    return this.data[this.data.length - 1];
  }

  size() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  toArray() {
    return this.data;
  }
}

module.exports = Queue;
