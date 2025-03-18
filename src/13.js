// Define a function that takes an array of numbers and returns the sum of all numbers in the array
function sumOfNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Use the function to calculate the sum of an array of numbers
const numbers = [1, 2, 3, 4, 5];
console.log(sumOfNumbers(numbers)); // Output: 15
