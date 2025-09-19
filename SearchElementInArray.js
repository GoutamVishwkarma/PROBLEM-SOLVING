/*
Question: Search an element in an array
Description:
- Given an array of integers and a target element, return the index of the element if it exists.
- If the element is not present in the array, return -1.
- This problem tests basic searching in arrays.

Input/Output Examples:
1. Input: arr = [3, 5, 7, 9], target = 7
   Output: 2

2. Input: arr = [10, 20, 30, 40], target = 25
   Output: -1

3. Input: arr = [1, 2, 3, 4, 5], target = 1
   Output: 0

Constraints:
- The array contains at least 1 element.
- Array elements are integers.
- Array size <= 10^5

Time Complexity:
- Best case: O(1)   // Target found at the first index
- Worst case: O(n)  // Target not found or present at the last index
*/

/* ===================== YOUR CODE GOES HERE ===================== */


function searchElementInArray(arr, ele) {

   if (!Array.isArray(arr) || !arr.length) {
     return new Error('Invalid Input');
   }    
 
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] === ele) {
       return i;
     }
   }  
   return -1;
 }
 
 console.log('unsorted -> ', searchElementInArray([3, 5, 7, 9], 7));
 
 
 // using js functions
 function searchElementInSortedArrayJS(arr, ele) {
   return arr.indexOf(ele);
 }
 
 console.log('sorted ->', searchElementInSortedArrayJS([3, 5, 7, 9], 7));
