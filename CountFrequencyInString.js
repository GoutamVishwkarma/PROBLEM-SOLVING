/*
📌 Question 5:
Count occurrences of each letter in a string  
(For a given string, count how many times each character appears)

📝 Description:
Write a program that counts the frequency of each character in a string and returns the counts in a key-value format (e.g., object or dictionary).  

✅ Example:
Input: "banana"  
Output: { b: 1, a: 3, n: 2 }

🔒 Constraints:
- 1 ≤ string length ≤ 10^5
- Input can contain lowercase/uppercase letters, digits, and special characters
- Case-sensitive counting ("A" and "a" are different)
- Characters with 0 occurrences should not appear in the output

🧪 Test Cases:
Input: "banana"  
Output: { b: 1, a: 3, n: 2 }

Input: "Mississippi"  
Output: { M: 1, i: 4, s: 4, p: 2 }

Input: "aabbcc"  
Output: { a: 2, b: 2, c: 2 }

Input: ""  
Output: {}   // empty string

Input: "112233!!"  
Output: { 1: 2, 2: 2, 3: 2, '!': 2 }

Input: "AaBbCc"  
Output: { A: 1, a: 1, B: 1, b: 1, C: 1, c: 1 }   // case-sensitive
*/

function countFrequencyInString(str) {
    let freq = {};
    
    for(let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    
    return freq;
}

// Test cases
console.log(countFrequencyInString('banana'));      // { b: 1, a: 3, n: 2 }
console.log(countFrequencyInString('Mississippi')); // { M: 1, i: 4, s: 4, p: 2 }
console.log(countFrequencyInString('aabbcc'));      // { a: 2, b: 2, c: 2 }
console.log(countFrequencyInString(''));            // {}
console.log(countFrequencyInString('112233!!'));    // { '1': 2, '2': 2, '3': 2, '!': 2 }
console.log(countFrequencyInString('AaBbCc'));      // { A: 1, a: 1, B: 1, b: 1, C: 1, c: 1 }
