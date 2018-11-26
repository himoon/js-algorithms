/**
 * Priority Queue
 *
 * Functions
 *   enqueue, dequeue, front, rear, size, isEmpty, toArray
 */

class PriorityQueue {
  constructor() {
    this.data = [];
  }

  enqueue(value, priority) {
    // If empty queue
    if (this.data.length === 0) {
      this.data.push([value, priority]);
      return this;
    }

    // If the value has priority over old values
    for (let i = 0; i < this.data.length; i += 1) {
      if (priority < this.data[i][1]) {
        this.data.splice(i, 0, [value, priority]);
        return this;
      }
    }

    // Else
    this.data.push([value, priority]);
    return this;
  }

  dequeue() {
    const element = this.data.shift();
    return (element && element[0]) || undefined;
  }

  front() {
    const element = this.data[0];
    return (element && element[0]) || undefined;
  }

  rear() {
    const element = this.data[this.data.length - 1];
    return (element && element[0]) || undefined;
  }

  size() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  toArray() {
    const res = [];
    for (const elem of this.data) {
      res.push(elem[0]);
    }
    return res;
  }
}

module.exports = PriorityQueue;
