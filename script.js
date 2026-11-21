const formTitle = document.getElementById("form-title");

const confirmPasswordContainer = document.getElementById('confirm-password-container');

const submitButton = document.getElementById('submit');
const toggleLink = document.getElementById('toggle-link');


function toggleAuth() {
  const isLoginForm = formTitle.textContent === "Login";
  formTitle.textContent = isLoginForm ? "Sign Up" : "Login";
  submitButton.textContent = isLoginForm ? "Sign Up" : "Login";
  toggleLink.textContent = isLoginForm ? "Login" : "Sign Up";
  confirmPasswordContainer.style.display = isLoginForm ? "block" : "none";
}