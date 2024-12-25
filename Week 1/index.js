// Function to perform arithmetic operations
function calculator(numbers, operation) {
    let result = numbers[0]; // Initialize with the first number

    for (let i = 1; i < numbers.length; i++) {
        switch (operation) {
            case "add":
                result += numbers[i];
                break;
            case "subtract":
                result -= numbers[i];
                break;
            case "multiply":
                result *= numbers[i];
                break;
            case "divide":
                if (numbers[i] === 0) {
                    console.log("Division by zero is not allowed.");
                    return;
                }
                result /= numbers[i];
                break;
            default:
                console.log("Invalid operation.");
                return;
        }
    }
    console.log(`The result of ${operation} is: ${result}`);
}

// Test the calculator
const numbers = [10, 5, 2]; // Input numbers
console.log("Numbers:", numbers);

// Perform addition
calculator(numbers, "add");

// Perform subtraction
calculator(numbers, "subtract");

// Perform multiplication
calculator(numbers, "multiply");

// Perform division
calculator(numbers, "divide");