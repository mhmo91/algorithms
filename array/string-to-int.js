// PROBLEM: https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/3009/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  // type check, if error throw TypeError
  let result = "";
  let cleanedUp = s.trim();
  let positive = true;
  if (["-", "+"].includes(cleanedUp[0])) {
    if (cleanedUp[0] === "-") positive = false;
    cleanedUp = cleanedUp.slice(1);
  }

  for (const char of cleanedUp) {
    // if char can be parsed into intger, add it to our cleaned string.
    if (Number.isNaN(parseInt(char)) === false) {
      result = result.concat(char);
    } else {
      break;
    }
  }
  // conditions
  let num = parseInt(result);
  if (Number.isNaN(num) === true) return 0;
  num = Math.min(num, Math.pow(2, 31) - (positive ? 1 : 0));
  num = num * (positive ? 1 : -1);
  // TRIM TO MAX/MIN VALUES
  return num;
};
