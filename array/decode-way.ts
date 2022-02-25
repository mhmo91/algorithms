// https://leetcode.com/problems/decode-ways/submissions/

/**
 * @param {string} s
 * @return {number}
 */

/**
 * General memoization function
 * it assumes the the function input is always one paramter and that it's a string
 * this works for the purpose of this example
 * @param fn function to be memoized
 * @returns {fn} return type
 */
const memoize = (fn: Function) => {
  let cache: { [key: string]: number } = {};
  return (input: string) => {
    if (!(input in cache)) {
      cache[input] = fn(input);
    }
    return cache[input];
  };
};

const numDecodings = (s: string) => {
  const possibilitiesSet = new Set(
    Array.from(Array(26).keys()).map((v) => v + 1)
  );

  let subNumDecoding = memoize((subS: string) => {
    let response = [];
    if (subS[0] === "0") return 0;
    if (subS.length === 1) {
      return possibilitiesSet.has(parseInt(subS[0])) ? 1 : 0;
    }
    if (subS.length === 0) {
      return 1;
    }
    if (possibilitiesSet.has(parseInt(subS.slice(0, 1)))) {
      response.push(subNumDecoding(subS.slice(1)));
    }

    if (possibilitiesSet.has(parseInt(subS.slice(0, 2)))) {
      response.push(subNumDecoding(subS.slice(2)));
    }
    return response.reduce((acc, v) => acc + v, 0);
  });

  return subNumDecoding(s);
};

console.log(numDecodings("226"));
