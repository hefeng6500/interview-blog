/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const getSize = (head) => {
    let size = 0;
    const helper = (node) => {
      if (node.next) {
        size++;
        return helper(node.next);
      } else {
        return size;
      }
    };

    if (head === undefined) {
      return size;
    } else {
      return helper(head);
    }
  };

  let current = head;
  let index = 0;
  const targetIndex = getSize() - n;

  while (index < targetIndex) {
    current = current.next;
  }

  current.val = current.next.val;
  current.next = current.next.next;

  return head;
};

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2));
