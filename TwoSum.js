// Approach 1: Two-pointer (all pairs, sorted array)
function sumToTarget(nums, target = 0) {
    // Validate input
    if (!nums || !Array.isArray(nums) || nums.length === 0) {
        return 'Invalid Input';
    }
    
    let left = 0;
    let right = nums.length - 1;
    let res = [];
    
    // Sort array
    nums = nums.sort((a, b) => a - b);
    
    while (left < right) {
        let sum = nums[left] + nums[right];
        
        if (sum === target) {
            res.push([nums[left], nums[right]]);
            left++;
            right--;  
            
            // Skip duplicates
            while (left < right && nums[left] === nums[left - 1]) left++;
            while (left < right && nums[right] === nums[right + 1]) right--;
        } 
        else if (sum < target) {
            left++;
        } 
        else {
            right--;
        }
    }
    
    return res;
}

// Approach 2: Hash Map (first pair indices, LeetCode style)
var twoSum = function(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];  
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return []; // No pair found
};

// Test cases
console.log("=== TWO-POINTER (All Pairs) ===");
console.log("sumToTarget([1,2,3,4,5,6], 7):", sumToTarget([1,2,3,4,5,6], 7));
// Expected: [[1,6], [2,5], [3,4]]

console.log("sumToTarget([2,7,11,15], 9):", sumToTarget([2,7,11,15], 9));
// Expected: [[2,7]]

console.log("sumToTarget([1,1,2,2,3,3], 4):", sumToTarget([1,1,2,2,3,3], 4));
// Expected: [[1,3], [2,2]]

console.log("\n=== HASH MAP (First Pair Indices) ===");
console.log("twoSum([2,7,11,15], 9):", twoSum([2,7,11,15], 9));
// Expected: [0,1]

console.log("twoSum([3,2,4], 6):", twoSum([3,2,4], 6));
// Expected: [1,2]

console.log("twoSum([3,3], 6):", twoSum([3,3], 6));
// Expected: [0,1]

console.log("\n=== EDGE CASES ===");
console.log("twoSum([1,5,3,7], 10):", twoSum([1,5,3,7], 10));
// Expected: [1,3]

console.log("twoSum([-1,-2,-3,-4,-5], -8):", twoSum([-1,-2,-3,-4,-5], -8));
// Expected: [2,4]

console.log("twoSum([0,4,3,0], 0):", twoSum([0,4,3,0], 0));
// Expected: [0,3]

console.log("\n=== NO SOLUTION ===");
console.log("twoSum([1,2,3], 7):", twoSum([1,2,3], 7));
// Expected: []

console.log("\n=== COMPARISON ===");
console.log("Method 1 (sumToTarget):");
console.log("  - Returns: All pairs as values [[1,6], [2,5]]");
console.log("  - Time: O(n log n) - needs sorting");
console.log("  - Space: O(1)");
console.log("  - Modifies: Original array (sorts it)");

console.log("\nMethod 2 (twoSum):");
console.log("  - Returns: First pair as indices [0,1]");
console.log("  - Time: O(n) - single pass");
console.log("  - Space: O(n) - uses hash map");
console.log("  - Modifies: Nothing (preserves array)");
