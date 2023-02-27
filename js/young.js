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
