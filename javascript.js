let setOperator = null;
let setResult = 0;
let setPreviousResult = "";
let setFirstNumber = "";
let setSecondNumber = "";
let displayScreen = "";

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

document
  .querySelectorAll("[data-type='number'], [data-type='decimal']")
  .forEach((button) =>
    button.addEventListener("click", function () {
      let { type } = button.dataset;
      if (type === "decimal") {
        if (setSecondNumber === "" && setOperator !== null) {
          setSecondNumber = "0";
        } // Case for when second number is blank
        if (setFirstNumber === "") {
          setFirstNumber = "0";
        } // Case for when first number is blank
      }
      if (setOperator === null) {
        if (type === "decimal" && !setFirstNumber.includes(".")) {
          setFirstNumber += button.textContent;
        }
        if (type !== "decimal") {
          setFirstNumber += button.textContent;
        }
      }
      if (setOperator !== null) {
        if (type === "decimal" && !setSecondNumber.includes(".")) {
          setSecondNumber += button.textContent;
        }
        if (type !== "decimal") {
          setSecondNumber += button.textContent;
        }
      }
    })
  );

document.querySelectorAll("[data-type='operator']").forEach((button) =>
  button.addEventListener("click", function () {
    setOperator = button.dataset.operator;
    console.log(setOperator);
  })
);

document
  .querySelectorAll("[data-type='equal']")[0]
  .addEventListener("click", () => {
    setResult = opFunctions[setOperator](+setFirstNumber, +setSecondNumber);
    displayScreen = setResult;
    console.log(setResult);
  });
