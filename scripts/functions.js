// function addTwoNums() {
//   console.log(5 + 2);
// }

// addTwoNums();

// const btn = document.querySelector("button");
// const btn2 = document.getElementById("cheese");

// btn.addEventListener("click", addTwoNums);

// // console.log(addTwoNums());

// const subTwoNums = function () {
//   return 5 - 2;
// };

// // console.log(subTwoNums());

// const x3Nums = () => {
//   return 1 * 2 * 5;
// };

// // console.log(x3Nums());

function calculate(a, b, c) {
  switch (b) {
    case "+":
      console.log(a + c);
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
