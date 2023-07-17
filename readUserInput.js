const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function handlePromptAnswer(answer) {
  console.log("--- answer", answer);
  readline.question("Enter a question:", handlePromptAnswer);
}

function main() {
  readline.question("Enter a question:", handlePromptAnswer);
}

main();
