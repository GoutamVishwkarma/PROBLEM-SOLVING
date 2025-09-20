/*
📌 Question 23:
Remove an element from an array  
(Delete an item by value or index)

📝 Description:
Given an array, remove an element either by its **value** or by its **index**.  
- If removing by value → delete the first occurrence of that value.  
- If removing by index → delete the element present at that index.  
Return the updated array.

✅ Example:
Input: arr = [1, 2, 3, 4, 5], value = 3  
Output: [1, 2, 4, 5]

Input: arr = [10, 20, 30, 40], index = 2  
Output: [10, 20, 40]

Input: arr = [7, 8, 9], value = 100  
Output: [7, 8, 9]   // value not found, array unchanged

⚡ Constraints:
- 1 <= arr.length <= 10^5
- -10^4 <= arr[i] <= 10^4
- Index must be in range [0, arr.length - 1]

⏱️ Time Complexity:
- By value → Best: O(1) (if element at first index), Worst: O(n)
- By index → Best: O(1), Worst: O(n) (due to shifting elements)
-------------------------------------
   Write your solution below
-------------------------------------
*/

// Your code goes here...

function removeByIndex(arr, ind) {
    if(!Array.isArray(arr) || !arr.length) return 'Invalid Input';
    if(ind < 0 || ind > arr.length) return arr;
    
    for(let i = ind; i < arr.length; i++){
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    
    return arr;

}
console.log(removeByIndex([10, 20, 30, 40], 2))

function removeByValue(arr, value){
    if(!Array.isArray(arr) || !arr.length) return 'Invalid Input';
    let ind = 0;
    let removed = false;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== value && !removed){
            removed = true;
            continue;
        }
          arr[ind] = arr[i];
          ind++;
    }
    arr.length = ind;
    
    return arr;
}

console.log(removeByValue([1, 2, 3, 4, 5], 3))

