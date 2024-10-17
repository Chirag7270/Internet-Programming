// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true; // 2 and 3 are prime
    if (num % 2 === 0 || num % 3 === 0) return false; // Eliminate multiples of 2 and 3

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}


// Generator function that produces prime numbers up to a specified limit
function* generatePrimes(limit) {
    let num = 2; // Starting from the first prime number

    while (num <= limit) {
        if (isPrime(num)) {
            yield num; // Produce prime number
        }
        num++;
    }
}

// Using the generator to produce primes up to a given limit
const primeLimit = 50;  // We can change this to generate primes up to any limit
const primeGenerator = generatePrimes(primeLimit);

for (let prime of primeGenerator) {
    console.log(prime);  // Output: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
}
