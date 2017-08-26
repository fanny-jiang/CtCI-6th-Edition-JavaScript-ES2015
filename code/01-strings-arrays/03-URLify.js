function URLify (str) {
  if (!str || str.length === 0) return str;

  let result = [];

  for (let i = 0; i < str.length; i++) { // O(n) time, O(n) space
    if (str[i] === ' ') {
      // console.log('getting here? space');
      result.push('%', '2', '0');
    } else {
      // console.log('getting here? no space');
      result.push(str[i]);
    }
  }
  // console.log('result: ', result);
  return result;
}

module.exports = URLify;

/*
Example:
input: 'Hello world', 11
output: 'Hello%20world'

input: 'a lot of space   ', 14
output: 'a%20lot%20of%20space'

Approach:

- need to get rid of the trailing spaces
  -- how??
  -- slice a copy of only the length of the string O(n), where n is the true length
- where there's a ' ' replace it with %20 -- use .splice() O(n) where n is the true length

Efficiency: O(n) time, O(n)

*/