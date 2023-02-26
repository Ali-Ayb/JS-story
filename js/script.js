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
  let message = "";
  if (!checkPasswordLength(password)) {
    message = "Password should contain minimum of 8 characters\n";
  }

  if (!hasSpecialChar(password)) {
    message += "Password should contain minimum of 1 special characters\n";
  }

  if (!chechUpperCase(password)) {
    message += "Password should contain minimum of 1 upperCase\n";
  }
  if (message !== "") {
    alert(message);
  }
}

function checkEmailFormat(email) {
  const email_reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email_reg.test(email);
}

function checkEmailDashes(email) {
  const has_dashes = email.indexOf("-") == -1;
  return has_dashes;
}

function validateEmail(email) {
  if (!checkEmailFormat(email)) {
    alert("Invalid email address");
  }
  if (!checkEmailDashes(email)) {
    alert("email address should not contain dashes(-)");
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  validateEmail(email);
  validatePassword(password);
  console.log("Form submitted!");
});
