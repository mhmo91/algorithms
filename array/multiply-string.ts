/*
challenge: https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/3013/
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {Promise<string>}
 */

var multiply = async function (num1: string, num2: string) {
  // 1- convert num1 and num2 to map when key is the number and value is the base
  // 673 {(6,1), (7,10)....}

  // 2- iterate on the bigger number map and add one number at a time, shift reminder to the next sum operation, save the result to a sting
  // 3- return the string.

  //  type checking
  if (typeof num1 !== "string" || typeof num2 !== "string") {
    throw new TypeError(
      "Expected a number but found " + typeof num1 + "and" + typeof num2
    );
  }
  // short circus  cases if possible.
  if (num1 === "0" || num2 === "0") return "0";

  let [map1, map2] = [numberToMap(num1), numberToMap(num2)];

  let result = new Map<string, number>();

  map1.forEach((v1, key1) => {
    const a = v1;

    map2.forEach((v2, key2) => {
      const newBase = key1.concat(key2.replace(1, ""));
      result = sumOfMaps(result, numberToMap(a * v2, newBase));
    });
  });

  return Array.from(result.values()).reverse().join("");
};

/// Validate / test
var sumOfMaps = (map1: Map<string, number>, map2: Map<string, number>) => {
  let result = new Map();
  let base = "1";
  let remainder = 0;

  while (map1.size > 0 || map2.size > 0 || remainder) {
    //. splice the first two items from the maps
    const sum = (map1.get(base) || 0) + (map2.get(base) || 0) + remainder;
    map1.delete(base);
    map2.delete(base);
    // if both maps are empty now, add the reminder
    result.set(base, sum % 10); // validate that 10 will give 0!
    remainder = sum >= 10 ? 1 : 0;

    base = base.concat("0");
  }
  return result;
};

var numberToMap = (num: string | number, i = "1") => {
  let output = new Map();
  for (const char of num.toString().trim().split("").reverse()) {
    output.set(i.toString(), parseInt(char));
    i = i.concat("0");
  }
  return output;
};

(async () => {
  const x = await multiply("2", "3");
  console.log(x);
})();
