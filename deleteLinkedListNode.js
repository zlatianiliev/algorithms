/**
 * Write a function to delete a node in a singly linked list. The input
 * is the head of the linked list and the value that should be deleted.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 *
 * @param {ListNode} head
 * @param {number} node
 * @return {ListNode} head of the linked list
 */
const deleteNodeLinkedList = (head, node) => {
    while(head) {
        if (head.val === node) deleteNode(head);
        head = head.next;
    }
    return head;
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = node => {
    node.val = node.next.val;
    node.next = node.next.next;
};