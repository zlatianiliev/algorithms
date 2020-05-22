/**
 * Reverse a singly linked list.
 */

/**
 * Definition for singly-linked list.
 **/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseLinkList = head => {
    if (!head || !head.next) return head;
    let prev = null;
    while (head !== null) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};


const test = () => {
    const linkedList = new ListNode(1);
    linkedList.next = new ListNode(2);
    linkedList.next.next = new ListNode(3);
    linkedList.next.next.next = new ListNode(4);

    const reversedLinkList = reverseLinkList(linkedList);
    console.log(reversedLinkList); // 4 -> 3 -> 2 -> 1
};