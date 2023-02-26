//Password validataion functions
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

//Email valdiataion functions

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

function validateRegisterForm(email, password) {
  validateEmail(email);
  validatePassword(password);
}

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function calculateAge(birth_date) {
  const today = new Date();
  const birth_obj = new Date(birth_date);
  let age = today.getFullYear() - birth_obj.getFullYear();
  const monthDiff = today.getMonth() - birth_obj.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birth_obj.getDate())
  ) {
    age--;
  }
  return age;
}

const form = document.querySelector(".register-form");
form.addEventListener("submit", function (event) {
  console.log("test");
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let phone_number = document.getElementById("phone_number").value;
  let birth_date = document.getElementById("birth_date").value;
  let male = document.getElementById("male");
  let female = document.getElementById("female");
  let gender;

  if (male.checked) {
    gender = male.value;
  } else if (female.checked) {
    gender = female.value;
  }

  const data = {
    email: email,
    password: password,
    phone_number: phone_number,
    birth_date: birth_date,
    gender: gender,
  };

  let json_data = JSON.stringify(data);
  let parsed_json_data = JSON.parse(json_data);
  let age = calculateAge(parsed_json_data.birth_date);
  if (age > 30) {
    if (isPrime(age)) {
      alert(`you are old and btw your ${age} is prime number :) `);
    } else {
      alert(`you are old but your ${age} is not prime :( )`);
    }
    window.location.href = "../pages/old.html";
  } else {
    if (isPrime(age)) {
      alert(`you are young and btw your ${age} is prime number :) `);
    } else {
      alert(`you are young but your ${age} is not prime :( )`);
    }
    window.location.href = "../pages/young.html";
  }
});
