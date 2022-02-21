// PROBLEM: https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/3010/

const romanNumap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanNumExceptions = {
  I: {
    V: 4,
    X: 9,
  },
  X: {
    L: 40,
    C: 90,
  },
  C: {
    D: 400,
    M: 900,
  },
};

/**
 * @param {string} st
 * @return {number}
 */
const romanToInt = function (st) {
  const [first, second] = st;
  if (!first) {
    return 0;
  }
  if (!second) {
    return romanNumap[first];
  }

  if (
    Object.hasOwn(romanNumExceptions, first) &&
    Object.hasOwn(romanNumExceptions[first], second)
  ) {
    return romanNumExceptions[first][second] + romanToInt(st.slice(2));
  } else {
    return romanNumap[first] + romanToInt(st.slice(1));
  }
};

console.log(romanToInt("MCMXCIV"));
