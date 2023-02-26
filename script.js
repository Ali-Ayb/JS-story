function hasSpecialChar(password) {
  const special_chars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  return special_chars.test(password);
}

function checkPasswordLength(password) {
  return password.length >= 8;
}

function chechUpperCase(password) {
  const upperCaseRegExp = /[A-Z]/;
  return upperCaseRegExp.test(password);
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

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  let password = document.getElementById("password").value;
  validatePassword(password);
  console.log("Form submitted!");
});
