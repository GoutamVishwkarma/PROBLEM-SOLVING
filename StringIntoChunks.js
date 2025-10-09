// Split string into chunks of fixed length
//     - E.g., "abcdefgh", size=3 → ["abc", "def", "gh"]. 


const StringIntoChunks = (string, chunk) => {
  let result = [];
  let chunkWord = '';
 
  for (let i = 0; i < string.length; i++) {
    chunkWord += string[i];
    if (chunkWord.length === chunk) {
      result.push(chunkWord);
      chunkWord = '';
    }
  }


  if (chunkWord !== '') {
    result.push(chunkWord);
  }


  return result;
}


console.log(StringIntoChunks('abcdefgh', 3)); // ["abc", "def", "gh"]
console.log(StringIntoChunks('abc', 3));      // ["abc"]
console.log(StringIntoChunks('abcdef', 2));   // ["ab", "cd", "ef"]
