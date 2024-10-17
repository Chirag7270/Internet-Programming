// Custom iterable object
const numbers = [1, 2, 3, 4, 5];

// Add a custom iterator to produce squares of numbers
numbers[Symbol.iterator] = function() {
    let index = 0;
    const array = this; // Reference to the original array

    return {
        next() {
            if (index < array.length) {
                // Return the square of the current element
                const value = array[index] * array[index];
                index++;
                return { value, done: false };
            } else {
                // End of iteration
                return { done: true };
            }
        }
    };
};

// Using the custom iterator
for (let square of numbers) {
    console.log(square);  // Output: 1, 4, 9, 16, 25
}
