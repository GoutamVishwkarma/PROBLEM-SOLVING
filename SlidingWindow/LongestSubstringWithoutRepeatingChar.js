function LongestSubstringWithoutRepeatingChar(str) {
  let start = 0;             // window start
  let maxLength = 0;         // result
  let seen = {};             // stores character → last index

  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    // if char already seen and inside window → move start
    if (seen[char] >= start) {
      start = seen[char] + 1;
    }

    // update last seen position
    seen[char] = end;

    // calculate window length
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(LongestSubstringWithoutRepeatingChar('abcabcbb')); // 👉 3 ("abc")
