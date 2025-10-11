// Bubble sort: sorts array in ascending order
function bubbleSort(arr) {
    if (!arr || arr.length <= 1) return arr;
    
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Test cases
console.log(bubbleSort([5, 1, 3, 4, 2])); // [1, 2, 3, 4, 5]
console.log(bubbleSort([1]));             // [1]
console.log(bubbleSort([]));              // []
console.log(bubbleSort([3, 2, 1]));       // [1, 2, 3]
