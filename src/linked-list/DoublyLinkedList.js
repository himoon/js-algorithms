/**
 * Doubly Linked List
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
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    if (this.head === null) {
      this.tail = this.head = new Node(value);
      this.size += 1;
      return this;
    }

    const node = new Node(value, null, this.tail);
    this.tail.next = node;
    this.tail = node;
    this.size += 1;
    return this;
  }

  prepend(value) {
    if (this.head === null) {
      this.tail = this.head = new Node(value);
      this.size += 1;
      return this;
    }

    const node = new Node(value, this.head, null);
    this.head.prev = node;
    this.head = node;
    this.size += 1;
    return this;
  }

  remove(value) {
    // head is null
    if (this.head === null) return false;

    // finding node failed
    const node = this.find(value);
    if (node === false) return false;

    // remove head
    if (node === this.head) {
      if (this.head === this.tail) {
        // size of the list equals to 1
        this.tail = this.head = null;
        this.size -= 1;
        return true;
      }
      this.head = this.head.next;
      this.head.prev = null;
      this.size -= 1;
      return true;
    }

    // remove tail
    if (node === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.size -= 1;
      return true;
    }

    const nextNode = node.next;
    const prevNode = node.prev;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.size -= 1;
    return true;
  }

  insertBefore(value, target) {
    const targetNode = this.find(target);

    // If finding node failed
    if (targetNode === false) return false;

    // If the node is head node
    if (targetNode === this.head) {
      const node = new Node(value, this.head, null);
      this.head = targetNode.prev = node;
      this.size += 1;
      return this;
    }

    // Else
    const node = new Node(value, targetNode, targetNode.prev);
    targetNode.prev.next = targetNode.prev = node;
    this.size += 1;
    return this;
  }

  insertAfter(value, target) {
    // XXX what if the value is head?
    const targetNode = this.find(target);

    // If finding node failed
    if (targetNode === false) return false;

    // If the node is tail node
    if (targetNode === this.tail) {
      const node = new Node(value, null, targetNode);
      this.tail = targetNode.next = node;
      this.size += 1;
      return this;
    }

    // Else
    const node = new Node(value, targetNode.next, targetNode);
    targetNode.next.prev = targetNode.next = node;
    this.size += 1;
    return this;
  }

  find(value) {
    if (this.head === null) return false;

    let curr = this.head;
    while (curr) {
      if (curr.value === value) return curr;
      curr = curr.next;
    }
    return false;
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    let temp = null;
    while (curr) {
      temp = curr.next; // cache curr.next node
      curr.next = prev;
      curr.prev = temp;

      prev = curr;
      curr = temp;
    }
    this.tail = this.head;
    this.head = prev;
    return this;
  }

  toArray() {
    const res = [];
    if (this.head === null) return res;

    let curr = this.head;
    while (curr) {
      res.push(curr.value);
      curr = curr.next;
    }
    return res;
  }

  toString() {
    const res = this.toArray();
    return res.toString();
  }
}

module.exports = DoublyLinkedList;
