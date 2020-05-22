/**
 * Given the root node of a binary search tree (BST) and a value
 * to be inserted into the tree, insert the value into the BST.
 * Return the root node of the BST after the insertion.
 * It is guaranteed that the new value does not exist in the original BST.
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
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = (root, val) => {
    if (root == null) return root;

    const stack = [];
    stack.push(root);

    while (stack.length !== 0) {
        const node = stack.pop();

        if (node.val > val) {
            if (node.left === null) {
                node.left = new TreeNode(val);
                return root;
            } else {
                stack.push(node.left);
            }
        }

        if (node.val < val) {
            if(node.right === null) {
                node.right = new TreeNode(val);
                return root;
            } else {
                stack.push(node.right);
            }
        }
    }

    return root;
};