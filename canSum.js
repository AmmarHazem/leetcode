function canSum(targetSum, numbers, memo = new Map()) {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  if (memo.has(targetSum)) return memo.get(targetSum);
  for (const num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo)) {
      memo.set(targetSum, true);
      return true;
    }
  }
  memo.set(targetSum, false);
  return false;
}

// console.log(canSum(7, [2, 3]));
// console.log(canSum(7, [5, 3, 4, 7]));
// console.log(canSum(7, [2, 4]));
// console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
