// Generate first N fibonacci
function printFibonacciUptoN(N) {
    // Validate input
    if (N < 0) return 'Invalid Input';
    
    let a = -1, b = 1, c;
    let result = [];
    
    // Generate N fibonacci numbers
    for (let i = 0; i <= N; i++) {
        c = a + b;
        result.push(c);
        a = b;
        b = c;
    }
    
    return result;
}

// Test cases
console.log("=== NORMAL CASES ===");
console.log("printFibonacciUptoN(10):", printFibonacciUptoN(10));
// Expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

console.log("printFibonacciUptoN(5):", printFibonacciUptoN(5));
// Expected: [0, 1, 1, 2, 3, 5]

console.log("printFibonacciUptoN(7):", printFibonacciUptoN(7));
// Expected: [0, 1, 1, 2, 3, 5, 8, 13]

console.log("\n=== EDGE CASES ===");
console.log("printFibonacciUptoN(0):", printFibonacciUptoN(0));
// Expected: [0]

console.log("printFibonacciUptoN(1):", printFibonacciUptoN(1));
// Expected: [0, 1]

console.log("printFibonacciUptoN(2):", printFibonacciUptoN(2));
// Expected: [0, 1, 1]
