/*
Invert the keys and values of an object  
(Swap keys and values, e.g., {a:1, b:2} → {1:'a', 2:'b'})

📝 Description:
Given an object, create a new object where the keys become the values, 
and the values become the keys.  
- All original values are assumed to be unique and can be used as keys.  
- The function should return the new inverted object.

✅ Example:
Input: { a: 1, b: 2 }  
Output: { 1: 'a', 2: 'b' }

Input: { name: 'John', age: 30 }  
Output: { John: 'name', 30: 'age' }

Input: {}  
Output: {}

⚡ Constraints:
- Keys are strings.
- Values are strings or numbers.
- Object size <= 10^4 keys.

⏱️ Time Complexity:
- Best Case: O(n)
- Worst Case: O(n)
-------------------------------------
   Write your solution below
-------------------------------------
*/

function invertKeyValues(obj){
    if(!Object.keys(obj).length) return {};
    let inverted = {};
    
    for(let key in obj){
        inverted[obj[key]] = key;
    }
    
    return inverted;
}

console.log(invertKeyValues({ name: 'John', age: 30 } ))
