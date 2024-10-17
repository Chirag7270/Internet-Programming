// Function to perform the operation
function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        // Validate if inputs are numbers
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            reject("Error: Both inputs must be numbers.");
            return;
        }

        // Perform the operation
        switch (operation) {
            case 'add':
                resolve(num1 + num2);
                break;
            case 'subtract':
                resolve(num1 - num2);
                break;
            case 'multiply':
                resolve(num1 * num2);
                break;
            case 'divide':
                if (num2 === 0) {
                    reject("Error: Division by zero is not allowed.");
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject("Error: Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'.");
        }
    });
}

// Example usage of the calculator
function performCalculation(num1, num2, operation) {
    calculator(num1, num2, operation)
        .then(result => {
            console.log(`Result: ${result}`);
        })
        .catch(error => {
            console.error(error);
        });
}

// Testing the calculator

// Valid operations
performCalculation(10, 5, 'add');        // Expected Output: Result: 15
performCalculation(10, 5, 'subtract');   // Expected Output: Result: 5
performCalculation(10, 5, 'multiply');   // Expected Output: Result: 50
performCalculation(10, 5, 'divide');     // Expected Output: Result: 2

// Invalid operations
performCalculation(10, 0, 'divide');     // Expected Output: Error: Division by zero is not allowed.
performCalculation(10, 5, 'modulus');    // Expected Output: Error: Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'.
performCalculation('a', 5, 'add');       // Expected Output: Error: Both inputs must be numbers.
