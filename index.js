// Array containing all possible characters for the password
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// DOM elements for displaying the generated passwords
const password1El = document.getElementById("form-one");
const password2El = document.getElementById("form-two");
const resetBtn = document.getElementById("reset");

// Constant for the length of the password
const passwordLength = 15;

// Variables to temporarily store the generated passwords
let pass1 = "";
let pass2 = "";

// Function to generate random passwords
function generatePassword() {
  // Loop through the length of the password
  for (let i = 0; i < passwordLength; i++) {
    // Randomly select a character for each position in the password
    pass1 += characters[Math.floor(Math.random() * characters.length)];
    pass2 += characters[Math.floor(Math.random() * characters.length)];
  }

  // Calls a function to update the DOM elements with the generated passwords
  passFill();
}

// Function to fill the DOM elements with generated passwords and reset them
function passFill() {
  // Set the text content of the password elements with the generated passwords
  password1El.textContent = pass1;
  password2El.textContent = pass2;

  // Add the 'active' class to the password elements
  password1El.classList.add("active");
  password2El.classList.add("active");

  // Check if passwords have been generated and reset the passwords
  if (pass1 && pass2) {
    pass1 = "";
    pass2 = "";
  }
}

// Event listener for copy-on-click functionality for the first password
password1El.addEventListener("click", function () {
  // Check if the password element has any text
  if (password1El.textContent) {
    // Copy the password text to the clipboard
    navigator.clipboard.writeText(password1El.textContent);
    // Alert the user that the password has been copied
    alert("Password copied to clipboard!");
  }
});

// Event listener for copy-on-click functionality for the second password
password2El.addEventListener("click", function () {
  // Check if the password element has any text
  if (password2El.textContent) {
    // Copy the password text to the clipboard
    navigator.clipboard.writeText(password2El.textContent);
    // Alert the user that the password has been copied
    alert("Password copied to clipboard!");
  }
});

// Reset the password elements to their initial state when the reset button is clicked
resetBtn.addEventListener("click", function () {
  // Clear the text content of the password elements
  password1El.textContent = "";
  password2El.textContent = "";

  // Remove the 'active' class from the password elements
  password1El.classList.remove("active");
  password2El.classList.remove("active");
});
