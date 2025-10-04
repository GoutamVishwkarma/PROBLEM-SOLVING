let str = 'I am Goutam;';

// Reverses word order in a string
function sentenceReverse(str) {
    // Check valid string
    if (typeof str !== 'string' || str === null || str === undefined) {
        throw new Error('Invalid input');
    }

    // Handle empty or whitespace
    if (str.trim() === '') {
        return '';
    }
    
    let reversedString = ''; // Final result
    let temp = ''; // Current word

    // Loop through characters
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            temp += str[i]; // Add to word
        } else if (temp) {
            // Prepend word if complete
            reversedString = temp + (reversedString ? ' ' : '') + reversedString;
            temp = ''; // Reset word
        }
    }

    // Add last word
    if (temp) {
        reversedString = temp + (reversedString ? ' ' : '') + reversedString;
    }

    return reversedString;
}

// Test with error handling
try {
    console.log(sentenceReverse(str)); // Output: Goutam; am I
} catch (error) {
    console.error('Error:', error.message);
}
