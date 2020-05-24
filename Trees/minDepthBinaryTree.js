/**
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 */

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = (root) => {
    if (root === null) return 0;
    const queue = [];
    queue.push(root);
    let depth = 1;

    while (queue.length !== 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (node.left == null && node.right == null) return depth;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        depth++;
    }

    return depth;
};


const test = () => {
    const root = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);
    const node4 = new TreeNode(4);
    const node5 = new TreeNode(5);
    node3.left = node4;
    node3.right = node5;
    root.left = node2;
    root.right = node3;
    const result = minDepth(root);
    console.log(result); // 2
};