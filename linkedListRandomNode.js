class Solution {
  constructor(head) {
    this.head = head;
  }

  getRandom() {
    let currentIndex = 0;
    let currentNode = this.head;
    let result = null;
    while (currentNode) {
      if (this.getRandomInt(currentIndex + 1) === 0) {
        result = currentNode;
      }
      currentIndex += 1;
      currentNode = currentNode.next;
    }
    return result.val;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}
