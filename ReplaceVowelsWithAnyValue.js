// Replace all vowels with *
//     - Input: "hello world" → "h*ll* w*rld".
// Needs to add error handling - 
function replaceVowelsWithAnyValue(str, replaceBy) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let res = '';
    
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            res += replaceBy;
        } else {
            res += str[i];
        }
    }
    
    return res;
}

function replaceVowelsWithAnyValueManual(str, replaceBy) {
    // Create a lookup object - vowels as keys
    const vowels = {
        'a': true,
        'e': true, 
        'i': true,
        'o': true,
        'u': true
    };
    
    let res = '';
    
    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase();
        // Check if char exists as a key in vowels object
        if(vowels[char]){
            res += replaceBy;
        } else {
            res += str[i];
        }
    }
    
    return res;
}
