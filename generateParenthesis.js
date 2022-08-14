var generatePairs = function (n, d, comb, combs) {
  if (d < 0 || d > n) return;
  if (n === 0 && d === 0) {
    combs.push(comb.join(""));
  } else {
    comb.push("(");
    generatePairs(n - 1, d + 1, comb, combs);
    comb.pop();
    comb.push(")");
    generatePairs(n - 1, d - 1, comb, combs);
    comb.pop();
  }
};

var generateParenthesis = function (n) {
  const combs = [];
  generatePairs(n * 2, 0, [], combs);
  return combs;
};

// var generateParenthesis = function (n) {
//   if (n === 1) {
//     return ["()"];
//   }
//   const A = generateParenthesis(n - 1);
//   const B = [];
//   for (const a of A) {
//     for (let i = 0; i <= A.length + 1; i += 1) {
//       B.push(`${a.substring(0, i)}()${a.substring(i)}`);
//     }
//     B.push(`(${a})`);
//   }
//   return Array.from(new Set(B));
// };

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
