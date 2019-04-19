/**
 * Given a Binary Search Tree (BST) with the root node root,
 * return the minimum difference between the values
 * of any two different nodes in the tree.
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
 * @return {number}
 */
const minDiffInBST = (root, arr = []) => {
    if (root === null) return;

    minDiffInBST(root.left, arr);
    arr.push(root.val);
    minDiffInBST(root.right, arr);

    let minDiff = Number.MAX_VALUE;

    for (let i = 1; i < arr.length; i++) {
        if (minDiff === 1) return 1;
        if ((arr[i] - arr[i -1]) < minDiff) minDiff = arr[i] - arr[i -1];
    }
    return minDiff;
};
