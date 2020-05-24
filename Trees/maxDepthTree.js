/**
 * Given a n-ary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Nary-Tree input serialization is represented in their level order traversal,
 * each group of children is separated by the null value
 */

/**
 * Definition for a Node.
 */
function Node(val, children) {
    this.val = val;
    this.children = children;
}

/**
 * Breath first search solution
 * @param {Node} root
 * @return {number} depth
 */
const maxDepth = (root) => {
    if (root == null) return 0;

    let depth = 0;
    let queue = [];
    queue.push(root);
    while (queue.length !== 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const currentNode = queue.shift();
            currentNode.children && currentNode.children.forEach(child => queue.push(child));
        }
        depth++;
    }

    return depth;
};

const test = () => {
    const child5 = new Node(5);
    const child6 = new Node(6);
    const child2 = new Node(2);
    const child4 = new Node(4);
    const child3 = new Node(3, [child5, child6]);
    const root = new Node(1, [child3, child2, child4]);

    const result = maxDepth(root);
    console.log(result); // 3
};