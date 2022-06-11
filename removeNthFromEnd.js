// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeNthFromEnd = function (head, n) {
  let length = 1;
  let currentNode = head.next;
  while (currentNode != null) {
    currentNode = currentNode.next;
    length += 1;
  }
  if (length == 1) {
    return head.next;
  }
  currentNode = head;
  let currentPosition = 1;
  let prevNode = null;
  const targetPosition = length + 1 - n;
  if (targetPosition === 1) {
    return head.next;
  }
  while (currentPosition < targetPosition) {
    prevNode = currentNode;
    currentNode = currentNode.next;
    currentPosition += 1;
  }
  prevNode.next = currentNode.next;
  return head;
};

const node = new ListNode(1, null);

console.log(node.val, node.next);
