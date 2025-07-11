const passwordInput = document.getElementById("password-input");
const generateBtn = document.querySelector(".btn");
const copyButton = document.querySelector(".copy-btn");
const messageBox = document.getElementById("message-box");

const lengthSlider = document.getElementById("length-slider");
const lengthValue = document.getElementById("length-value");

const lowercaseCheckbox = document.getElementById("lowercase");
const uppercaseCheckbox = document.getElementById("uppercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "@#*";

  let availableChars = "";
  let password = "";

  if (uppercaseCheckbox.checked) {
    availableChars += upperCase;
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
  }

  if (lowercaseCheckbox.checked) {
    availableChars += lowerCase;
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }

  if (numbersCheckbox.checked) {
    availableChars += numbers;
    password += numbers[Math.floor(Math.random() * numbers.length)];
  }

  if (symbolsCheckbox.checked) {
    availableChars += symbols;
    password += symbols[Math.floor(Math.random() * symbols.length)];
  }

  while (password.length < lengthSlider.value) {
    password +=
      availableChars[Math.floor(Math.random() * availableChars.length)];
  }

  passwordInput.value = password.slice(0, lengthSlider.value);
}

generateBtn.addEventListener("click", () => {
  generatePassword();
  messageBox.style.scale = "0";
});

copyButton.addEventListener("click", () => {
  passwordInput.select();
  document.execCommand("copy");
  messageBox.style.scale = "1";
});
