// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// Given a string s, find the length of the longest substring without repeating characters.

const memoize = (fn) => {
  let cache = {};

  return (...args) => {
    const input = args[0];
    if (input in cache) {
      return cache[input];
    } else {
      cache[input] = fn(input);
      return cache[input];
    }
  };
};

var lengthOfLongeststring = function (s) {
  const resultArr = [];

  for (const char of s) {
    if (resultArr.includes(char)) {
      return resultArr.length;
    } else {
      resultArr.push(char);
    }
  }

  return resultArr.length;
};

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = memoize((s) => {
  let acc = 0;

  let i = 0;
  for (const chr of s) {
    // 0
    if (acc >= s.length) {
      // short circut
      return acc;
    } else {
      acc = Math.max(
        acc,
        lengthOfLongeststring(s.slice(i)),
        lengthOfLongeststring(s.slice(i + 1))
      );
    }
    i++;
  }
  return acc;
});
