<script>
// Generate a random math problem
const num1 = Math.floor(Math.random() * 10 + 1);
const num2 = Math.floor(Math.random() * 10 + 1);
let operation;
if (Math.random() < 0.5) {
  operation = "+";
} else {
  operation = "-";
}
let result = eval(`${num1} ${operation} ${num2}`);
// Display the math problem and the result
document.getElementById("math-problem").innerHTML = `${num1} ${operation} ${num2} =`;
document.getElementById("result").innerHTML = result;
</script>