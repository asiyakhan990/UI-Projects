let listButtons = document.querySelectorAll(".buttons button");
let lastReturn = document.querySelector(".screen .last");
let newReturn = document.querySelector(".screen .new");

let firstNumber = null;
let newNumber = null;
let calculator = "+";

listButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerText;
    switch (value) {
      case (value.match(/[0-9]/) || {}).input:
        // add number in lastNumber
        newNumber = newNumber !== null ? newNumber + value : value;
        break;
      case ".":
        newNumber = newNumber !== null ? newNumber + value : "0.";
        break;
      case "±":
        newNumber = -1 * newNumber;
        break;
      case "%":
        newNumber = 0.01 * newNumber;
        break;
      case (value.match(/[\+|\-|\x|\÷]/) || {}).input:
        if (newNumber) {
          if (firstNumber) {
            applyCalculator();
          }
          calculator = value;
          firstNumber = newNumber;
          newNumber = null;
        }
        break;
      case "=":
        applyCalculator();
        firstNumber = null;
        break;
      case "AC":
        firstNumber = null;
        newNumber = null;
        calculator = "+";
        break;
    }
    reloadScreen();
  });
});
const applyCalculator = () => {
  switch (calculator) {
    case "+":
      newNumber = Number(firstNumber) + Number(newNumber);
      break;
    case "-":
      newNumber = Number(firstNumber) - Number(newNumber);
      break;
    case "x":
      newNumber = Number(firstNumber) * Number(newNumber);
      break;
    case "÷":
      newNumber = (Number(firstNumber) / Number(newNumber)).toFixed(5);
      break;
  }
};
const reloadScreen = () => {
  lastReturn.innerText =
    firstNumber !== null ? firstNumber + "" + calculator : "";

  newReturn.innerText = newNumber !== null ? newNumber : "";
};

const toggle = document.getElementById("theme-toggle");
const body = document.body;

// Default theme
body.setAttribute("data-theme", "dark");

toggle.addEventListener("click", () => {
  const isDark = body.getAttribute("data-theme") === "dark";
  body.setAttribute("data-theme", isDark ? "light" : "dark");
  toggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});
