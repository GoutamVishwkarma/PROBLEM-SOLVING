/*
📌 Question 4:
Find sum of numbers without using a for loop  
(Hint: use reduce() or recursion)

📝 Description:
Given an array of numbers, return the sum of all elements without using 
a traditional loop (for / while). You can solve this using 
- Array.prototype.reduce() OR 
- Recursion.

✅ Example:
Input: [1, 2, 3, 4, 5]
Output: 15

Input: [10, -2, 6]
Output: 14

Input: []
Output: 0

⚡ Constraints:
- 1 <= arr.length <= 10^5
- -10^4 <= arr[i] <= 10^4

⏱️ Time Complexity:
- Best Case: O(n)
- Worst Case: O(n)

-------------------------------------
   Write your solution below
-------------------------------------
*/

function sumOfNumbers(arr) {
   let total = 0;
 
   // recursive helper function
   function accumulate(index) {
     if (index >= arr.length) return; // base case → stop when index is out of bounds
     total += arr[index];            // add current element to sum
     accumulate(index + 1);          // move to next element
   }
 
   accumulate(0); // start recursion from index 0
   return total;
 }
 
 // ✅ Test cases
 console.log(sumOfNumbers([1, 2, 3, 4, 5])); // 15
 console.log(sumOfNumbers([10, -2, 6]));     // 14
 console.log(sumOfNumbers([]));              // 0
 
