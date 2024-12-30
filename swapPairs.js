var swapPairs = function (head) {
  const dummy = new ListNode(-1, head);
  let prev = dummy;
  while (prev.next && prev.next?.next) {
    let first = prev.next;
    let second = prev.next.next;
    first.next = second.next;
    second.next = first;
    prev.next = second;
    prev = first;
    console.log();
  }
  return dummy.next;
};

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next ?? null;
  }
}

function getArrayFromList(head) {
  const list = [];
  let current = head;
  while (current) {
    list.push(current.val);
    current = current.next;
  }
  return list;
}

function getListFromArray(arr) {
  if (!arr.length) return null;
  const dummy = new ListNode();
  let current = dummy;
  for (let i of arr) {
    current.next = new ListNode(i);
    current = current.next;
  }
  return dummy.next;
}

const list = getListFromArray([1, 2, 3, 4]);
console.log("list =>", list);
const res = getArrayFromList(swapPairs(list));
console.log("== result =>", res);
