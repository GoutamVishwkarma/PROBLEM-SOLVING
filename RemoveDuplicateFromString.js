/*
📌 Question 4:
Remove duplicate characters from a string  
(Given a string, return a new string with all duplicate characters removed)

📝 Description:
Write a program that removes duplicate characters from a given string.  
The order of first occurrence of each character should be preserved.  

✅ Example:
Input: "hello"  
Output: "helo"

🔒 Constraints:
- 1 ≤ string length ≤ 10^5
- Input can contain lowercase/uppercase letters, digits, and special characters
- Output should maintain the order of characters as they first appear
- Case-sensitive comparison ("A" and "a" are different)

🧪 Test Cases:
Input: "hello"  
Output: "helo"

Input: "programming"  
Output: "progamin"

Input: "aabbcc"  
Output: "abc"

Input: "abcabcabc"  
Output: "abc"

Input: "AaBbCc"  
Output: "AaBbCc"   // case-sensitive

Input: ""  
Output: ""   // empty string edge case

Input: "112233!!"  
Output: "123!"
*/

function removeDupsFromString(str) {
  if (!str.length) return "";  // return empty string, not false

  let res = "";
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      res += str[i];
      map.set(str[i], true);
    }
  }

  return res;
}

console.log(removeDupsFromString("hello"));       // "helo"
console.log(removeDupsFromString("programming")); // "progamin"
console.log(removeDupsFromString("aabbcc"));      // "abc"
console.log(removeDupsFromString("abcabcabc"));   // "abc"
console.log(removeDupsFromString("AaBbCc"));      // "AaBbCc"
console.log(removeDupsFromString(""));            // ""
console.log(removeDupsFromString("112233!!"));    // "123!"
