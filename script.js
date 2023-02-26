function hasSpecialChar(password) {
  const special_chars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  return special_chars.test(password);
}

function checkPasswordLength(password) {
  return password.length >= 8;
}

function chechUpperCase(password) {
  const upper_case_reg = /[A-Z]/;
  return upper_case_reg.test(password);
}

function validatePassword(password) {
  if (!checkPasswordLength(password)) {
    alert("Password should contain minimum of 8 characters");
  }

  if (!hasSpecialChar(password)) {
    alert("Password should contain minimum of 1 special characters");
  }

  if (!chechUpperCase(password)) {
    alert("Password should contain minimum of 1 upperCase");
  }
}

function checkEmailFormat(email) {
  const email_reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log("heyyyyyy");
  alert("stop");
  return email_reg.test(email);
}

function validateEmail(email) {
  if (!checkEmailFormat(email)) {
    alert("Invalid email address");
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  validateEmail(email);
  // validatePassword(password);
  console.log("Form submitted!");
});
