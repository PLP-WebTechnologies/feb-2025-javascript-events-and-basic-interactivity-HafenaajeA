// Form validation
const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  // Username validation
  if (username.value.length < 3) {
    document.getElementById("usernameError").textContent =
      "Username must be at least 3 characters long";
    isValid = false;
  } else {
    document.getElementById("usernameError").textContent = "";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  if (password.value.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters long";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

// Theme switcher
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Click counter
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counterDisplay = document.getElementById("counter");

counterBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});
