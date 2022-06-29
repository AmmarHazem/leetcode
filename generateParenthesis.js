var generateParenthesis = function (n) {
  if (n === 1) {
    return ["()"];
  }
  const A = generateParenthesis(n - 1);
  const B = [];
  for (const a of A) {
    for (let i = 0; i <= A.length + 1; i += 1) {
      B.push(`${a.substring(0, i)}()${a.substring(i)}`);
    }
    B.push(`(${a})`);
  }
  return Array.from(new Set(B));
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
