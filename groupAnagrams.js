/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const groupedStrs = new Map();
  for (const str of strs) {
    const sortedStr = Array.from(str).sort().join("");
    const strGroup = groupedStrs.get(sortedStr) || [];
    strGroup.push(str);
    groupedStrs.set(sortedStr, strGroup);
  }
  return Array.from(groupedStrs.values());
};
