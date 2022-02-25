// https://leetcode.com/problems/decode-ways/submissions/

/**
 * @param {string} s
 * @return {number}
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
  // possibilitiesSet = (1,2,..., 26);
  const possibilitiesSet = new Set(
    Array.from(Array(26).keys()).map((v) => v + 1)
  );

  //12
  let subNumDecoding = memoize((subS: string) => {
    let response = [];
    if (subS[0] === "0") return 0;
    if (subS.length === 1) {
      return possibilitiesSet.has(parseInt(subS[0])) ? 1 : 0;
    }
    if (subS.length === 0) {
      return 1;
    }
    // we care about out pivot point

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
