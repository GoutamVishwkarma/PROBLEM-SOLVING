// 1. Reverse a string without using built-in reverse methods  
//   - Given a string, return it with characters in reverse order (e.g., "hello" → "olleh").  

// 📝 Description:
// Write a function that takes a string as input and returns a new string with the characters reversed.  
// - Do not use built-in functions like `reverse()`.  
// - You can use loops or recursion.  

// ✅ Example:
// Input: "hello"  
// Output: "olleh"  

// Input: "abcd"  
// Output: "dcba"  

// ⚡ Constraints:
// - 1 ≤ string length ≤ 10^5  
// - Only ASCII characters.  

// ⏱️ Time Complexity:
// - O(n) (must go through all characters once)  

// -------------------------------------
//   Write your solution below
// -------------------------------------

// way 1 -  
function reverse(str){
    let res = '';
    for(let i = str.length - 1; i >= 0; i--){
        res += str[i];
    }
    return res;
}
console.log(reverse('hello'));

// way 2 -  
function reverseV2(str){
    return str.split('').reverse().join('');
}
console.log(reverseV2('hello'));
