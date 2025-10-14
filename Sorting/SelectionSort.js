// **Implement Selection Sort**
//   - Repeatedly find the minimum and place it at the beginning.
//   - Time: O(n²) | Space: O(1)
//   - Why: Simple to understand; fewer swaps than Bubble Sort.


// Selection Sort: repeatedly find the minimum and place it at the beginning
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i; // Track the INDEX of minimum element
        
        // Find the index of the smallest element in remaining unsorted array
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Swap the found minimum element with the first element
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    
    return arr;
}

const arr = [3, 2, 1, 4, 5, 6, 9, 8, 7, 0];
console.log(selectionSort(arr)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
