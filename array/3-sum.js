// https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/283/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const arrayCleanup = (arr, maxOccu) => {
  const occuranceMap = new Map();
  const cleanArray = [];
  arr.map((el) => {
    if ((occuranceMap.get(el) || 0) < maxOccu) {
      cleanArray.push(el);
      occuranceMap.set(el, (occuranceMap.get(el) || 0) + 1);
    }
  });

  return cleanArray;
};
var threeSum = function (nums) {
  if (!Array.isArray(nums)) {
    throw new TypeError("Expected an array but found a ghost");
  } else if (nums.length < 3) {
    return [];
  }

  //   sort numbers
  nums = nums.sort((a, b) => a - b);
  nums = arrayCleanup(nums, 3);

  // if a number occures more than three time, remove from the array

  // construct a map
  //   our map for effecient lookup
  const numsMap = new Map(nums.map((n, i) => [n, i]));
  if (numsMap.has(0) && numsMap.size === 1)
    return [[nums[0], nums[0], nums[0]]];

  //  clean the nums so it doesn't have more of th same num three occurances

  // construct 2 d matrix.
  let matrix = [];
  nums.forEach((num, i) => {
    matrix[i] = [...nums.slice(i)];
  });

  const uniqueSolutions = new Set();

  matrix
    .filter((arr) => arr.length >= 3)
    .forEach((arr, arrIndex) => {
      // -2 VS [-1,0,1,2,3]
      const base = arr.splice(0, 1).pop();

      let leftIndex = arrIndex + 1;

      while (arr.length >= 2) {
        const left = arr.splice(0, 1).pop();
        const possibleMatch = -(base + left) || 0;
        if (
          numsMap.has(possibleMatch) &&
          numsMap.get(possibleMatch) > leftIndex
        ) {
          uniqueSolutions.add(
            [base, left, possibleMatch].sort((a, b) => a - b).join(",")
          );
        }
        leftIndex++;
      }
    });

  return Array.from(uniqueSolutions).map((x) => x.split(","));
};
