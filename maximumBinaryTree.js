/**
 * Given an integer array with no duplicates. A maximum
 * tree building on this array is defined as follow:
 * The root is the maximum number in the array.
 * The left subtree is the maximum tree constructed from left
 * part subarray divided by the maximum number. The right subtree
 * is the maximum tree constructed from right part subarray
 * divided by the maximum number.Construct the maximum tree by the
 * given array and output the root node of this tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = nums => {
    if (nums.length === 0) return null;

    const root = new TreeNode(Math.max(...nums));

    const rootIndex = nums.findIndex(el => el === root.val);

    root.left = constructMaximumBinaryTree(nums.slice(0, rootIndex));
    root.right = constructMaximumBinaryTree(nums.slice(rootIndex + 1, nums.length));

    return root;
};
