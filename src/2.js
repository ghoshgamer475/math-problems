// Generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Check if the number is even or odd
function isEven(num) {
  return num % 2 === 0;
}

// Print the result
console.log("The random number is:", getRandomNumber());
console.log("Is it even?", isEven(getRandomNumber()));
