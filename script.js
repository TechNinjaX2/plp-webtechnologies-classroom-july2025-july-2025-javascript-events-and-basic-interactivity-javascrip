const hoverBtn = document.getElementById("hoverBtn");
const hoverMsg = document.getElementById("hoverMsg");

hoverBtn.addEventListener("mouseover", () => {
  hoverMsg.textContent = "You hovered over the button!";
});

hoverBtn.addEventListener("mouseout", () => {
  hoverMsg.textContent = "";
});

const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

let count = 0;
const incrementBtn = document.getElementById("incrementBtn");
const counterDisplay = document.getElementById("counter");

incrementBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formSuccess.textContent = "";

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  }

  if (passwordInput.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    valid = false;
  }

  if (valid) {
    formSuccess.textContent = "Form submitted successfully!";
    form.reset();
  }
});
