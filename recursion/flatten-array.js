// Given an array where each entry can be another array, and so forth, flatten the array.
// [4, [3, 6, [9, 1, 9, [5, 1]]], 8] -&gt; [4, 3, 6, 9, 1, 9, 5, 1, 8]

// accumalation
function flattenArray(arr) {
  // TODO: type check that arr is arr
  let result = [];

  arr.forEach((el, i) => {
    if (Array.isArray(el)) {
      result = [...result, ...flattenArray(...arr.slice(i))];
    } else {
      result.push(el);
    }
  });
  return result;
}
