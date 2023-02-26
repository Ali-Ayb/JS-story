let numbers = [];
// alert("Hello old but gold \nlets get started with some fun games old man");
// for (let i = 0; i < 10; i++) {
//   const input = prompt(`Enter 10 numbers ${i + 1}:`);
//   numbers.push(parseInt(input));
// }

function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;
  var L = new Array(n1);
  var R = new Array(n2);
  for (var i = 0; i < n1; i++) L[i] = arr[l + i];
  for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
  var i = 0;
  var j = 0;
  var k = l;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(arr, l, r) {
  if (l >= r) {
    return;
  }
  var m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

// const unsorted_list = document.createElement("h1");
// unsorted_list.textContent = `unsorted numbers: ${numbers}`;
// document.body.appendChild(unsorted_list);

// mergeSort(numbers, 0, numbers.length - 1);

// const sorted_list = document.createElement("h1");
// sorted_list.textContent = `sorted numbers: ${numbers}`;
// document.body.appendChild(sorted_list);

const word = prompt("Please enter a word:");

function isPalindrome(str) {
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  if (str.length <= 1) {
    return true;
  }
  return isPalindrome(str.slice(1, -1));
}

const result = isPalindrome(word);

const palindrome_result = document.createElement("h1");
palindrome_result.textContent = `"${word}" ${
  result ? "is" : "is not"
} a palindrome`;
document.body.appendChild(palindrome_result);