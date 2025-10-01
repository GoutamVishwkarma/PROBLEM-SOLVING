// Rotate array elements by k positions
function shiftElementsByKPos(arr, kpos, dir = 'R') {
    // Validate input
    if (!arr || arr.length === 0) return 'Invalid Input';
    if (kpos < 0) return 'Invalid Position';
    
    // Optimize: handle k > array length
    kpos = kpos % arr.length;
    
    // Right rotation - move last k elements to front
    if (dir === 'R') {
        while (kpos--) {
            let temp = arr[arr.length - 1];
            
            for (let i = arr.length - 1; i > 0; i--) {
                arr[i] = arr[i - 1];
            }
            
            arr[0] = temp;
        }
    }
    
    // Left rotation - move first k elements to end
    if (dir === 'L') {
        while (kpos--) {
            let temp = arr[0];
            
            for (let i = 0; i < arr.length - 1; i++) {
                arr[i] = arr[i + 1];
            }
            
            arr[arr.length - 1] = temp;
        }
    }
    
    return arr;
}

// Test cases
console.log("=== RIGHT ROTATION ===");
console.log("Rotate [1,2,3,4,5] right by 2:", shiftElementsByKPos([1,2,3,4,5], 2, 'R'));
// Expected: [4,5,1,2,3]

console.log("Rotate [0,1,2,3,4,5,6,7,8,9] right by 3:", shiftElementsByKPos([0,1,2,3,4,5,6,7,8,9], 3, 'R'));
// Expected: [7,8,9,0,1,2,3,4,5,6]

console.log("\n=== LEFT ROTATION ===");
console.log("Rotate [1,2,3,4,5] left by 2:", shiftElementsByKPos([1,2,3,4,5], 2, 'L'));
// Expected: [3,4,5,1,2]

console.log("Rotate [0,1,2,3,4,5,6,7,8,9] left by 3:", shiftElementsByKPos([0,1,2,3,4,5,6,7,8,9], 3, 'L'));
// Expected: [3,4,5,6,7,8,9,0,1,2]

console.log("\n=== EDGE CASES ===");
console.log("Empty array:", shiftElementsByKPos([], 2, 'R'));
// Expected: "Invalid Input"

console.log("Null array:", shiftElementsByKPos(null, 2, 'R'));
// Expected: "Invalid Input"

console.log("Negative k:", shiftElementsByKPos([1,2,3,4,5], -2, 'R'));
// Expected: "Invalid Position"

console.log("k = 0:", shiftElementsByKPos([1,2,3,4,5], 0, 'R'));
// Expected: [1,2,3,4,5]

console.log("k = array length:", shiftElementsByKPos([1,2,3,4,5], 5, 'R'));
// Expected: [1,2,3,4,5]

console.log("k > array length:", shiftElementsByKPos([1,2,3,4,5], 7, 'R'));
// Expected: [4,5,1,2,3] (7 % 5 = 2)

console.log("Single element:", shiftElementsByKPos([1], 3, 'R'));
// Expected: [1]

console.log("Two elements left:", shiftElementsByKPos([1,2], 1, 'L'));
// Expected: [2,1]
