function allConstruct(target, words, memo = new Map()) {
  if (!target.length) return [[]];
  if (memo.has(target)) return memo.get(target);
  const allResults = [];
  for (const word of words) {
    if (!target.startsWith(word)) continue;
    const suffix = target.slice(word.length);
    const suffixConstructResult = allConstruct(suffix, words, memo);
    const targetConstructResult = suffixConstructResult.map((res) => {
      return [word, ...res];
    });
    console.log("array length", allResults.length);
    allResults.push(...targetConstructResult);
  }
  memo.set(target, allResults);
  return allResults;
}

console.log("abcdef", allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
console.log("purple", allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee", "eeeeeee"])
); // false
console.log(
  "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee", "eeeeeee"])
); // true
