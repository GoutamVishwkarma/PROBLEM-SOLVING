/*
📌 Questionhttps://www.programiz.com/python-programming/online-compiler/ 24:
Deep-compare two objects  
(Return true if two nested objects are deeply equal)

📝 Description:
Given two objects, write a function that checks if they are **deeply equal**.  
- Objects are considered deeply equal if they have the same keys and values, including nested objects and arrays.
- Order of keys does not matter.
- Return `true` if they are deeply equal, otherwise `false`.

✅ Example:
Input: obj1 = { a: 1, b: { c: 2 } }, obj2 = { a: 1, b: { c: 2 } }  
Output: true

Input: obj1 = { a: 1, b: 2 }, obj2 = { a: 1, b: 3 }  
Output: false

Input: obj1 = { x: [1, 2] }, obj2 = { x: [1, 2] }  
Output: true

⚡ Constraints:
- Keys are strings.
- Values can be primitives, arrays, or objects.
- Objects have at most depth of 10.
- Object size <= 10^4 keys.

⏱️ Time Complexity:
- Best Case: O(1) (if mismatch found at first key)
- Worst Case: O(n) (n = total number of keys and values, all need to be checked)
*/
// Your code goes here...

function deepCompareObject(obj1, obj2) {
    if (obj1 === obj2) return true; // handles same reference including nested objects
    if(obj1 === null || obj2 === null) return false;
    if(typeof obj1 !== typeof obj2) return false;
    
    if(Array.isArray(obj1)){
        if(obj1.length !== obj2.length) return false;
        for(let i = 0; i < obj1.length; i++){
            if(!deepCompareObject(obj1[i], obj2[i])) return false;
        }
        return true;
    }
    
    if(obj1 !== null && typeof obj1 === 'object' && obj2 !== null){
        let key1 = Object.keys(obj1);
        let key2 = Object.keys(obj2);
        
        if(key1.length !== key2.length) return false;
        for(let key of key1){
            if (!obj2.hasOwnProperty(key)) return false;
            if(!deepCompareObject(obj1[key], obj2[key])) return false;
        }
        return true;
    }
    
    return obj1 === obj2;
    
}

console.log(deepCompareObject( { a: 1, b: { c: 2 } },  { a: 1, b: { c: 2 } }));

