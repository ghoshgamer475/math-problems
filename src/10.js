// Example 1: Random Number Generator
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// Example 2: Random Color Generator
function getRandomColor() {
    let colors = ["red", "blue", "green", "yellow"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Example 3: Random Word Generator
function getRandomWord() {
    let words = ["apple", "banana", "orange", "pear", "grape"];
    return words[Math.floor(Math.random() * words.length)];
}
