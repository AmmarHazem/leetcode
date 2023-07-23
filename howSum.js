function howSum(targetSum, numbers, memo = new Map()) {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  if (memo.has(targetSum)) return memo.get(targetSum);
  const targetFromNumbersArray = numbers.find((num) => num === targetSum);
  if (targetFromNumbersArray) {
    const results = [targetFromNumbersArray];
    memo.set(targetFromNumbersArray, results);
    return results;
  }
  for (const num of numbers) {
    const remainder = targetSum - num;
    const resultsArray = howSum(remainder, numbers, memo);
    if (resultsArray) {
      resultsArray.push(num);
      memo.set(remainder, resultsArray);
      return resultsArray;
    }
  }
  memo.set(targetSum, null);
  return null;
}

// console.log(howSum(1, [5, 3, 4, 2]));
// console.log(howSum(6, [5, 3, 4, 2]));
// console.log(howSum(7, [5, 3, 4, 2]));
// console.log(howSum(8, [3, 2, 5]));
// console.log(howSum(9, [5, 3, 4, 2]));
// console.log(howSum(10, [5, 3, 4, 2]));
console.log(howSum(300, [7, 14]));
console.log(howSum(301, [7, 14]));
