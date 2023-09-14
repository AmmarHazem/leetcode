function countConstruct(target, words, memo = new Map()) {
  if (!target.length) return 1;
  if (memo.has(target)) return memo.get(target);
  const canConstructSubStringsResults = words.map((word) => {
    if (!target.startsWith(word)) {
      return 0;
    }
    const suffix = target.substr(word.length);
    return countConstruct(suffix, words, memo);
  });
  //   console.log("canConstructSubStringsResults", canConstructSubStringsResults);
  const result = canConstructSubStringsResults.reduce((x, y) => x + y, 0);
  memo.set(target, result);
  return result;
}

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "cdef"])); // true
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // true
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee", "eeeeeee"])); // false
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee", "eeeeeee"])); // true
