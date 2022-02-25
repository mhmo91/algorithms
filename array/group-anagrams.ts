function groupAnagrams(strs) {
  // splice the first element
  // compare to every element, if there's a match, add the element to result, remove the element from the array
  // repeat

  //TODO:  Type check -> throw type error

  //TODO:  short circut the edge cases

  const solutions = [];
  //"eat"  ["tea","tan","ate","nat","bat"]

  while (strs.length > 0) {
    const anagrams = strs.splice(0, 1);
    // loop on the rest and

    let i = 0;
    const tempStrs = JSON.parse(JSON.stringify(strs));
    for (const word of tempStrs) {
      if (isAnagram(word, anagrams[0])) {
        anagrams.push(word);
        strs.splice(i, 1);
      } else {
        i++;
      }
    }
    // return
    solutions.push(anagrams);
  }

  return solutions;
}

const isAnagram = (word1, word2) => {
  if (word1 === word2) return true;
  else if (word1.length !== word2.length) return false;

  // convert words into sets
  // get rid of duplicates
  word1 = new Set(word1.split(""));
  word2 = new Set(word2.split(""));
  let wordsSet = new Set([...Array.from(word1), ...Array.from(word2)]);
  if (wordsSet.size === word1.size) {
    return true;
  } else {
    return false;
  }
};

console.log(groupAnagrams(["ddddddddddg", "dgggggggggg"]));
