function canConstruct(target, wordBank, memo = new Map()) {
  if (memo.has(target)) return memo.get(target);
  if (!target.length) {
    return true;
  }
  if (!wordBank.some((word) => target.startsWith(word))) {
    return false;
  }
  for (const word of wordBank) {
    if (!target.startsWith(word)) continue;
    const suffixWord = target.substr(word.length);
    if (canConstruct(suffixWord, wordBank, memo)) {
      memo.set(target, true);
      return true;
    }
  }
  memo.set(target, false);
  return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee", "eeeeeee"]));
