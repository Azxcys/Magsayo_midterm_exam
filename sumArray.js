const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

rl.question("Enter a list of numbers separated by commas: ", (input) => {
  const numberArray = input.split(",").map(Number);
  console.log("Sum:", sumArray(numberArray));
  rl.close();
});
