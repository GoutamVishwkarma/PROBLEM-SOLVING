/*
📌 Question 10:
Find the unique element in an array  
(Given an array where all elements appear twice except one, find the unique element)

📝 Description:
Write a program to find the element that appears only once in an array.  
All other elements in the array appear exactly twice.  

✅ Example:
Input: [1, 2, 2, 3, 3]  
Output: 1

🔒 Constraints:
- 1 ≤ array length ≤ 10^5
- Array contains integers (positive, negative, or zero)
- Exactly one element appears once, all others appear twice
- Time complexity target: O(n)
- Space complexity target: O(1) if possible

🧪 Test Cases:
Input: [1, 2, 2, 3, 3]  
Output: 1

Input: [4, 1, 2, 1, 2]  
Output: 4

Input: [7, 7, 8]  
Output: 8

Input: [10]  
Output: 10   // single element array

Input: [-1, -1, -2]  
Output: -2   // works with negatives

Input: [0, 1, 1, 2, 2]  
Output: 0
*/


// 👉 Solution 1: Using XOR (Optimal: O(n), O(1))
function findUniqueXOR(arr) {
  let unique = 0;
  for (let num of arr) {
    unique ^= num; // XOR cancels duplicates
  }
  return unique;
}


// 👉 Solution 2: Using HashMap (O(n) time, O(n) space)
function findUniqueMap(arr) {
  let freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (let key in freq) {
    if (freq[key] === 1) return Number(key);
  }
}


// 🧪 Test Cases
console.log(findUniqueXOR([1, 2, 2, 3, 3]));     // 1
console.log(findUniqueXOR([4, 1, 2, 1, 2]));     // 4
console.log(findUniqueXOR([7, 7, 8]));           // 8
console.log(findUniqueXOR([10]));                // 10
console.log(findUniqueXOR([-1, -1, -2]));        // -2
console.log(findUniqueXOR([0, 1, 1, 2, 2]));     // 0

console.log(findUniqueMap([1, 2, 2, 3, 3]));     // 1
console.log(findUniqueMap([4, 1, 2, 1, 2]));     // 4
