/**
 * Linked List
 *
 * Properties
 *  - head
 *  - tail
 *  - size
 *
 * Functions
 *  - append
 *  - prepend
 *  - insertBefore
 *  - insertAfter
 *  - find
 *  - size
 *  - remove
 *  - reverse
 *  - toArray
 *  - toString
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    // If head node is null
    if (this.head === null) {
      this.tail = this.head = new Node(value);
      this.size += 1;
      return this;
    }

    // Else
    this.tail = this.tail.next = new Node(value);
    this.size += 1;
    return this;
  }

  prepend(value) {
    // If head node is null
    if (this.size === 0) {
      this.tail = this.head = new Node(value);
      this.size += 1;
      return this;
    }

    // Else
    this.head = new Node(value, this.head);
    this.size += 1;
    return this;
  }

  find(value) {
    // If head node is null
    if (this.head === 0) return false;

    // Else
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return curr;
      curr = curr.next;
    }
    return false;
  }

  insertBefore(value, target) {
    const targetNode = this.find(target);

    // If invalid target value
    if (targetNode === null) return false;

    // If target node is head ndoe
    if (targetNode === this.head) {
      this.head = new Node(value, this.head);
      this.size += 1;
      return this;
    }

    // Else
    const duplicatedNode = new Node(targetNode.value, targetNode.next);
    targetNode.value = value;
    targetNode.next = duplicatedNode;
    this.size += 1;
    return this;
  }

  insertAfter(value, target) {
    const targetNode = this.find(target);

    // If invalid target value
    if (targetNode === null) return false;

    // If target Node is tail node
    if (targetNode === this.tail) {
      this.tail = this.tail.next = new Node(value);
      this.size += 1;
      return this;
    }

    // Else
    targetNode.next = new Node(value, targetNode.next, targetNode);
    this.size += 1;
    return this;
  }

  remove(value) {
    let curr = this.head;

    // If head node is null
    if (curr === null) return false;

    // If head node is null
    if (curr.value === value) {
      this.head = curr.next;
      this.size -= 1;
      return this;
    }

    let prev = curr;
    curr = curr.next;
    while (curr) {
      if (curr.value === value) {
        prev.next = curr.next;
        this.size -= 1;
        return this;
      }
      prev = curr;
      curr = curr.next;
    }
    return false;
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    let temp = null;
    while (curr) {
      temp = curr.next;
      curr.next = prev;

      prev = curr;
      curr = temp;
    }
    this.head = prev;
    return this;
  }

  toArray() {
    const res = [];
    let curr = this.head;
    while (curr) {
      res.push(curr.value);
      curr = curr.next;
    }
    return res;
  }

  toString() {
    const arr = this.toArray();
    return arr.toString();
  }
}

module.exports = LinkedList;
