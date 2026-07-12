const passwordBox = document.getElementById("password");
const lengthInput = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}<>?/";

function generatePassword() {
  let characters = "";

  if (uppercase.checked) characters += upperChars;
  if (lowercase.checked) characters += lowerChars;
  if (numbers.checked) characters += numberChars;
  if (symbols.checked) characters += symbolChars;

  if (characters === "") {
    alert("Please select at least one option!");
    return;
  }

  let password = "";
  const length = parseInt(lengthInput.value);

  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  passwordBox.value = password;
}

function copyPassword() {
  if (passwordBox.value === "") return;

  navigator.clipboard.writeText(passwordBox.value);
  alert("Password copied!");
}