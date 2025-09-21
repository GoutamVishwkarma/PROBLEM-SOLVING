/*

Find all unique triplets in an array that sum to zero in sorted array
(Return triplets where sum is 0)

📝 Description:
Given an array of integers, return all unique triplets [a, b, c] such that:
a + b + c = 0.  
- The solution should not include duplicate triplets.  
- Order of elements inside a triplet does not matter.  
- Order of triplets in the result does not matter.

✅ Example:
Input: [-1, 0, 1, 2, -1, -4]  
Output: [[-1, -1, 2], [-1, 0, 1]]

Input: [0, 1, 1]  
Output: []

Input: [0, 0, 0]  
Output: [[0, 0, 0]]

⚡ Constraints:
- 3 <= arr.length <= 10^3
- -10^5 <= arr[i] <= 10^5

⏱️ Time Complexity:
- Optimal Approach: O(n^2) using sorting + two pointers
- Naive Approach: O(n^3) by checking all triplets
-------------------------------------
   Write your solution below
-------------------------------------
*/

function tripleSum(arr, target){
    let res = [];
    arr.sort((a, b) => a - b);
    
    for(let i = 0; i < arr.length - 2; i++){
        
        if(i > 0 && arr[i] === arr[i - 1]) continue;
        
        let left = i + 1;
        let right = arr.length - 1;
        while(left < right){
            let sum = arr[i] + arr[left] + arr[right];
            if(sum === target){
                res.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;
                
                while(left < right && arr[left] === arr[left + 1]) left++;
                while(left < right && arr[right] === arr[right - 1]) right--;
                
            } else if(sum < target){
                left++;
            } else {
                right--;
            }
        }
    }
    
    return res;
}

console.log(tripleSum([-1, 0, 1, 2, -1, -4], 0));
