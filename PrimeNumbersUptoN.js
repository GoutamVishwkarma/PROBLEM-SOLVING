// Find all prime numbers up to N
function primeNumbersUptoN(N) {
    // Validate input
    if (N < 2) return [];
    
    let result = [];
    
    for (let i = 2; i <= N; i++) {
        let isPrime = true;
        
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break; // Exit early once divisor found
            }
        }
        
        if (isPrime) result.push(i);
    }
    
    return result;
}

// Test cases
console.log("=== NORMAL CASES ===");
console.log("primeNumbersUptoN(10):", primeNumbersUptoN(10));
// Expected: [2, 3, 5, 7]

console.log("primeNumbersUptoN(20):", primeNumbersUptoN(20));
// Expected: [2, 3, 5, 7, 11, 13, 17, 19]

console.log("primeNumbersUptoN(30):", primeNumbersUptoN(30));
// Expected: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

console.log("primeNumbersUptoN(50):", primeNumbersUptoN(50));
// Expected: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

console.log("\n=== EDGE CASES ===");
console.log("primeNumbersUptoN(0):", primeNumbersUptoN(0));
// Expected: []

console.log("primeNumbersUptoN(1):", primeNumbersUptoN(1));
// Expected: []

console.log("primeNumbersUptoN(2):", primeNumbersUptoN(2));
// Expected: [2]

console.log("primeNumbersUptoN(3):", primeNumbersUptoN(3));
// Expected: [2, 3]
