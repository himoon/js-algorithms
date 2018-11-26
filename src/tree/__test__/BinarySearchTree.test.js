const BinarySearchTree = require("../BinarySearchTree");

describe("Binary Search Tree Algorithm", () => {
    // Test Binary Tree
    //      8
    //   3     10
    // 1   6      14
    //    4 7    13
    it("Should add data", () => {
        const tree = new BinarySearchTree();
        for (const value of [8, 3, 10, 1, 6, 4, 7, 14, 13]) tree.insert(value);

        expect(tree.root).not.toBeNull();
        expect(tree.root.value).toBe(8);
        expect(tree.root.left.value).toBe(3);
        expect(tree.root.left.left.value).toBe(1);
        expect(tree.root.left.left.left).toBeNull();
        expect(tree.root.left.left.right).toBeNull();
        expect(tree.root.left.right.value).toBe(6);
        expect(tree.root.left.right.left.value).toBe(4);
        expect(tree.root.left.right.right.value).toBe(7);
        expect(tree.root.right.value).toBe(10);
        expect(tree.root.right.left).toBeNull();
        expect(tree.root.right.right.value).toBe(14);
        expect(tree.root.right.right.left.value).toBe(13);
        expect(tree.root.right.right.right).toBeNull();
    });

    it("should contains data", () => {
        const tree = new BinarySearchTree();
        for (const value of [8, 3, 10, 1, 6, 4, 7, 14, 13]) tree.insert(value);

        expect(tree.contains(1)).toBeTruthy();
        expect(tree.contains(3)).toBeTruthy();
        expect(tree.contains(7)).toBeTruthy();
        expect(tree.contains(5)).toBeFalsy();
        expect(tree.contains(15)).toBeFalsy();
    });

    it("should return min or max node", () => {
        const tree = new BinarySearchTree();
        for (const value of [8, 3, 10, 1, 6, 4, 7, 14, 13]) tree.insert(value);

        expect(tree.findMinNode().value).toBe(1);
        expect(tree.findMaxNode().value).toBe(14);

        // In case of empty tree
        const new_tree = new BinarySearchTree();
        expect(new_tree.findMinNode()).toBeNull();
        expect(new_tree.findMaxNode()).toBeNull();

        // In case of tree with single node
        expect(new BinarySearchTree().insert(8).findMinNode().value).toBe(8);
        expect(new BinarySearchTree().insert(8).findMaxNode().value).toBe(8);
    });

    it("should remove the data", () => {
        const tree = new BinarySearchTree();
        for (const data of [8, 3, 10, 1, 6, 4, 7, 14, 13]) tree.insert(data);

        // Search failed.
        expect(tree.remove(0)).toBeFalsy();
        var traverse = tree.traverseInOrder();

        // Remove the value. 3 possible cases.
        // Case 1. A node is leaf node.
        expect(tree.remove(4)).toBeTruthy();
        expect(tree.contains(4)).toBeFalsy();
        var traverse = tree.traverseInOrder();

        // Case 2. A node has two children.
        expect(tree.remove(3)).toBeTruthy();
        expect(tree.contains(3)).toBeFalsy();
        var traverse = tree.traverseInOrder();

        // Case 3. A node has only one child.
        expect(tree.remove(14)).toBeTruthy();
        expect(tree.contains(14)).toBeFalsy();
        var traverse = tree.traverseInOrder();
    });
});
