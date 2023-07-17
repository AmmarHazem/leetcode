function fib(n, memo = new Map()) {
  if (memo.get(n)) return memo.get(n);
  if (n <= 2) return 1;
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo.set(n, res);
  return res;
}

// console.log(fib(6));
// console.log(fib(7));
console.log(fib(50));
