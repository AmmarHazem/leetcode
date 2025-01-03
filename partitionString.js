var partitionString = function (s) {
  const subStrings = [];
  for (let i = 0; i < s.length; i += 1) {
    const currentSubString = subStrings[subStrings.length - 1];
    const currentChar = s[i];
    if (currentSubString?.length && currentSubString.includes(currentChar)) {
      subStrings.push(currentChar);
    } else {
      subStrings[Math.max(subStrings.length - 1, 0)] = (currentSubString ?? "") + currentChar;
    }
  }
  return subStrings.length;
};
