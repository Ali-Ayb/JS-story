function hasSpecialChar(password) {
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  return specialChars.test(password);
}

function checkPasswordLength(password) {
  return password.length >= 8;
}

function validatePassword(password) {
  if (!checkPasswordLength(password)) {
    alert("Password should contain minimum of 8 characters");
  }

  if (hasSpecialChar(password)) {
    alert("all good");
  } else {
    alert("Password should contain minimum of 1 special characters");
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  let password = document.getElementById("password").value;
  validatePassword(password);
  console.log("Form submitted!");
});
