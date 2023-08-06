function bestSum(targetSum, numbers, memo = new Map()) {
  if (targetSum === 0) {
    const result = [];
    return result;
  }
  if (targetSum < 0) {
    const result = null;
    return result;
  }
  if (memo.has(targetSum)) return memo.get(targetSum);
  let shortestResult = null;
  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = bestSum(remainder, numbers, memo);
    if (remainderResult) {
      // remainderResult.push(num);
      if (shortestResult === null || remainderResult.length < shortestResult.length) {
        shortestResult = [...remainderResult, num];
      }
    }
  }
  memo.set(targetSum, shortestResult);
  return shortestResult;
}

// console.log(bestSum(1, [5, 3, 4, 2]));
// console.log(bestSum(6, [5, 3, 4, 2]));
// console.log(bestSum(7, [5, 3, 4, 2]));
// console.log(bestSum(8, [3, 2, 5]));
// console.log(bestSum(9, [5, 3, 8, 2, 4]));
// console.log(bestSum(7, [5, 3, 4, 7]));
// console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
// console.log(bestSum(300, [7, 14]));
// console.log(bestSum(301, [7, 14]));
