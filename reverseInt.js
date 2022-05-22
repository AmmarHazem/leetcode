const maxValue = Math.pow(2, 31) - 1;
const minValue = Math.pow(-2, 31);

var reverse = function (x) {
  const isNegative = x < 0;
  let value = Math.abs(x);
  let result = 0;
  while (value > 0) {
    const currentDigit = value % 10;
    result = result * 10 + currentDigit;
    value = Math.floor(value / 10);
  }
  if (isNegative) {
    result = -result;
  }
  if (result > maxValue || result < minValue) {
    return 0;
  }
  return result;
};

// var reverse = function (x) {
//   const isNegative = x < 0;
//   const strArray = String(Math.abs(x)).split("");
//   const reversedStrArray = strArray.map(() => "");
//   for (i = 0; i < reversedStrArray.length; i += 1) {
//     reversedStrArray[i] = strArray[strArray.length - 1 - i];
//   }
//   const value = Number(`${isNegative ? "-" : ""}${reversedStrArray.join("")}`);
//   if (value > maxValue || value < minValue) {
//     return 0;
//   }
//   return value;
// };

// console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(1534236469));

// len = 4
// i => 0 => 3
// i => 1 => 2
// i => 2 => 1
// i => 3 => 0
