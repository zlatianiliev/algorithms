/*
* The distance between a node in a Binary Tree and the tree's root is called the node's depth.
* Write a function that takes in a Binary Tree and returns the sum or its nodes' depths.
* Each BinaryTree node has an integer value, a lef child node and a right child node.
* Children nodes can either be BinaryTree nodes themselves or a null.
* */

function nodeDepths(root) {
    let sumDepth = 0;
    const stack = [{node: root, depth: 0}];

    while (stack.length > 0) {
        const currentNode = stack.pop();
        if (currentNode['node'] == null) {
            continue;
        }
        sumDepth += currentNode['depth'];
        stack.push({node: currentNode['node'].left, depth: currentNode['depth'] + 1});
        stack.push({node: currentNode['node'].right, depth: currentNode['depth'] + 1});

    }

    return sumDepth;
}

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);

const actual = nodeDepths(root);

console.log(actual === 16); // true
