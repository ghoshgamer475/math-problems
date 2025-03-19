const getRandomNumber = () => {
    return Math.floor(Math.random() * 10);
}

const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
}

const subtractTwoNumbers = (num1, num2) => {
    return num1 - num2;
}

const multiplyTwoNumbers = (num1, num2) => {
    return num1 * num2;
}

const divideTwoNumbers = (num1, num2) => {
    return num1 / num2;
}

const getRandomOperation = () => {
    const operations = ["add", "subtract", "multiply", "divide"];
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
}

const solveMathProblem = () => {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operation = getRandomOperation();
    let result;
    switch (operation) {
        case "add":
            result = addTwoNumbers(num1, num2);
            break;
        case "subtract":
            result = subtractTwoNumbers(num1, num2);
            break;
        case "multiply":
            result = multiplyTwoNumbers(num1, num2);
            break;
        case "divide":
            result = divideTwoNumbers(num1, num2);
            break;
    }
    return `${num1} ${operation} ${num2} = ${result}`;
}
