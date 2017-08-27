function returnKthToLast (node, k) {
  if (!node) throw new Error('invalid list');
  let count = getLength(node);

  if ((count - k) <= 0 ) {
    throw new Error('list is not long enough');
  }

  for (let i = 1; i < count - k; i++) {
    node = node.next;
  }

  return node.val;
}

function getLength(node) {
  let count = 0;
  let current = node;
  while(current) {
    count++;
    current = current.next;
  }
  return count;
}

module.exports = returnKthToLast;

/*
Examples
input: [1, 2, 3], k = 1 // count = 3, return node 2
output: 2

input: [2, 4, 6, 8, 10], k = 3 // count = 5, return node 2
output: 4

approach:
- keep count of how many nodes there are
- when we reach a node whose .next === null, search the hash table for the value at hash[count - k]

Efficiency: O(n) time, O(1) space
*/