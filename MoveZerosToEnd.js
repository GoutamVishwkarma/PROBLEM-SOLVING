// Move all zeros to the end while preserving order of other elements
function moveZerosToEnd(arr) {
    if (!arr || arr.length === 0) return [];
    
    let writeIndex = 0;
    
    // First pass: move all non-zero elements to front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[writeIndex] = arr[i];
            writeIndex++;
        }
    }
    
    // Second pass: fill remaining positions with zeros
    while (writeIndex < arr.length) {
        arr[writeIndex] = 0;
        writeIndex++;
    }
    
    return arr;
}

// Test
const arr = [0, 1, 0, 3, 12];
console.log(moveZerosToEnd(arr)); // [1, 3, 12, 0, 0]
console.log(moveZerosToEnd([0, 0, 1]));     // [1, 0, 0]
console.log(moveZerosToEnd([1, 2, 3]));     // [1, 2, 3]
console.log(moveZerosToEnd([]));            // []
console.log(moveZerosToEnd([0]));           // [0]
