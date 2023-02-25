function checkPassword(password) {
  if (password.length < 8) {
    alert("Password should contain minimum of 8 characters");
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  let password = document.getElementById("password").value;
  checkPassword(password);
  console.log("Form submitted!");
});
