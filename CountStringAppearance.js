//Count how many times a substring appears in a string
//     - Return how many times a smaller string appears in a larger one.

function countStringAppearance(str, subString) {
  let count = 0;

  for (let i = 0; i <= str.length - subString.length; i++) {
    let match = true;

    // compare each character in window with substring
    for (let j = 0; j < subString.length; j++) {
      // case-insensitive match
      if (str[i + j].toLowerCase() !== subString[j].toLowerCase()) {
        match = false;
        break;
      }
    }

    if (match) count++;
  }

  return count;
}

console.log(
  countStringAppearance(
    'hello I am goutam, hello I am keshav, Hello I am preetam.',
    'hello'
  )
); // 👉 3
