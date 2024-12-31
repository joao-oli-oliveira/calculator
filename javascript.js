let setOperator = null;
let setResult = 0;
let setPreviousResult = "";
let setFirstNumber = "";
let setSecondNumber = "";
let displayScreen = "";

// function operation(firstNumber, secondNumber, opFunction) {
//   if (setPreviousResult === 0) {
//     setResult = opFunction(firstNumber, secondNumber);
//     setPreviousResult = setResult;
//     return setResult;
//   }
//   console.log(setResult);

//   return opFunction(setPreviousResult, secondNumber);
// }

const opFunctions = {
  add: function (x, y) {
    return x + y;
  },

  subtract: function (x, y) {
    return x - y;
  },
  // sum: function (arr) {
  //   const sumOfAllNums = arr.reduce((total, currentItem) => {
  //     return total + currentItem;
  //   }, 0);
  //   return sumOfAllNums;
  // },

  // multiply: function (arr) {
  //   return arr.reduce((total, currentItem) => {
  //     return total * currentItem;
  //   }, 1);
  // },

  // power: function (x, y) {
  //   return x ** y;
  // },

  // factorial: function (n) {
  //   if (n === 0) {
  //     return 1;
  //   }
  //   if (n > 0) {
  //     return n * this.factorial(n - 1);
  //   }
  // },
};

document.querySelectorAll("button").forEach((button) =>
  button.addEventListener("click", function () {
    let { type } = button.dataset;
    if (type === "number" || type === "decimal") {
      if (
        type === "decimal" &&
        setSecondNumber === "" &&
        setFirstNumber !== ""
      ) {
        setSecondNumber = "0";
      } // Case for when second number is blank
      if (type === "decimal" && setFirstNumber === "") {
        setFirstNumber = "0";
      } // Case for when first number is blank

      if (setOperator === null) {
        setFirstNumber += button.textContent;
      } else {
        setSecondNumber += button.textContent;
      }
    }
    if (type === "operator") {
      setOperator = button.dataset.operator;
    }
    if (type === "equal") {
      setResult = opFunctions[setOperator](+setFirstNumber, +setSecondNumber);
      displayScreen = setResult;
    }

    console.log(setResult);
    console.log(setFirstNumber);
    console.log(setOperator);
    console.log(setSecondNumber);
  })
);
