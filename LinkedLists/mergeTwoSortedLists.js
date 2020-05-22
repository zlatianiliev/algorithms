/**
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the nodes of the first two lists.
 */


/**
 * Definition for singly-linked list.
 * */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
    let result = new ListNode();
    let current = result;

    while (l1 && l2) {
        if (l1.val >= l2.val) {
            current.next = l2;
            l2 = l2.next
        } else {
            current.next = l1;
            l1 = l1.next

        }

        current = current.next
    }

    current.next = l1 === null ? l2 : l1;

    return result.next
};

const test = () => {
    let l1 = new ListNode(1);
    l1.next = new ListNode(2);
    l1.next.next = new ListNode(4);

    let l2 = new ListNode(1);
    l2.next = new ListNode(3);
    l2.next.next = new ListNode(4);

    const result = mergeTwoLists(l1, l2);
    console.log(result); // 1->1->2->3->4->4
};
