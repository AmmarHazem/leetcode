function gridTravelerTabular(m, n) {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;
  for (let i = 0; i <= m; i += 1) {
    for (let j = 0; j <= n; j += 1) {
      const current = table[i][j];
      if (j + 1 <= n) {
        table[i][j + 1] += current;
      }
      if (i + 1 <= m) {
        table[i + 1][j] += current;
      }
    }
  }
  return table[m][n];
}

console.log(gridTravelerTabular(1, 1));
console.log(gridTravelerTabular(2, 3));
console.log(gridTravelerTabular(2, 3));
console.log(gridTravelerTabular(3, 3));
console.log(gridTravelerTabular(18, 18));
