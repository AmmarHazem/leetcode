/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operators = ["+", "-", "*", "/"];
  const stack = [];
  for (const token of tokens) {
    if (operators.includes(token)) {
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      if (token === "+") {
        stack.push(operand2 + operand1);
      } else if (token === "-") {
        stack.push(operand2 - operand1);
      } else if (token === "*") {
        stack.push(operand2 * operand1);
      } else {
        stack.push(Math.trunc(operand2 / operand1));
      }
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack.pop();
};

console.log(evalRPN(["4", "13", "5", "/", "+"]));
