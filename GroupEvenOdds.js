// Separate numbers into even and odd arrays
function separateEvenOdds(nums) {
    // Validate input
    if (!nums || !Array.isArray(nums) || nums.length === 0) {
        return 'Invalid Input';
    }
    
    let even = [];
    let odd = [];
    
    // Separate numbers based on even/odd
    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] !== 'number') continue; // Skip non-numbers
        
        if (nums[i] % 2 === 0) {
            even.push(nums[i]);
        } else {
            odd.push(nums[i]);
        }
    }
    
    return { even, odd };
}

// Test cases
console.log("=== NORMAL CASES ===");
console.log("Input: [1,2,3,4,5,6,7,8,9,10]");
console.log("Output:", separateEvenOdds([1,2,3,4,5,6,7,8,9,10]));
// Expected: { even: [2,4,6,8,10], odd: [1,3,5,7,9] }

console.log("\nInput: [10,15,20,25,30]");
console.log("Output:", separateEvenOdds([10,15,20,25,30]));
// Expected: { even: [10,20,30], odd: [15,25] }

console.log("\nInput: [0,1,2,3]");
console.log("Output:", separateEvenOdds([0,1,2,3]));
// Expected: { even: [0,2], odd: [1,3] }

console.log("\n=== EDGE CASES ===");
console.log("All even [2,4,6,8]:");
console.log("Output:", separateEvenOdds([2,4,6,8]));
// Expected: { even: [2,4,6,8], odd: [] }

console.log("\nAll odd [1,3,5,7]:");
console.log("Output:", separateEvenOdds([1,3,5,7]));
// Expected: { even: [], odd: [1,3,5,7] }

console.log("\nNegative numbers [-5,-4,-3,-2,-1]:");
console.log("Output:", separateEvenOdds([-5,-4,-3,-2,-1]));
// Expected: { even: [-4,-2], odd: [-5,-3,-1] }

console.log("\nSingle element [7]:");
console.log("Output:", separateEvenOdds([7]));
// Expected: { even: [], odd: [7] }

console.log("\nMixed with non-numbers [1,'2',3,null,5]:");
console.log("Output:", separateEvenOdds([1,'2',3,null,5]));
// Expected: { even: [], odd: [1,3,5] }

console.log("\n=== ERROR CASES ===");
console.log("Empty array []:", separateEvenOdds([]));
// Expected: "Invalid Input"

console.log("Null:", separateEvenOdds(null));
// Expected: "Invalid Input"

console.log("Undefined:", separateEvenOdds(undefined));
// Expected: "Invalid Input"

console.log("Not an array (string):", separateEvenOdds("123"));
// Expected: "Invalid Input"
