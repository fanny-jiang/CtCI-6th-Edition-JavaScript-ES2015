// Implement an algorithm to determine if a string has all unique characters.

function isUnique(str) {
  let cache = {};

  for (let i = 0; i < str.length; i++) {
    if (!cache[str[i]]) {
      cache[str[i]] = 1;
    } else {
      cache[str[i]]++;
      // console.log(cache[str[i]])
      return false;
    }
  }
  return true;
}

module.exports = isUnique;
/*
let str = 'hello'
return false

let str = 'world'
return true

approach: use a cache to keep track of how many times a character has been encountered
if at any point, cache[char] > 1 return false
else return true

*/
