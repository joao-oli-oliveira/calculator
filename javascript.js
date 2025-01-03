let setOperator = null;
let setResult = "";
let setPreviousResult = "";
let setFirstNumber = "";
let setSecondNumber = "";
let displayScreen = setFirstNumber + " " + setOperator + " " + setResult;
const screen = document.getElementById("screen");

const opFunctions = {
  add: function (x, y) {
    let arr = `${x + y}`.split(".");
    if (arr[1] > 0) {
      return (x + y).toFixed(2);
    }
    return x + y;
  },

  subtract: function (x, y) {
    let arr = `${x - y}`.split(".");
    if (arr[1] > 0) {
      return (x - y).toFixed(2);
    }
    return x - y;
  },

  multiply: function (x, y) {
    let arr = `${x * y}`.split(".");
    if (arr[1] > 0) {
      return (x * y).toFixed(2);
    }
    return x * y;
  },

  power: function (x, y) {
    let arr = `${x ** y}`.split(".");
    if (arr[1] > 0) {
      return (x ** y).toFixed(2);
    }
    return x ** y;
  },

  division: function (x, y) {
    let arr = `${x / y}`.split(".");
    if (y === 0) {
      return "ERROR";
    }
    if (arr[1] > 0) {
      return (x / y).toFixed(2);
    }
    return x / y;
  },
};

document
  .querySelectorAll("[data-type='number'], [data-type='decimal']")
  .forEach((button) =>
    button.addEventListener("click", function () {
      let { type } = button.dataset;
      let buttonContent = button.textContent;
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
          setFirstNumber += buttonContent;
          screen.textContent = setFirstNumber;
        }
        if (type === "number") {
          setFirstNumber += buttonContent;
          screen.textContent = setFirstNumber;
        }
      }
      if (setOperator !== null) {
        if (type === "decimal" && !setSecondNumber.includes(".")) {
          setSecondNumber += buttonContent;
          screen.textContent = setSecondNumber;
        }
        if (type === "number") {
          if (setResult === "") {
            setSecondNumber += buttonContent;
            screen.textContent = setSecondNumber;
          }
          if (setResult !== "") {
            setFirstNumber = "";
            setOperator = null;
            setSecondNumber = "";
            setResult = "";
            setFirstNumber += buttonContent;
            screen.textContent = setFirstNumber;
          }
        }
      }
    })
  );

document.querySelectorAll("[data-type='operator']").forEach((button) =>
  button.addEventListener("click", function () {
    setOperator = button.dataset.operator;
    screen.textContent = button.textContent;
  })
);

document
  .querySelectorAll("[data-type='equal']")[0]
  .addEventListener("click", () => {
    if (
      setOperator !== "" &&
      setFirstNumber !== "" &&
      setSecondNumber !== "" &&
      setResult === ""
    ) {
      setResult = opFunctions[setOperator](+setFirstNumber, +setSecondNumber);
      displayScreen = setResult;
      setFirstNumber = "";
      setOperator = null;
      // setSecondNumber = "";
      screen.textContent = setResult;
    }
  });

document
  .querySelectorAll("[data-type='clear']")[0]
  .addEventListener("click", () => {
    setFirstNumber = "";
    setOperator = null;
    setSecondNumber = "";
    setResult = "";
    screen.textContent = "";
  });
document
  .querySelectorAll("[data-type='backspace']")[0]
  .addEventListener("click", () => {
    if (setOperator === null) {
      setFirstNumber = setFirstNumber.slice(0, -1);
      console.log(setFirstNumber);
    }
    if (setOperator !== null && setResult === "") {
      setSecondNumber = setSecondNumber.slice(0, -1);
      console.log(setSecondNumber);
    }
  });
