// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Generator function that produces prime numbers up to a specified limit
function* generatePrimes(limit) {
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            yield num; // Produce prime number
        }
    }
}

// Using the generator to produce primes up to a given limit
const primeLimit = 50;  // Change this to generate primes up to any limit
const primeGenerator = generatePrimes(primeLimit);

for (let prime of primeGenerator) {
    console.log(prime);  // Outputs: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
}
