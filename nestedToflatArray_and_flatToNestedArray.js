//Flatten a deeply nested array without built-in methods
//     - Input: [1, [2, [3]]] → Output: [1, 2, 3].

function nestedToflatArray(arr) {
    let res = [];
    
    function helper(ele){
        if(!Array.isArray(ele)){
           res.push(ele);
        } else {
          for(let i = 0; i < ele.length; i++){
              helper(ele[i]);
          }
        }
    }
    helper(arr);    
    return res;
}

const nestedArr = [1, [2, [3]]];
console.log(nestedToflatArray(nestedArr));


function flatToNestedArray(arr) {
    let res = [];
    
    function helper(elems, i) {
        if (i >= elems.length) return [];
        const current = elems[i];
        if (i === elems.length - 1) {
            return [current];
        }
        return [current, helper(elems, i + 1)];
    }
    
    res = helper(arr, 0);
    return res;
}
const flatArray = [ 1, 2, 3 ];
console.log(flatToNestedArray(flatArray));
