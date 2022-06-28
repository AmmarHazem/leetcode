const parenthesesMap = new Map();
parenthesesMap.set("(", ")");
parenthesesMap.set("[", "]");
parenthesesMap.set("{", "}");

var isValid = function (s) {
  const parentheses = [];
  for (const char of s) {
    const isOpenParenthe = char === "(" || char === "[" || char === "{";
    if (isOpenParenthe) {
      parentheses.push(char);
    } else if (parentheses.length === 0) {
      return false;
    } else {
      const lastParenthe = parentheses[parentheses.length - 1];
      if (parenthesesMap.get(lastParenthe) === char) {
        parentheses.pop();
      } else {
        return false;
      }
    }
  }
  return parentheses.length === 0;
};

// console.log(isValid("([{]})")); // false
// console.log(isValid("({[]})")); // true
// console.log(isValid("()")); // true
// console.log(isValid("()[]{}")); // true
// console.log(isValid("(]")); // false
console.log(isValid("(])")); // false
