/**
 * Reverse a singly linked list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = head => {
    if (!head || !head.next) return head;
    let ll = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return ll;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseListIterative = head => {
    if (!head || !head.next) return head;
    let prev = null;
    let next;
    while (head !== null) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};
