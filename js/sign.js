document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 123 && event.ctrlKey && event.shiftKey) {
    event.preventDefault();
  }
});

// Main Sign Form Validation
const nameField = document.getElementById("email");
const passwordField = document.getElementById("password");
const submitButton = document.getElementById("submit");

const validUsers = [
  { name: "مسئول", password: "12345" },
  { name: "مدير", password: "54321" },
];

function validateForm() {
  const name = nameField.value;
  const password = passwordField.value;

  let isUserValid = false;
  for (const user of validUsers) {
    if (user.name === name && user.password === password) {
      isUserValid = true;
      break;
    }
  }

  if (isUserValid) {
    submitButton.disabled = false;
    submitButton.classList.remove("valid");
  } else {
    submitButton.disabled = true;
    submitButton.classList.add("valid");
  }
}

nameField.addEventListener("keyup", validateForm);
passwordField.addEventListener("keyup", validateForm);
