const formTitle = document.getElementById("form-title");

const confirmPasswordContainer = document.getElementById('confirm-password-container');

const submitButton = document.getElementById('submit');
const toggleLink = document.getElementById('toggle-link');

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");


function toggleAuth() {
  const isLoginForm = formTitle.textContent === "Login";
  formTitle.textContent = isLoginForm ? "Sign Up" : "Login";
  submitButton.textContent = isLoginForm ? "Sign Up" : "Login";
  toggleLink.textContent = isLoginForm ? "Login" : "Sign Up";
  confirmPasswordContainer.style.display = isLoginForm ? "block" : "none";
}

const users = [
{username: "khairah", password: "123"},
{username: "nazurah", password: "123"},


];

function login(username, password) {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    alert("Successfully login!");
  } else {
    alert("User not found. Please sign up first.");
  }
}



function signup(username, password, confirmPassword) {
  if (password !== confirmPassword) {
    alert("Passwords don't match.");
  } else {
    users.push({ username: username, password: password });
    alert("Sign up successful! You can now log in.");
    toggleAuth();
  }
}

function handleSubmit() {
  const isLoginForm = formTitle.textContent === "Login";
  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (isLoginForm) {
    login(username, password);
  } else {
    signup(username, password, confirmPassword);
  }
}

