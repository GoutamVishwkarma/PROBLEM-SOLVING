/*
Diff two nested objects  
(Return only the changed parts between two objects)

📝 Description:
Given two nested objects, return a new object representing the differences.  
- If a key exists in both but the values differ → include that key with the changed value.  
- If a key exists only in one object → include it.  
- If values are objects, perform a recursive diff.  
- If no differences → return an empty object.

✅ Example:
Input: 
obj1 = { a: 1, b: { c: 2, d: 4 } }  
obj2 = { a: 1, b: { c: 3, d: 4 } }  

Output: { b: { c: 3 } }

Input: 
obj1 = { name: "John", age: 30 }  
obj2 = { name: "John", age: 31, city: "NY" }  

Output: { age: 31, city: "NY" }

Input: 
obj1 = { x: 1, y: { z: 2 } }  
obj2 = { x: 1, y: { z: 2 } }  

Output: {}

⚡ Constraints:
- Keys are strings.
- Values can be primitives, arrays, or objects.
- Object depth ≤ 10
- Object size ≤ 10^4 keys.

⏱️ Time Complexity:
- Best Case: O(1) (if mismatch found immediately)
- Worst Case: O(n) (n = total keys and values in both objects)
-------------------------------------
   Write your solution below
-------------------------------------
*/

let obj1 = { name: "John", age: 30 };  
let obj2 = { name: "John", age: 31, city: "NY" };

function getDifferences(o1, o2){
    let diff = {};    
    let keys = new Set([...Object.keys(o1), ...Object.keys(o2)]);
    
    for(let key of keys){
        const k1 = o1[key];
        const k2 = o2[key];
        
        if(k1 && k2 && typeof k1 === 'object' && typeof k2 === 'object'){
            let differences = getDifferences(k1, k2);
            if(Object.keys(differences).length > 0){
                diff[key] = differences;
            }
        } else if(k1 !== k2){
             diff[key] = k2;
        }
    }
    
    return diff;
}

console.log(getDifferences(obj1, obj2));

