function howSumTabulation(target, numbers) {
  const table = Array(target + 1).fill(null);
  table[0] = [];
  for (const [i, arr] of table.entries()) {
    if (!arr) continue;
    for (const num of numbers) {
      if (i + num > table.length - 1) continue;
      const sumArray = [...arr, num];
      if (!table[i + num] || table[i + num].length > sumArray.length) {
        table[i + num] = sumArray;
      }
    }
  }
  return table[target];
}

// console.log(howSumTabulation(7, [2, 3])); // true
// console.log(howSumTabulation(7, [5, 3, 4, 7])); // true
// console.log(howSumTabulation(7, [2, 4])); // false
// console.log(howSumTabulation(8, [2, 3, 5])); // true
// console.log(howSumTabulation(8, [7, 14])); // false
console.log(howSumTabulation(8, [2, 3, 5])); // true
