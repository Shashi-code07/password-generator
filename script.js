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
    let name = document.getElementById("name").value.trim();
    let length = parseInt(lengthInput.value);

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    let characters = "";

    // Name ko checkbox ke hisaab se convert karo
    if (uppercase.checked && !lowercase.checked) {
        name = name.toUpperCase();
    } else if (lowercase.checked && !uppercase.checked) {
        name = name.toLowerCase();
    }

    if (uppercase.checked) characters += upperChars;
    if (lowercase.checked) characters += lowerChars;
    if (numbers.checked) characters += numberChars;
    if (symbols.checked) characters += symbolChars;

    if (characters === "") {
        alert("Please select at least one option!");
        return;
    }

    if (length < name.length) {
        alert("Password length should be greater than the name length.");
        return;
    }

    let password = name;

    while (password.length < length) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    passwordBox.value = password;
}
function copyPassword() {
    if (passwordBox.value === "") {
        alert("Generate a password first!");
        return;
    }

    navigator.clipboard.writeText(passwordBox.value);
    alert("Password copied!");
}
