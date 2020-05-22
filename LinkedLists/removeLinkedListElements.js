/**
 * Remove all elements from a linked list of integers that have value val.
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
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
    if (!head) return head;

    let result = head;
    let curr = result;

    while (curr && curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return result;
};

const test = () => {
    const linkedList = new ListNode(1);
    linkedList.next = new ListNode(7);
    linkedList.next.next = new ListNode(5);
    linkedList.next.next.next = new ListNode(4);

    const modifiedLinkList = removeElements(linkedList, 5);
    console.log(modifiedLinkList); // 1 -> 7 -> 4
};
