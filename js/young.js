let constants = document.getElementById("constants");

constants.addEventListener("click", function () {
  let input_string = prompt("Enter a word:");

  let consonants = new Set("bcdfghjklmnpqrstvwxyz");

  let firstVowelIndex = input_string.length;
  for (let i = 0; i < input_string.length; i++) {
    if (!consonants.has(input_string[i].toLowerCase())) {
      firstVowelIndex = i;
      break;
    }
  }
  let output_string =
    input_string.slice(firstVowelIndex) +
    input_string.slice(0, firstVowelIndex) +
    "ay";

  const constant = document.createElement("h1");
  constant.textContent = `original string: ${input_string} modified string: ${output_string}`;
  document.body.appendChild(constant);
});

let animation = document.getElementById("animation");
animation.addEventListener("click", function () {
  const box = document.querySelector(".box");
  let position = 0;

  function moveBox() {
    position += 1;
    box.style.transform = `translateX(${position}px)`;
    if (position < 100) {
      requestAnimationFrame(moveBox);
    }
  }

  requestAnimationFrame(moveBox);
});

let hacker = document.getElementById("hacker");
animation.addEventListener("click", function () {
  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
      const ipAddress = data.ip;
      console.log(`IP address: ${ipAddress}`);
    });
});
