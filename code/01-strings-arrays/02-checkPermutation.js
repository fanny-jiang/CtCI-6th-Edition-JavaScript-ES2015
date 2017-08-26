/* eslint-disable no-console */

function checkPermutation (str1, str2) {
  // how would I check if a string is a permutation of another?
  // check to see if it has the same number of letters, and
  // check if they have the same number of each letter

  // if not the same length, cannot be permutations
  if (str1 === 0 || str1.length !== str2.length) return false;

  // .sort() == quicksort
  let sortedStr1 = str1.sort(); // O(n) space, O(logn) time
  let sortedStr2 = str2.sort(); // O(m) space, O(logm) time

  for (let i = 0; i < sortedStr1.length; i++) { // O(n)
    let isPermutation = true;
    // console.log('i: ', i, 'str1', sortedStr1[i], 'str2', sortedStr2[i]);
    if (sortedStr1[i] !== sortedStr2[i]) { // O(1)
      isPermutation = false;
      return isPermutation;
    }
  }
  return true;
}

// Overall efficiency
// Time = O(nlogn + mlogm)
// Space = O(n + m)

module.exports = checkPermutation;



/*
use pointers?
data structures?
hash table?

hash table to store the count of each character
*/