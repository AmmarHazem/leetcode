// O(mn) where m is the length of the longest common prefix
// n is the length of the input array
var longestCommonPrefix = function (strs) {
  let longestPrefixLength = 0;
  while (true) {
    const charsSet = new Set();
    for (const str of strs) {
      if (longestPrefixLength >= str.length) {
        return str;
      } else {
        charsSet.add(str[longestPrefixLength]);
      }
    }
    if (charsSet.size === 1) {
      longestPrefixLength += 1;
    } else {
      break;
    }
  }
  return strs[0].substring(0, longestPrefixLength);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["ab", "a"]));
