// Find the lowest value in an array
function findLowestValue(arr) {
    // Handle empty array or invalid input
    if (!arr || arr.length === 0) {
        throw new Error('Array is empty or invalid');
    }
    
    let low = arr[0];
    for (let i = 1; i < arr.length; i++) { // Start from index 1 (optimization)
        if (arr[i] < low) {
            low = arr[i];
        }
    }
    return low;
}

// Find the highest value in an array  
function findHighestValue(arr) {
    // Handle empty array or invalid input
    if (!arr || arr.length === 0) {
        throw new Error('Array is empty or invalid');
    }
    
    let high = arr[0];
    for (let i = 1; i < arr.length; i++) { // Start from index 1 (optimization)
        if (arr[i] > high) {
            high = arr[i];
        }
    }
    return high;
}
