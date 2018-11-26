/**
 * Stack
 *
 * Functions
 *   push, pop, peek, size, isEmpty
 */

class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
    return this;
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  size() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

module.exports = Stack;
