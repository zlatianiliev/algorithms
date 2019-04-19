/**
 * Given the root node of a binary search tree, return the sum of values
 * of all nodes with value between L and R (inclusive). The
 * binary search tree is guaranteed to have unique values.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const rangeSumBST = (root, L, R) => {
    if (root == null) return 0;

    let sum = 0;
    const queue = [];

    queue.push(root);

    while (queue.length !== 0) {
        const node = queue.pop();

        if (node == null) {
            continue;
        }

        if (node.val >= L && node.val <= R) {
            sum += node.val;
        }

        if (node.left != null) queue.push(node.left);
        if (node.right != null) queue.push(node.right);
    }

    return sum;
};
