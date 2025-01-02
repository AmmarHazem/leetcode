var kthFactor = function (n, k) {
  const factors = [];
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  if (factors[k - 1]) {
    return factors[k - 1];
  }
  return -1;
};
