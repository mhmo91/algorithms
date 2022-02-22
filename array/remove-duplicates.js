//  Remove Duplicates from Sorted Array
// https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/3011/
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // TODO input type validation
  // TODO short circut edge cases if needed
  // the use of variable names here is not practical, don't do that in real life. write names that your cat can understand!
  let k = 0;
  for (let i in nums) {
    const current = nums[i];
    //i=6, current = 2, k= 2
    if (i === 0) {
      nums[k] = current;
      k++;
    } else if (nums[k - 1] !== current) {
      nums[k] = current;
      k++;
    }
  }
  return k;
};
