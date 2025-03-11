// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Ask user for input
console.log("Guess a number between 1 and 10:");

// Loop until the user's guess is correct
while (true) {
  // Get the user's guess
  let userGuess = prompt();

  // Check if the user's guess is correct
  if (userGuess === randomNumber) {
    console.log("You are correct!");
    break;
  } else if (userGuess < randomNumber) {
    console.log("Your guess is too low.");
  } else {
    console.log("Your guess is too high.");
  }
}
