function canSumTabulation(target, numbers) {
  const table = Array(target + 1).fill(false);
  table[0] = true;
  for (const [i, value] of table.entries()) {
    if (!value) continue;
    for (const num of numbers) {
      if (i + num > table.length - 1) continue;
      table[i + num] = true;
    }
  }
  return table[target];
}

console.log(canSumTabulation(7, [2, 3])); // true
console.log(canSumTabulation(7, [5, 3, 4, 7])); // true
console.log(canSumTabulation(7, [2, 4])); // false
console.log(canSumTabulation(8, [2, 3, 5])); // true
console.log(canSumTabulation(8, [7, 14])); // false
