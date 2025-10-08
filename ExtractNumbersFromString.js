//  Extract numbers from a string
//     - Get all numeric substrings (e.g., "abc123def" → ["123"]). 

function extractNumbersFromString(str) {
    let res = [];
    let currentNumber = '';
    
    for (let i = 0; i < str.length; i++) {
        if ('0123456789'.includes(str[i])) {
            currentNumber += str[i];
        } else {
            if (currentNumber !== '') {
                res.push(currentNumber);
                currentNumber = '';
            }
        }
    }
    
    // Don't forget the last number if string ends with digits
    if (currentNumber !== '') {
        res.push(currentNumber);
    }
    
    return res;
}

console.log(extractNumbersFromString('abc123def'));     // ['123']
console.log(extractNumbersFromString('a1b22c333d'));    // ['1', '22', '333']
console.log(extractNumbersFromString('123abc456'));     // ['123', '456']
