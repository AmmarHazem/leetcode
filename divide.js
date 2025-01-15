/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let res = [];
  let current = 0;
  while (current < Math.abs(dividend)) {
    current += Math.abs(divisor);
    res.push(current);
  }
  const isBothNegative = dividend < 0 && divisor < 0;
  const isOneOperandNegative = isBothNegative ? false : dividend < 0 || divisor < 0;
  const sum = res.reduce((x, y) => x + y, 0);
  if (sum === Math.abs(dividend)) {
    if (isOneOperandNegative) {
      return -res.length;
    }
    return res.length;
  }
  if (isOneOperandNegative) {
    return -(res.length - 1);
  }
  return res.length - 1;
};

const res = divide(-2147483648, -1);
console.log(res);
