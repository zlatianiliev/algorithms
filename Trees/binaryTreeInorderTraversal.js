/**
 * Given a binary tree, return the inorder traversal of its nodes' values.
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
 * @return {number[]}
 */
const inorderTraversal = (root, array = []) => {
    if (root === null) return [];
    inorderTraversal(root.left, array);
    array.push(root.val);
    inorderTraversal(root.right, array);
    return array;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversalIterative = root => {
    if (root === null) return [];

    const stack = [];
    const answer = [];

    while (root !== null || stack.length !== 0) {
        if (root !== null) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            answer.push(root.val);
            root = root.right;
        }
    }

    return answer;
};
