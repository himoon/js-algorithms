/**
 * Binary Search Tree
 *
 * Properties
 *  - root
 *
 * Functions
 *  - insert
 *  - contains
 *  - findMinNode
 *  - delete
 *  - traverseInOrder
 *  - traversePreOrder
 *  - traversePostOrder
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * @param {*} value
   * @returns {BinarySearchTree}
   * @memberof BinarySearchTree
   */
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    }

    let curr = this.root;
    while (true) {
      if (value <= curr.value) {
        if (curr.left === null) {
          curr.left = new Node(value);
          return this;
        }
        curr = curr.left;
      } else {
        if (curr.right === null) {
          curr.right = new Node(value);
          return this;
        }
        curr = curr.right;
      }
    }
  }

  /**
   * @param {*} value
   * @returns {boolean}
   * @memberof BinarySearchTree
   */
  remove(value) {
    if (this.root === null) return false;

    const removeFromNode = (node, value, parent) => {
      if (value < node.value) {
        if (node.left === null) return false; // Search failed.
        return removeFromNode(node.left, value, node);
      }

      if (value > node.value) {
        if (node.right === null) return false; // Search failed.
        return removeFromNode(node.right, value, node);
      }

      // Remove the value. 3 possible cases.
      if (node.left === null && node.right === null) {
        // Case 1. A node is leaf node.
        if (parent) {
          if (node === parent.left) parent.left = null;
          else parent.right = null;
        } else {
          node = null;
        }
        return true;
      } else if (node.left !== null && node.right !== null) {
        // Case 2. A node has two children.
        const min_node = this.findMinNode(node.right);
        node.value = min_node.value;
        removeFromNode(node.right, min_node.value, node);
        return true;
      } else {
        // Case 3. A node has only one child.
        if (parent) {
          if (node === parent.left) parent.left = node.left || node.right;
          else parent.right = node.left || node.right;
        } else {
          node = node.left || node.right;
        }
        return true;
      }
    };

    return removeFromNode(this.root, value);
  }

  /**
   * @param {*} value
   * @returns {boolean}
   * @memberof BinarySearchTree
   */
  contains(value) {
    let curr = this.root;
    if (curr === null) return false; // If root equals to null, return false.

    while (true) {
      if (value < curr.value) {
        if (curr.left === null) return false;
        curr = curr.left;
      } else if (value > curr.value) {
        if (curr.right === null) return false;
        curr = curr.right;
      } else {
        return true;
      }
    }
  }

  /**
   * @returns {null|Node}
   * @memberof BinarySearchTree
   */
  findMinNode(node = this.root) {
    if (node === null) return null; // Return null in case of empty tree.
    if (node.left !== null) return this.findMinNode(node.left);
    else return node;
  }

  /**
   * @returns {null|Node}
   * @memberof BinarySearchTree
   */
  findMaxNode(node = this.root) {
    if (node === null) return null;
    if (node.right !== null) return this.findMaxNode(node.right);
    else return node;
  }

  traverseInOrder(node = this.root) {
    const res = [];
    function traverseInOrderFromNode(node) {
      if (node !== null) {
        traverseInOrderFromNode(node.left);
        res.push(node.value);
        traverseInOrderFromNode(node.right);
      }
    }
    traverseInOrderFromNode(node);
    return res;
  }
}

module.exports = BinarySearchTree;
