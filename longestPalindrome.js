var longestPalindrome = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i += 1) {
    let left = i;
    let right = i;
    result = expandStrFromCenter({ s, left, right, result });
    left = i;
    right = i + 1;
    result = expandStrFromCenter({ s, left, right, result });
    console.log();
  }
  return result;
};

var expandStrFromCenter = function ({ s, left, right, result }) {
  let currentResult = result;
  //   const isPalindrome = ;
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    const substring = s.substring(left, right + 1);
    if (substring.length > currentResult.length) {
      currentResult = substring;
    }
    left -= 1;
    right += 1;
  }
  return currentResult;
};

// var longestPalindrome = function (s) {
//   return _longestPalindrome(s, 0, s.length - 1);
// };

// var _longestPalindrome = function (s, startIndex, endIndex) {
//   const len = s.length;
//   if (len < 2) {
//     return s;
//   }
//   const str = s.toLowerCase();
//   let substring = str.substring(startIndex, endIndex + 1);
//   if (checkPalindrome(substring)) {
//     return s.substring(startIndex, endIndex + 1);
//   } else if (endIndex < len - 1) {
//     let newStartIndex = startIndex;
//     let newEndIndex = endIndex;
//     while (newEndIndex < len) {
//       newStartIndex += 1;
//       newEndIndex += 1;
//       substring = str.substring(newStartIndex, newEndIndex + 1);
//       if (checkPalindrome(substring)) {
//         return s.substring(newStartIndex, newEndIndex + 1);
//       }
//     }
//   }
//   return _longestPalindrome(s, 0, endIndex - 1);
// };

var checkPalindrome = function (s) {
  const str = s.toLowerCase();
  const length = str.length;
  if (length < 2) {
    return true;
  }
  const firstCharEqualsLastChar = str[0] === str[length - 1];
  return (
    firstCharEqualsLastChar && checkPalindrome(str.substring(1, length - 1))
  );
};

console.log(
  longestPalindrome(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  )
);
// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("a"));
// console.log(longestPalindrome(""));

// console.log(checkPalindrome("iTopiNonAvevanoNipoti"));
// console.log(checkPalindrome("iGattiNonAvevanoCugini"));
// console.log(checkPalindrome("aba"));
// console.log(checkPalindrome("bab"));
// console.log(checkPalindrome("ss"));
