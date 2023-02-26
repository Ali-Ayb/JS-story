function addTenNumbers() {
  const numbers = [];
  for (let i = 0; i < 10; i++) {
    const input = prompt(`Enter 10 numbers ${i + 1}:`);
    numbers.push(parseInt(input));
  }
}

addTenNumbers();
