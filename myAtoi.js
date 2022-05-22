const digitsStrMap = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

const maxNumber = Math.pow(2, 31) - 1;
const minNumber = -Math.pow(2, 31);

const max = function (x, y) {
  if (x > y) return x;
  return y;
};

const min = function (x, y) {
  if (x < y) return x;
  return y;
};

var myAtoi = function (s) {
  let sawFirstDigit = false;
  let isPositive = true;
  let alreadysawSignChar = false;
  let n = 0;
  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    if (!digitsStrMap[char] && char !== "0" && sawFirstDigit) {
      break;
    } else if (!digitsStrMap[char] && char !== "0" && alreadysawSignChar) {
      return 0;
    } else if (char === " ") {
      continue;
    } else if (char === "+") {
      if (alreadysawSignChar || sawFirstDigit) {
        return 0;
      }
      alreadysawSignChar = true;
      continue;
    } else if (char === "-") {
      if (alreadysawSignChar || sawFirstDigit) {
        return 0;
      }
      alreadysawSignChar = true;
      isPositive = false;
    } else if (digitsStrMap[char] || char === "0") {
      n = n * 10 + digitsStrMap[char];
      sawFirstDigit = true;
    } else if (sawFirstDigit || !digitsStrMap[char]) {
      break;
    }
  }
  if (!isPositive) {
    return max(minNumber, -n);
  }
  return min(maxNumber, n);
};

// console.log(myAtoi("0042"));
// console.log(myAtoi("   -42"));
// console.log(myAtoi("4193     with words"));
// console.log(myAtoi("words and 987"));
// console.log(myAtoi("+1"));
// console.log(myAtoi("+-12"));
// console.log(myAtoi("21474836460"));
// console.log(myAtoi("00000-42a1234"));
// console.log(myAtoi("   +0 123"));
console.log(myAtoi("  +  413"));
