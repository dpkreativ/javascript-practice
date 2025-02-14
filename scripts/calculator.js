/**
 * Requirements:
 * - Get user input for first number
 * - Get user input for arithmetic operator
 * - Get user input for second number
 * - Run the calculation and display in your browser console
 * - Display the result in your browser console
 */

const firstNum = parseInt(
  prompt("Put the first number here. (It should be digits only, no letters):")
);

const chosenOperator = prompt("Put in the operator you want to use here:");

const secondNum = parseInt(prompt("Put in the second number to calculate:"));

const display = document.querySelector("h1");

calculate(firstNum, chosenOperator, secondNum);

function calculate(a, b, c) {
  switch (b) {
    case "+":
      display.textContent = a + c;
      break;
    case "-":
      console.log(a - c);
      break;
    case "*":
      console.log(a * c);
      break;
    case "/":
      console.log(a / c);
      break;
    case "%":
      console.log(a % c);
      break;
    default:
      console.log(`see the value you put in your operator input: ${b}`);
  }
}

// function calculate(a, b, c) {
//   if (b === "+") {
//     console.log(a + c);
//   } else if (b === "-") {
//     console.log(a - c);
//   } else if (b === "*") {
//     console.log(a * c);
//   } else if (b === "/") {
//     console.log(a / c);
//   } else if (b === "%") {
//     console.log(a % c);
//   } else {
//     console.log(`See the value you put in your operator input: ${b}`);
//   }
// }
