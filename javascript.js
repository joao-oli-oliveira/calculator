// Operation functions
const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  const sumOfAllNums = arr.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  return sumOfAllNums;
};

const multiply = function (arr) {
  return arr.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (n) {
  if (n === 0) {
    return 1;
  }
  if (n > 0) {
    return n * factorial(n - 1);
  }
};
