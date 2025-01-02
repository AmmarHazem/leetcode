var mergeTwoLists = function (list1, list2) {
  const newListHead = new ListNode();
  let current1 = list1;
  let current2 = list2;
  let newListCurrent = newListHead;
  while (current1 && current2) {
    if (current1.val > current2.val) {
      newListCurrent.next = current2;
      current2 = current2.next;
    } else {
      newListCurrent.next = current1;
      current1 = current1.next;
    }
    newListCurrent = newListCurrent.next;
  }
  while (current1) {
    newListCurrent.next = current1;
    current1 = current1.next;
  }
  while (current2) {
    newListCurrent.next = current2;
    current2 = current2.next;
  }
  return newListHead.next;
};

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next ?? null;
  }
}

function getArrayFromList(head) {
  const value = [];
  let current = head;
  while (current) {
    value.push(current.val);
    current = current.next;
  }
  return value;
}

function getListFromArray(arr) {
  const prevListHead = new ListNode();
  let current = prevListHead;
  for (const i of arr) {
    current.next = new ListNode(i);
    current = current.next;
  }
  return prevListHead.next;
}

console.log("[1, 2, 3, 4]", mergeTwoLists(getListFromArray([-9, 3]), getListFromArray([5, 7])));
console.log();
