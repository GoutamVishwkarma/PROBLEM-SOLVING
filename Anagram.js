/*
📌 Question 3:
Check if two strings are anagrams  
(Check if two strings have the same characters with the same frequency, ignoring order)

📝 Description:
Given two strings, determine if they are anagrams of each other.  
- Strings are anagrams if they contain the exact same characters with the same frequency, ignoring order.  
- Consider only letters; case-sensitive or insensitive can be specified.

✅ Example:
Input: str1 = "listen", str2 = "silent"  
Output: true

Input: str1 = "hello", str2 = "bello"  
Output: false

Input: str1 = "Triangle", str2 = "Integral"  
Output: true  // case-insensitive

⚡ Constraints:
- 1 <= str.length <= 10^5
- Strings contain only alphabetic characters.

⏱️ Time Complexity:
- Best Case: O(n)
- Worst Case: O(n)
-------------------------------------
   Write your solution below
-------------------------------------
*/

// Your code goes here...
function areAnagrams(str1, str2) {
    // Convert both strings to lowercase to make it case-insensitive
    str1 = str1.toLowerCase().repalceAll(" ", "");
    str2 = str2.toLowerCase().repalceAll(" ", "");

    // Quick check: if lengths differ, they cannot be anagrams
    if (str1.length !== str2.length) return false;

    const charCount = {};

    // Count characters in str1
    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Subtract character count using str2
    for (let char of str2) {
        if (!charCount[char]) {
            // Char not found or count mismatch
            return false;
        }
        charCount[char]--;
    }

    return true;
}

// ✅ Example Usage:
console.log(areAnagrams("listen", "silent"));     // true
console.log(areAnagrams("hello", "bello"));       // false
console.log(areAnagrams("Triangle", "Integral")); // true
