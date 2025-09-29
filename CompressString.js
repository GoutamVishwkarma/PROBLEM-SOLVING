/*
📌 Question 6:
Compress a string by counting repeating characters  
(Convert a string to show each character followed by its count)

📝 Description:
Write a program that compresses a string such that each sequence of repeating characters is replaced by the character followed by the count of its repetitions.  

✅ Example:
Input: "aaabbc"  
Output: "a3b2c1"

🔒 Constraints:
- 1 ≤ string length ≤ 10^5
- Input can contain lowercase/uppercase letters, digits, and special characters
- If a character appears once, it should still be followed by "1"
- Output should be returned as a string, not an array

🧪 Test Cases:
Input: "aaabbc"  
Output: "a3b2c1"

Input: "abcd"  
Output: "a1b1c1d1"

Input: "aabbbaa"  
Output: "a2b3a2"

Input: "AAaa"  
Output: "A2a2"   // case-sensitive

Input: "!!!!"  
Output: "!4"

Input: ""  
Output: ""   // empty string edge case
*/

function compressString(str){
    if(!str.length) return "";
    
    let res = '';
    let count = 1;
    
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i + 1])
        {
            count++;
        } 
        if(str[i] !== str[i + 1]){
            res += str[i] + count;
            count=1;
        }
    }
    
    return res;
}

console.log(compressString('aaabbc'));
