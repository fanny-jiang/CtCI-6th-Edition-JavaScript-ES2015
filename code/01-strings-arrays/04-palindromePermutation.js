function isPalindromePermutation (str) {
  if (!str) return false;
  if (str.length === 0) return true;

  let hash = {};
  let oddCount = 0;

  for (let i = 0; i < str.length; i++) { // O(n) time where n is str.length, O(n) space
    if (str[i] === ' ') continue;
    if(hash[str[i]] && str[i]) {
      hash[str[i]]++;
      if (hash[str[i]] % 2 !== 0) { // new count at that character is odd, increment oddCount
        oddCount++;
      } else {
        oddCount--; // otherwise, decrement the oddCount
      }
    } else {
      hash[str[i]] = 1;
      oddCount++;
    }
  }
  // if oddCount is 1 or 0, return true
  console.log('oddCount', oddCount);
  console.log('hash space', hash[' ']);
  return (oddCount === 0 || oddCount === 1);
}

module.exports = isPalindromePermutation;


/*
Example:
Input: 'Tact Coa'
Output: true, Permutations: 'taco cat', 'atco cta'

Approach:
- make input all lowercase and remove spaces
- try to make a palindrome out of the letters?
- use a hash table? and keep track of the count
- sort the string?
- in the hash map, there should be even counts and only one character can have an odd count
- check the counts in the end and then return true or false

*/