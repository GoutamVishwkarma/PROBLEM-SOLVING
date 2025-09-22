/*
Convert flat array to nested tree structure  

📝 Description:
Given a flat array of objects where each object contains an `id` and a `parentId`,  
convert it into a nested tree structure.  
- Objects with `parentId = null` are considered root nodes.  
- Each node may have zero or more children.  
- Maintain the input order for children.  

✅ Example:
Input: 
[
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 }
]

Output:
[
  {
    id: 1,
    parentId: null,
    children: [
      {
        id: 2,
        parentId: 1,
        children: [
          { id: 4, parentId: 2, children: [] }
        ]
      },
      { id: 3, parentId: 1, children: [] }
    ]
  }
]

⚡ Constraints:
- Each object has fields: `id`, `parentId`.
- `parentId` may be `null` (root node).
- Values of `id` are unique.
- 1 ≤ n ≤ 10^4 (array length).
- Must return a new tree with `children` arrays.
- Time Complexity: O(n2)

-------------------------------------
   Write your solution below
-------------------------------------
*/

function convertToTree(arr) {
  let res = [];

  // Add children array to each node
  arr = arr.map(e => ({ ...e, children: [] }));

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].parentId === null) {
      res.push(arr[i]);
    } else {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j].id === arr[i].parentId) {
          arr[j].children.push(arr[i]);
          break; // ✅ stop searching once parent is found
        }
      }
    }
  }

  return res;
}


// -----------------
// ✅ Test Cases
// -----------------



// Test Case 2
console.log(convertToTree([
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 },
  { id: 5, parentId: 2 },
  { id: 6, parentId: null }
]));
/* Output:
[
  {
    id: 1,
    parentId: null,
    children: [
      {
        id: 2,
        parentId: 1,
        children: [
          { id: 4, parentId: 2, children: [] },
          { id: 5, parentId: 2, children: [] }
        ]
      },
      { id: 3, parentId: 1, children: [] }
    ]
  },
  { id: 6, parentId: null, children: [] }
]
*/

// Test Case 3
// console.log(convertToTree([
//   { id: 'a', parentId: null },
//   { id: 'b', parentId: 'a' },
//   { id: 'c', parentId: 'a' },
//   { id: 'd', parentId: 'b' }
// ]));
/* Output:
[
  {
    id: 'a',
    parentId: null,
    children: [
      { id: 'b', parentId: 'a', children: [
        { id: 'd', parentId: 'b', children: [] }
      ] },
      { id: 'c', parentId: 'a', children: [] }
    ]
  }
]
*/

// Test Case 4
// console.log(convertToTree([
//   { id: 10, parentId: null },
//   { id: 11, parentId: 10 },
//   { id: 12, parentId: 10 },
//   { id: 13, parentId: 12 }
// ]));
/* Output:
[
  {
    id: 10,
    parentId: null,
    children: [
      { id: 11, parentId: 10, children: [] },
      { id: 12, parentId: 10, children: [
        { id: 13, parentId: 12, children: [] }
      ]}
    ]
  }
]
*/
