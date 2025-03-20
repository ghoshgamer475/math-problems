function findMaxPrimeNumber() {
  let maxPrime = 0;
  while (true) {
    const number = Math.floor(Math.random() * 100);
    if (!number || number % 2 === 0) { // Check if the current number is prime or odd
      maxPrime = number;
    } else {
      return maxPrime;
    }
  }
}

console.log(findMaxPrimeNumber());
