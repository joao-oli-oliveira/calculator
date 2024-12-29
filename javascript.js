let setOperator = null;
let setResult = 0;
let setPreviousResult = 0;
let setFirstNumber = 0;
let setSecondNumber = 0;

document.querySelectorAll("button").forEach((btn) =>
  btn.addEventListener("click", function (e) {
    console.log(btn.id);
  })
);

/* 




*/

function operation(firstNumber, secondNumber, OpFunction) {
  if (setPreviousResult === 0) {
    setResult = OpFunction(firstNumber, secondNumber);
    setPreviousResult = setResult;
    return setResult;
  }
  return OpFunction(setPreviousResult, secondNumber);
}

const opFunctions = {
  add: function (x, y) {
    return x + y;
  },

  // subtract: function (x, y) {
  //   return x - y;
  // },
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

console.log(operation(setFirstNumber, setSecondNumber, opFunctions.add));
