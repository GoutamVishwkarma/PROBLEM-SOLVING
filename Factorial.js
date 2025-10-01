// Calculate factorial of a number
function factorial(Num) {
    // Validate input
    if (Num < 0) return 'Invalid Input';
    if (Num === 0 || Num === 1) return 1;
    
    let fact = 1; // Initialize to 1 (not undefined)
    
    for (let i = 2; i <= Num; i++) { // Start from 2 (not 0)
        fact *= i;
    }
    
    return fact;
}

// Test cases
console.log("=== NORMAL CASES ===");
console.log("factorial(5):", factorial(5));
// Expected: 120 (5*4*3*2*1)

console.log("factorial(6):", factorial(6));
// Expected: 720

console.log("factorial(10):", factorial(10));
// Expected: 3628800

console.log("\n=== EDGE CASES ===");
console.log("factorial(0):", factorial(0));
// Expected: 1 (by definition)

console.log("factorial(1):", factorial(1));
// Expected: 1

console.log("factorial(2):", factorial(2));
// Expected: 2

console.log("factorial(-5):", factorial(-5));
// Expected: "Invalid Input"

console.log("\n=== LARGE NUMBERS ===");
console.log("factorial(15):", factorial(15));
// Expected: 1307674368000

console.log("factorial(20):", factorial(20));
// Expected: 2432902008176640000
