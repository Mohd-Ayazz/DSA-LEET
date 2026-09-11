/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // Create a dummy node to act as the starting point of the result list
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    // Loop through both lists until both are fully traversed and no carry remains
    while (l1 !== null || l2 !== null || carry > 0) {
        let sum = carry;

        // Add the value from the first list if it exists
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        // Add the value from the second list if it exists
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        // Calculate the new carry (either 0 or 1)
        carry = Math.floor(sum / 10);

        // Create a new node with the single-digit remainder and link it
        current.next = new ListNode(sum % 10);
        
        // Move the pointer forward
        current = current.next;
    }

    // The actual result starts from the node after the dummy head
    return dummyHead.next;
};
